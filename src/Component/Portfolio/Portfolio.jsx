import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../imgs/port1.png";
import img2 from "../../imgs/port2.png";
import img3 from "../../imgs/port3.png";

export default function Portfolio() {

  const imgs=document.querySelectorAll('img')

  useEffect(()=>{
    imgs.forEach((imgS)=>{
      imgS.addEventListener('mouseenter',()=>{
        console.log('yay');
      })
    })
  })

  return (
    <>
      <div className="contacts  row justify-content-center m-5 align-items-center">
        <div className="container-fluid p-5 ">
          <div className=" text-center  row align-items-center p-2  ">
            <div className="container-fluid p-2 ">
              <h1 className="pb-2 mt-4 toptext fw-bolder">
                PORTFOLIO COMPONENT
              </h1>
              <div className="linenStar my-3 d-flex justify-content-center align-items-center ">
                <div className="lineContact"></div>
                <i className="starContact fa-solid fa-star mx-3"></i>
                <div className="lineContact"></div>
              </div>
            </div>
          </div>
          <div className="workingImgs w-100 ">
            <div className="row g-5">
              <div className="col-lg-4 portImg col-md-6 ">
                <img src={img1} className="w-100" alt="" />
                <div className="imgLayer  justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="fa-6x" style={{ color: '#ffffff' }} />
                </div>
              </div>
              <div className="col-lg-4 portImg col-md-6 ">
                <img src={img2} className="w-100" alt="" />
                <div className="imgLayer  justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="fa-6x" style={{ color: '#ffffff' }} />
                </div>
              </div>
              <div className="col-lg-4 portImg col-md-6 ">
                <img src={img3} className="w-100" alt="" />
                <div className="imgLayer  justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="fa-6x" style={{ color: '#ffffff' }} />
                </div>
              </div>
              <div className="col-lg-4 portImg col-md-6 ">
                <img src={img1} className="w-100" alt="" />
                <div className="imgLayer  justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="fa-6x" style={{ color: '#ffffff' }} />
                </div>
              </div>
              <div className="col-lg-4 portImg col-md-6 ">
                <img src={img2} className="w-100" alt="" />
                <div className="imgLayer  justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="fa-6x" style={{ color: '#ffffff' }} />
                </div>
              </div>
              <div className="col-lg-4 portImg col-md-6 ">
                <img src={img3} className="w-100" alt="" />
                <div className="imgLayer  justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} className="fa-6x" style={{ color: '#ffffff' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
