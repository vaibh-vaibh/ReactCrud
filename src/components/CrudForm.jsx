import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CrudForm = ({ records, setRecords, editIndex, setEditIndex }) => {
  const [form, setForm] = useState({ name: '', mob: '', email: '', dob: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (editIndex !== null) {
      setForm(records[editIndex]);
    }
  }, [editIndex, records]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...records];
      updated[editIndex] = form;
      setRecords(updated);
      setEditIndex(null);
    } else {
      setRecords([...records, form]);
    }
    setForm({ name: '', mob: '', email: '', dob: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name: <input type="text" name="name" value={form.name} onChange={handleChange}  required /></td>
            </tr>
            <tr>
              <td>Mob: <input type="tel" name="mob" value={form.mob} maxlength={10} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td>Email: <input type="email" name="email" value={form.email} onChange={handleChange} required/></td>
            </tr>
            <tr>
              <td>DOB: <input type="date" name="dob" value={form.dob} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td>
                <button type="submit">{editIndex !== null ? "Update" : "Save"}</button>
                <button type="button" onClick={() => navigate('/view')}>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default CrudForm;