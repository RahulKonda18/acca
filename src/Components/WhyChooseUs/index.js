import { FaUserCheck, FaUsers } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

const WhyChooseUs = () => (
  <div
    className="d-flex flex-column justify-content-center align-items-center pt-5"
    id="about"
  >
    <h1 className="fs-2 border-bottom border-3 p-3 border-dark pt-5">
      Why Choose Us?
    </h1>
    <div className="d-flex text-center flex-column justify-content-center align-items-center flex-sm-row mt-3 mb-5">
      <div className="p-5 m-2 d-flex flex-column align-items-center justify-content-center  border-2 border-dark rounded w-100">
        <HiLightBulb size={60} />
        <h4>A+ Expert Faculty</h4>
        <p className="text-center">ACCA Approved Partner</p>
      </div>
      <div className="p-5 m-2 d-flex flex-column align-items-center justify-content-center  border-2 border-dark rounded w-100">
        <FaUsers size={60} />
        <h4>Complete Package</h4>
        <p className="text-center">ACCA Approved Program</p>
      </div>
      <div className="p-5 m-2 d-flex flex-column align-items-center justify-content-center  border-2 border-dark rounded w-100">
        <FaUserCheck size={60} />
        <h4>100% Placements</h4>
        <p className="text-center">Get 100% Placements</p>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
