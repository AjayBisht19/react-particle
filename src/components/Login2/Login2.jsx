import React from "react";
import './Login2.css';

export default function Login2(){
    return(<>
    <div>
        <div className="glass2"></div>
        <div class="glass p-5 shadow m-5  rounded" style={{position:'absolute',top:'60%',left:'50%',transform:"translate(-50%,-50%"}}>
          <div class="card-body">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                alt="costa cloud logo"
                style={{ marginBottom: "30px" }}
                src="http://www.costacloud.com/assets/img/logo1-default.png"
              />
              <p>
                Solutions Designed for Your Business eOffice for Government,
                Procurement Automation, <br />
              </p>
              <p style={{ marginBottom: "30px" }}>
                Health Records and may more...
              </p>

              <h2>Sign in to your account.</h2>
              <div style={{ width: "100%" }}>
                <input
                  class="form-control m-3"
                  type="text"
                  placeholder="Username"
                  aria-label="default input example"
                />
                <input
                  class="form-control m-3"
                  type="password"
                  placeholder="password"
                  aria-label="default input example"
                />
              </div>
              <button type="button" class="btn btn-primary">
                submit
              </button>
            </div>
          </div>
        </div>
        </div>
        {/* </div> */}
    </>);
}