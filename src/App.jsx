import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrudForm from './components/CrudForm';
import CrudView from './components/CrudView';
import './App.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <CrudForm
            records={records}
            setRecords={setRecords}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />
        } />
        <Route path="/view" element={
          <CrudView
            records={records}
            setRecords={setRecords}
            setEditIndex={setEditIndex}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;