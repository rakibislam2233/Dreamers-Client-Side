import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";
import useCollege from "../../Hook/useCollege";
import Button from "../Shared/Button";
const Colleges = () => {
  const [colleges, isLoading] = useCollege();
  console.log(colleges);
  return (
    <div className="w-full py-10 bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF] p-5 pt-24">
      <Container>
        <h2 className="text-2xl font-semibold text-center py-5">All College</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {colleges.map((college) => (
            <>
              <div className="border shadow-lg p-5 rounded-xl  cursor-pointer flex justify-between flex-col gap-3 text-gray-800">
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      className="w-full h-52 rounded-xl hover:scale-110 duration-300 transition-all "
                      src={college.college_image}
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl font-bold">{college.college_name}</h2>
                  <h3 className="font-semibold">
                    Admission Date: {college.admission_date}
                  </h3>
                  <h3 className="font-semibold">{college.research_history}</h3>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">
                      Research: {college.number_of_research}
                    </p>
                    <p>{college.college_rating}</p>
                  </div>
                </div>
                <div className="flex justify-center py-5">
                  <Link to={`/collegesDetails/${college._id}`}>
                    <Button> View Details</Button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Colleges;
