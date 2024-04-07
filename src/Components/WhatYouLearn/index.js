import "./index.css";

const WhatYouLearn = () => (
  <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5 ">
    <h1
      className="fs-2 border-bottom border-3 p-3 border-dark pt-5 mt-5"
      id="learnings"
    >
      What You'll Learn!
    </h1>
    <div className="d-flex text-center flex-column justify-content-center align-items-center flex-sm-row mt-3 mb-5">
      <div className="p-5 m-2 d-flex flex-column align-items-center justify-content-center  border-2 border-dark rounded w-100">
        <div className="bg-bodyss">
          <h4 className=" text-light">Knowledge level</h4>
        </div>
        <ul className="bo d-flex flex-column justify-content-start align-items-start">
          <li>Basic Accounting </li>
          <li>Financial Statements</li>
          <li>Recording Transactions</li>
        </ul>
        <div className="bg-bodyss">
          <h4 className=" text-light">3 Papers</h4>
        </div>
      </div>
      <div className="p-5 m-2 d-flex flex-column align-items-center justify-content-center  border-2 border-dark rounded w-100">
        <div className="bg-bodyss">
          <h4 className=" text-light">Skill level</h4>
        </div>
        <ul className="bo d-flex flex-column justify-content-start align-items-start">
          <li>Advanced FS analysis </li>
          <li>Cost Accounting</li>
          <li>Taxation</li>
          <li>Advanced Accounting</li>
          <li>Management Accounting</li>
          <li>Professional Ethics </li>
        </ul>
        <div className="bg-bodyss">
          <h4 className=" text-light">6 Papers</h4>
        </div>
      </div>
      <div className="p-5 m-2 d-flex flex-column align-items-center justify-content-center  border-2 border-dark rounded w-100">
        <div className="bg-bodyss">
          <h4 className=" text-light">Proffesional level</h4>
        </div>
        <ul className="bo d-flex flex-column justify-content-start align-items-start">
          <li>Advanced FS Reporting</li>
          <li>Auditing & Assurance</li>
          <li>Stategic Management</li>
          <li>Ethical Leadership</li>
        </ul>
        <div className="bg-bodyss">
          <h4 className=" text-light">4 Papers</h4>
        </div>
      </div>
    </div>
  </div>
);

export default WhatYouLearn;
