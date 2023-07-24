import "./CardGroup.css";
import Card from "./Card";
// import jobInformation from "../data.json"
// import firstlogo from "../assets/logos/pod.svg"

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
                <Card jobData={job} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CardGroup;
