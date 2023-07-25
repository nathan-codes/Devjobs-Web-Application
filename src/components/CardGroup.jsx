import "./CardGroup.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardGroup({ devData, searchTerm }) {
  const filteredDevData = devData.filter((developer) => {
    const titleMatch = developer.position
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const locationMatch = developer.location
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const fullTimeMatch =
      developer.contract && searchTerm.toLowerCase() === "full time";
    return titleMatch || locationMatch || fullTimeMatch;
  });

  return (
    <section className="CardGroup">
      <div className="container">
        <div className="row">
          {filteredDevData.map((job) => {
            return (
              <div className="col-md-6 col-lg-4" key={job.id}>
                <Link to="/detailspage" style={{textDecoration:"none"}} >
                  <Card jobData={job} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CardGroup;
