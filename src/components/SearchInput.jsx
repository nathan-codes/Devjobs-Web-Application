import "./searchInput.css";
import searchIcon from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import Button from "./Button";
import React, { useState } from "react";
import FilterModal from "./FilterModal";


function SearchInput({ onSearch }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const UpdateForm = (evt) => {
    const searchValue = evt.target.value;
    onSearch(searchValue);
  };

  return (
    <>
      <div className="inputGroup">
        <input
          type="text"
          name="search"
          id="search"
          className="searchInput"
          placeholder="Filter by title..."
          onChange={UpdateForm}
        />
        <span className="searchButtons my-auto">
          <button className="btn filter-button me-2" onClick={handleModalOpen}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                fill="currentcolor"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <button className="btn search-button ">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="currentcolor"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </span>
      </div>

      {/* Tablet and desktop search */}
      <div className="container text-center tablet-inputGroup">
        <div className="row mt-3">
          <div className="col  d-flex  ">
            <img src={searchIcon} alt="search" className="me-3 tabletImages" />
            <input
              type="text"
              name="search"
              id="search"
              className=""
              placeholder="Filter by title..."
              onChange={UpdateForm}
            />
          </div>
          <div className="col locationInput d-flex justify-content-center">
            <img
              src={locationIcon}
              alt="location"
              className="me-3 tabletImages"
            />
            <input
              type="text"
              name="location"
              id="location"
              className=""
              placeholder="Filter by location..."
              onChange={UpdateForm}
            />
          </div>
          <div className="col  d-flex   justify-content-center">
            <input
              type="checkbox"
              name="fulltime"
              id="fulltime"
              className="my-auto"
            />
            <span className="my-auto role mx-2">Full Time</span>
            <Button buttonName="Search" />
          </div>
        </div>
      </div>

      {isModalOpen && <FilterModal onClose={handleModalClose} />}
    </>
  );
}

export default SearchInput;
