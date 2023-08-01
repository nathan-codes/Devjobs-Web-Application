import "./FilterModal.css";
import Button from "./Button";
function FilterModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Your modal content goes here */}
        <span className="d-flex mb-3">
          {" "}
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fill-rule="nonzero"
            />
          </svg>
          <input type="text" placeholder="Filter by location.." className="ms-2"/>
        </span>
        <hr />

        <span className="mb-3">
          <input type="checkbox" name="modalCheckbox" id="modalcheckbox" />
          <label htmlFor="modalcheckbox" className="ps-3">
            Full Time Only{" "}
          </label>
        </span>

        <button className="closeButton" onClick={onClose}>
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
