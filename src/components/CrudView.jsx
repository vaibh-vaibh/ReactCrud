import React from 'react';
import { useNavigate } from 'react-router-dom';

const CrudView = ({ records, setRecords, setEditIndex }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate('/');
  };

  return (
    <>
      <h2>Record List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr><td colSpan="5">No Records Found</td></tr>
          ) : (
            records.map((rec, index) => (
              <tr key={index}>
                <td>{rec.name}</td>
                <td>{rec.mob}</td>
                <td>{rec.email}</td>
                <td>{rec.dob}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Update</button>
                  &nbsp;
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <br />
      <button onClick={() => navigate('/')}>Back to Form</button>
    </>
  );
};

export default CrudView;
