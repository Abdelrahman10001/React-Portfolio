import React, { useEffect, useState } from "react";

export default function Contact() {



  return (
    <>
      <div className="contacts  row justify-content-center align-items-center">
        <div className="container p-5 ">
          <div className=" text-center row align-items-center p-2  ">
            <div className="container-fluid p-5 ">
              <h1 className="pb-2 mt-4 toptext fw-bolder">CONATCT SECTION</h1>
              <div className="linenStar my-3 d-flex justify-content-center align-items-center ">
                <div className="lineContact"></div>
                <i className="starContact fa-solid fa-star mx-3"></i>
                <div className="lineContact"></div>
              </div>
            </div>
          </div>
          <div className="allinput position-relative ">
            <label className=" position-absolute " htmlFor="userName">userName</label>
          <input
            type="text"
            id="userName"
            className=" w-50 mx-auto mb-5"
            placeholder="Your Name"
          />
          </div>
          
          <input
            type="number"
            className=" w-50 mx-auto my-5"
            placeholder="Your Age"
          />
          <input
            type="email"
            className=" w-50 mx-auto my-5"
            placeholder="YOur Email"
          />
          <input
            type="password"
            className=" w-50 mx-auto my-5"
            placeholder="YOur Password"
          />
          <div className=" d-flex">
            <button className="btn btn-success mx-auto">Send Message</button>
            {/* Can't touch any sass */}
          </div>
        </div>
      </div>
    </>
  );
}
