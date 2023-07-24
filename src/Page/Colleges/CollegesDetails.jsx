import { Rating } from "@smastrom/react-rating";
import { useParams } from "react-router-dom";
import useSingleCollege from "../../Hook/useSingleCollege";
const CollegesDetails = () => {
  const { id } = useParams();
  const [singleData] = useSingleCollege({id:id})
  return (
    <div className="pt-24 w-full max-w-5xl mx-auto py-20">
      <div className="border border-gray-300 rounded mt-5 p-5 cursor-pointer flex justify-between flex-col gap-5 text-gray-800">
        <div className="space-y-2">
          <div className="rounded-xl overflow-hidden">
            <img
              className="w-full h-96 rounded-xl"
              src={singleData.college_image}
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold">{singleData.college_name}</h2>
          <h2 className="font-semibold">{singleData.college_details}</h2>
          <h3 className="font-semibold">
            Admission Date: {singleData.admission_date}
          </h3>
          <h3 className="font-semibold">
            Admission process : Admission is based on merit and entrance exams
            for certain courses.
          </h3>
          <h3 className="font-semibold">
            Research History : {singleData.research_history}
          </h3>
          <h2 className="font-semibold">
            Events Name:
            {singleData.event_name?.map((eventName) => (
              <>
                <span className="pl-1">{eventName}</span>,
              </>
            ))}
          </h2>
          <h2 className="font-semibold">
            Events Details:
            {singleData.event_details?.map((eventDetails) => (
              <>
                <span className="pl-1">{eventDetails}</span>,
              </>
            ))}
          </h2>
          <h2 className="font-semibold">
            Sport Categories:
            {singleData.sports?.categories.map((sport) => (
              <>
                <span className="pl-1">{sport}</span>,
              </>
            ))}
          </h2>
          <h2 className="font-semibold">
            Sport Details : {singleData.sports?.details}
          </h2>
          <p className="font-semibold">
              Research : {singleData.number_of_research}
            </p>
            <p className="flex gap-1 font-semibold">Rating : <Rating readOnly style={{ maxWidth: 120 }} value={singleData.college_rating} /></p>
        </div>
      </div>
    </div>
  );
};

export default CollegesDetails;
