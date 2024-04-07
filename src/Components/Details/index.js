import { GrSteps } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { PiExam } from "react-icons/pi";
import { IoNewspaperSharp } from "react-icons/io5";

const Details = () => (
  <div className="d-flex flex-column align-items-center justify-content-between w-100 flex-sm-row p-3">
    <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
      <GrSteps size={30} />
      <h4>Levels</h4>
      <p>Three(13 Papers)</p>
    </div>
    <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
      <IoMdTime size={30} />
      <h4>Duration</h4>
      <p>6-10 Weeks</p>
    </div>
    <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
      <PiExam size={30} />
      <h4>Exams</h4>
      <p>Quarterly</p>
    </div>
    <div className="p-3 d-flex flex-column justify-content-center align-items-center border border-dark rounded border-2 w-100 m-2">
      <IoNewspaperSharp size={30} />
      <h4>Exemptions</h4>
      <p>Upto 9 papers</p>
    </div>
  </div>
);

export default Details;
