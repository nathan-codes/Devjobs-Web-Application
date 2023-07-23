import "./Card.css";


function Card({ jobData }) {
  return (
    <div className="card Card">
      <span
        className="companylogo d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundColor: jobData.logoBackground }}
      >
        <img
          src={jobData.logo}
          className="d-inline-block "
          alt=""
        />
      </span>

      <div className="card-body">
        <p className="posted-time">
          <span>{jobData.postedAt}</span>

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

        <p className="job-role ">{jobData.position}</p>
        <p className="company-name ">{jobData.company}</p>

        <a href="#" className="location-text">
          {jobData.location}
        </a>
      </div>
    </div>
  );
}

export default Card;
