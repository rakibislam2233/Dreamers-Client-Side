import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import Container from "../Shared/Container/Container";
import useCollege from "../../Hook/useCollege";

const Admission = () => {
  const [colleges, isLoading] = useCollege();
  return (
    <div className="w-full py-10 bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF] p-5 pt-24">
      <Container>
        <h2 className="text-2xl font-semibold text-center py-5">Admission Now</h2>
        <div className="grid grid-cols-1 gap-5">
          {
            colleges.map(college=><><div className="flex justify-between items-center border shadow-lg p-5 rounded-xl space-y-3 box-border">
            <div className="flex justify-between gap-5 items-center">
              <div >
                <img className="w-20 h-20 rounded" src={college.college_image} alt="" />
              </div>
              <div>
              <h2 className="text-xl font-semibold">{college.college_name}</h2>
              <h3 className="font-semibold">
               Admission Date: {college.admission_date}
              </h3>
              </div>
              
            </div>
            <div className="flex justify-center py-2">
              <Link to={`/admissionProcess/${college._id}`}><Button>Admission Now</Button></Link>
            </div>
          </div></>)
          }
        </div>
      </Container>
    </div>
  );
};

export default Admission;
