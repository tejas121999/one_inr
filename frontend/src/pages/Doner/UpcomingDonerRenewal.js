import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingDonerRenewal = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card bg-light mb-3 mt-3 ">
          <div className="navbar navbar-light bg-light justify-content-between mt-3">
            <a className="navbar-brand">VIEW ALL DONER</a>
            <form className="form-inline pull-right">
              <Link to="/add_doner" type="" className="btn btn-primary">
                Add Doner
              </Link>
            </form>
          </div>

          <div className="navbar justify-content-between mt-3">
            <button
              type="button"
              className="btn btn-light dropdown-toggle "
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              export
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                csv
              </a>
              <a className="dropdown-item" href="#">
                pdf
              </a>
              <a className="dropdown-item" href="#">
                jpg
              </a>
            </div>
            <form className="form-group pull-right">
              <input className="my-2" placeholder="search" type="search" />
            </form>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Renewal Date</th>
                <th>Name</th>
                <th>Donated</th>
                <th>Balance</th>
                <th>Project</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>17-aug-2020</th>
                <td>tejas talkar</td>
                <td>20</td>
                <td>30</td>
                <td>1</td>
                <td>
                  <Link to="#" type="" className="btn btn-link">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Link>
                  <Link to="/view_doner" type="" className="btn btn-link">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>
                  <Link to="/edit_doner" type="" className="btn btn-link">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>17-aug-2020</th>
                <td>tejas talkar</td>
                <td>20</td>
                <td>30</td>
                <td>1</td>
                <td>
                  <Link to="#" type="" className="btn btn-link">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Link>
                  <Link to="/view_doner" type="" className="btn btn-link">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>

                  <Link to="/edit_doner" type="" className="btn btn-link">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>17-aug-2020</th>
                <td>tejas talkar</td>
                <td>20</td>
                <td>30</td>
                <td>1</td>
                <td>
                  <Link to="#" type="" className="btn btn-link">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Link>
                  <Link to="/view_doner" type="" className="btn btn-link">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </Link>

                  <Link to="/edit_doner" type="" className="btn btn-link">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UpcomingDonerRenewal;
