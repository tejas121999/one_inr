import React from "react";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <div className="site-main">
      <div className="page-title background-page">
        <div className="container">
          <h1>Reset Password</h1>
          <div class="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Reset Password</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Reset Password</div>
              <div className="card-body">
                <form
                  method="POST"
                  action="https://oneinr.com/password/email"
                  autocomplete="off"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="sFCqv6uR9eUvPlhX1LkWt1EFYZPVqL7eYRZbm4Gc"
                    autocomplete="off"
                  />
                  <div class="form-group row">
                    <label
                      for="email"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      E-Mail Address
                    </label>
                    <div className="col-md-6">
                      <input
                        id="email"
                        type="text"
                        className="form-control"
                        name="email"
                        // value=""
                        required=""
                        style={{ fontStyle: "normal" }}
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="form-group row mb-0">
                    <div className="col-lg-12">
                      <center>
                        <button type="submit" className="btn-primary">
                          Send Password Reset Link
                        </button>
                      </center>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
