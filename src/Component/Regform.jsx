import React from "react";
import "./regform.css";

function Regform() {
  return (
    <>
      <div className="m-5">
        <form action="">
          <div className="mt-3">
            <label className="mb-1">PHONE NUMBER</label>
            <br />
            <div className="d-flex">
              <div className="w-50">
                {" "}
                <select id="cars">
                  <option value="volvo">+91 India</option>
                  <option value="saab">+44 Italy</option>
                </select>
              </div>
              <div className="w-50 ms-2">
                <input
                  className="numberinput w-100"
                  placeholder="9876543210"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="" className="mb-1">
              NAME
            </label>
            <br />
            <input className="nameinput" type="text" />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="mb-1">
              EMAIL [OPTIONAL]{" "}
            </label>
            <br />
            <input className="emailinput" type="email" />
          </div>
          <div className="mt-5 ">
            <button>CONTINUE</button>
            <p className="mt-3">
              Get ready to recieve a secret code (OTP) on your phone
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Regform;
