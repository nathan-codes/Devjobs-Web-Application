import Navbar from "../Navbar";
import scootImage from "./logos/scoot.svg";
import SecondaryButton from "../SecondaryButton";
import Button from "../Button";

import "../Header.css";
import "./DetailsPage.css";
function DetailsPage({ jobData }) {
  return (
    <>
      <main className="Header DetailsPage">
        <Navbar />

        <div className="container details-group">
          <div className="container text-center detail-head">
            <div className="row">
              <div className="col-3  logoSection d-flex align-items-center justify-content-center">
                <img src={scootImage} alt="" className="logoImage w-75" />
              </div>

              <div className="col  d-flex align-items-center justify-content-between px-5">
                <div className="">
                  <h1 className="companyName m-0">Scoot</h1>
                  <p className="companyWebsite m-0">scoot.com</p>
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
                    <span>1w ago</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#6E8098" />
                    </svg>
                    <span>Part Time</span>
                  </p>
                  <h1 className="devposition">Senior Software Engineer </h1>
                  <p className="location m-0 p-0">United Kingdom</p>
                </div>

                <Button buttonName="Apply Now" />
              </div>
              <div className="description  p-0 my-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                eros pede semper est, vitae luctus metus libero eu augue. Morbi
                purus libero, faucibus adipiscing, commodo quis, gravida id,
                est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis,
                mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                urna.
              </div>

              <h2 className="requirements">Requirements</h2>
              <div className="description  p-0 my-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                eros pede semper est, vitae luctus metus libero eu augue. Morbi
                purus
              </div>

              <div className="requirementlist">
                <ul>
                  <li>Morbi interdum mollis sapien. Sed</li>
                  <li>Morbi interdum mollis sapien. Sed</li>
                  <li>Morbi interdum mollis sapien. Sed</li>
                  <li>Morbi interdum mollis sapien. Sed</li>
                </ul>
              </div>

              <h2 className="requirements">What You Will Do </h2>

              <div className="description  p-0 my-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                eros pede semper est, vitae luctus metus libero eu augue. Morbi
                purus
              </div>
              <div className="requirementlist">
                <ol>
                  <li>Morbi interdum mollis sapien. Sed</li>
                  <li>Morbi interdum mollis sapien. Sed</li>
                  <li>Morbi interdum mollis sapien. Sed</li>
                  <li>Morbi interdum mollis sapien. Sed</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container d-flex align-items-center p-0 justify-content-between ">
            <div className="left">
  
              <h1 className="devposition">Senior Software Engineer </h1>
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
