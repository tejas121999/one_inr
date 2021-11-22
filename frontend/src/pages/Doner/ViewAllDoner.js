import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllDoner = () => {
    return (
        <div className="container">
            <div className="card bg-light mb-3 mt-3 ">

                <div className="navbar navbar-light bg-light justify-content-between mt-3">
                    <a className="navbar-brand">VIEW ALL DONER</a>
                    <form className="form-inline pull-right">
                        <Link to='/add_doner' type="button" className="btn btn-primary">Add Doner</Link>
                    </form>
                </div>

                <div className="navbar justify-content-between mt-3">
                    <button
                        type='button'
                        className="btn btn-light dropdown-toggle "
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        export
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">csv</a>
                        <a className="dropdown-item" href="#">pdf</a>
                        <a className="dropdown-item" href="#">jpg</a>
                    </div>
                    <form className="form-group pull-right">
                        <input className="my-2" placeholder="search" type="search" />
                    </form>
                </div>


                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>GST</th>
                            <th>ACtion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th>Mark</th>
                            <td>Nimap Infotect</td>
                            <td>8569321470</td>
                            <td>Nimap.infotech@gmail.com</td>
                            <td>GSTNOOPINTHECHAT</td>
                            <td>
                                <Link to='#' type="button" className="btn btn-danger">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </Link>
                                <Link to='/editpartner' type="button" className="btn btn-warning">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>Mark</th>
                            <td>Nimap Infotect</td>
                            <td>8569321470</td>
                            <td>Nimap.infotech@gmail.com</td>
                            <td>GSTNOOPINTHECHAT</td>
                            <td>
                                <Link to='#' type="button" className="btn btn-danger">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </Link>
                                <Link to='/editvendor' type="button" className="btn btn-warning">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th>Mark</th>
                            <td>Nimap Infotect</td>
                            <td>8569321470</td>
                            <td>Nimap.infotech@gmail.com</td>
                            <td>GSTNOOPINTHECHAT</td>
                            <td>
                                <Link to='#' type="button" className="btn btn-danger">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </Link>
                                <Link to='/editvendor' type="button" className="btn btn-warning">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewAllDoner
