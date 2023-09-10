import React from "react";

export default function Footer() {
  
  return (
    <>
      <footer className=" p-5 text-white text-center">
        <div className="container-fluid p-5">
          <div className="row">
            {/* is there is not a size in bootstrap smaller than (sm) */}
            <div className="col-md-4 my-md-0 my-sm-2">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 my-md-0 my-sm-4">
              <h3>AROUND THE WEB</h3>
              <div className="mediaIcons d-flex justify-content-center">
                <div className="icon"></div>
                {/* Icon        sdsdsdd */}
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
              </div>
            </div>
            <div className="col-md-4 my-md-0 my-sm-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <p className=" bg-dark text-white text-center p-3 mb-0">
        Copyright © Your Website 2021
      </p>
    </>
  );
}
