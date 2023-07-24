import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import Container from "../Shared/Container/Container";

const Admission = () => {
  return (
    <div className="w-full py-10 bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF] p-5 pt-24">
      <Container>
        <h2 className="text-2xl font-semibold text-center py-5">Admission Now</h2>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex justify-between items-center border shadow-lg p-5 rounded-xl space-y-3 box-border">
            <div>
              <h2 className="text-xl font-semibold">Thakurgaon Govt College</h2>
              <h3 className="text-xl font-semibold">
                Admission Date: 1 Aug 2023
              </h3>
            </div>
            <div className="flex justify-center py-2">
              <Link to={`/admissionProcess/${5000}`}><Button>Admission Now</Button></Link>
            </div>
          </div>
          <div className="flex justify-between items-center border shadow-lg p-5 rounded-xl space-y-3 box-border">
            <div>
              <h2 className="text-xl font-semibold">Thakurgaon Govt College</h2>
              <h3 className="text-xl font-semibold">
                Admission Date: 1 Aug 2023
              </h3>
            </div>
            <div className="flex justify-center py-2">
              <Button>Admission Now</Button>
            </div>
          </div>
          <div className="flex justify-between items-center border shadow-lg p-5 rounded-xl space-y-3 box-border">
            <div>
              <h2 className="text-xl font-semibold">Thakurgaon Govt College</h2>
              <h3 className="text-xl font-semibold">
                Admission Date: 1 Aug 2023
              </h3>
            </div>
            <div className="flex justify-center py-2">
              <Button>Admission Now</Button>
            </div>
          </div>
          <div className="flex justify-between items-center border shadow-lg p-5 rounded-xl space-y-3 box-border">
            <div>
              <h2 className="text-xl font-semibold">Thakurgaon Govt College</h2>
              <h3 className="text-xl font-semibold">
                Admission Date: 1 Aug 2023
              </h3>
            </div>
            <div className="flex justify-center py-2">
              <Button>Admission Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Admission;
