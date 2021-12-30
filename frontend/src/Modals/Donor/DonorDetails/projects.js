import React from 'react';

const Projects = () => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <th>Project Name</th>
          <th>Amount Donated</th>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.project}</td>
              <td>{item.donated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;

const data = [
  {
    project: 'Paying Children education fee',
    donated: '100',
  },
  {
    project: 'Paying Children education fee',
    donated: '100',
  },
  {
    project: 'Paying Children education fee',
    donated: '100',
  },
  {
    project: 'Paying Children education fee',
    donated: '100',
  },
  {
    project: 'Paying Children education fee',
    donated: '100',
  },
  {
    project: 'Paying Children education fee',
    donated: '100',
  },
];
