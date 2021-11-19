import React, { useState } from 'react';
import Viewdonormodal from '../../Modals/Donor/ViewDonorModal';
import Addfund from '../../Modals/Donor/AddFund';

const Donors = () => {
  const [viewModal, setViewModal] = useState(false);
  const [viewData, setViewData] = useState('');
  const [fundModal, setFundModal] = useState(false);

  const ViewModalOpen = data => {
    setViewData(data);
    setViewModal(true);
  };
  const ViewModalClose = () => {
    setViewModal(false);
  };
  const fundModaOpen = () => {
    setFundModal(true);
  };
  const fundModaClose = () => {
    setFundModal(false);
  };
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Donated',
      selector: row => row.donated,
      sortable: true,
    },
    {
      name: 'Balance',
      selector: row => row.balance,
      sortable: true,
    },
    {
      name: 'Project',
      selector: row => row.project,
      sortable: true,
    },
    {
      name: 'Actions',
      button: true,
      cell: () => {
        return (
          <div style={{ width: '200px' }}>
            <button>Edit</button>
          </div>
        );
      },

      sortable: false,
    },
  ];

  const data = [
    {
      id: 1,
      name: 'akshaykumar eklare',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 3,
      name: 'akshaykumar eklare',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 4,
      name: 'Ghostbusters',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 5,
      name: 'akshaykumar eklare',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 6,
      name: 'Ghostbusters',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 7,
      name: 'akshaykumar eklare',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 8,
      name: 'Ghostbusters',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 9,
      name: 'akshaykumar eklare',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 10,
      name: 'Ghostbusters',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 11,
      name: 'akshaykumar eklare',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
    {
      id: 12,
      name: 'Ghostbusters',
      donated: '1988',
      balance: '100',
      project: '10',
      email: 'akshay@gmail.com',
    },
  ];
  return (
    <React.Fragment>
      <Viewdonormodal
        show={viewModal}
        onHide={ViewModalClose}
        data={viewData}
      />
      <Addfund show={fundModal} onHide={fundModaClose} />
      <div className="card">
        <p
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            margin: '20px',
            width: '100%',
            marginLeft: '20px',
          }}
        >
          DONOR DETAIL
        </p>
      </div>
      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-between',
          }}
        >
          <button
            style={{ alignSelf: 'flex-start' }}
            className="btn btn-primary"
          >
            Export
          </button>
          <input placeholder="Search" />
        </div>
        {/* <DataTable columns={columns} data={data} pagination /> */}
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Donated</th>
              <th>Balance</th>
              <th>Projects</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.donated}</td>
                  <td>{item.balance}</td>
                  <td>{item.project}</td>
                  <td className="table-link cursor-pointer">
                    {' '}
                    <button onClick={() => ViewModalOpen(item)} className="btn">
                      Edit
                    </button>
                    <button className="btn">View</button>
                    <button className="btn">Trans</button>
                    <button onClick={() => fundModaOpen()} className="btn">
                      Fund
                    </button>
                    <button className="btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Donors;
