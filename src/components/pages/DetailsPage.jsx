import Navbar from "../Navbar";
import scootImage from "./logos/scoot.svg";
import SecondaryButton from "../SecondaryButton";
import Button from "../Button";
import "../Header.css";
import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import developerData from "../pages/data.json"




function DetailsPage() {

  const { id } = useParams();

  const jobData = developerData.find((job) => job.id === parseInt(id));
  

  return (
    <>
      <main className="Header DetailsPage">
        <Navbar />

        <div className="container details-group">
          <div className="container text-center detail-head">
            <div className="row">
              <div className="col-3  logoSection d-flex align-items-center justify-content-center" style={{backgroundColor:jobData.logoBackground}}>
                <img src={jobData.logo} alt="" className="logoImage w-75" />
              </div>

              <div className="col  d-flex align-items-center justify-content-between px-5">
                <div className="">
                  <h1 className="companyName m-0">{jobData.company}</h1>
                  <p className="companyWebsite m-0">
                    {jobData.company.toLowerCase()}.com
                  </p>
                </div>

                <div className="">
                  <SecondaryButton buttonName="Company Site" />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5   detail-body p-5">
            <div className="row">
              <div className="container d-flex align-items-center p-0 justify-content-between ">
                <div className="left">
                  <p className="d-flex  workdetails m-0 align-items-center  w-50 justify-content-between">
                    <span> {jobData.postedAt}</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#6E8098" />
                    </svg>
                    <span>{jobData.contract}</span>
                  </p>
                  <h1 className="devposition">{jobData.position} </h1>
                  <p className="location m-0 p-0">{jobData.location} </p>
                </div>

                <Button buttonName="Apply Now" />
              </div>
              <div className="description  p-0 my-4">{jobData.description}</div>

              <h2 className="requirements">Requirements</h2>
              <div className="description  p-0 my-4">
                {jobData.requirements.content}
              </div>

              <div className="requirementlist">
                <ul>
                  {jobData.requirements.items.map((item) => {
                    return <li>{item}</li>;
                   
                  })}
                </ul>
              </div>

              <h2 className="requirements">What You Will Do </h2>

              <div className="description  p-0 my-4">
                {jobData.role.content}
              </div>
              <div className="requirementlist">
                <ol>
                  {jobData.role.items.map((item) => {
                    return <li>{item}</li>
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container d-flex align-items-center p-0 justify-content-between ">
            <div className="left">
              <h1 className="devposition">{jobData.position} </h1>
              <p className="location m-0 p-0">So Digital Inc. </p>
            </div>

            <Button buttonName="Apply Now" />
          </div>
        </footer>
      </main>
    </>
  );
}
export default DetailsPage;
