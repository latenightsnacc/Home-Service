import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import New from './dashboard/secretary-general/New';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<List />} />
        <Route path="/dashboard/member" element={<Member />} />
        <Route path="/dashboard/secretarygeneral" element={<SecretaryGeneral />} />
        <Route path="/dashboard/secretary-general/members" element={<Members />} />
        <Route path="/dashboard/secretary-general/new" element={<New />}
        <Route path="/dashboard/secretary-general/notes" element={<Notes />} />
        <Route path="/dashboard/secretarygeneral/attendance" element={<Attendance />} />
        <Route path="/dashboard/secretarygeneral/reports" element={<Notes />} />
        <Route path="/dashboard/secretarygeneral/events" element={<Events />} />
        <Route path="/dashboard/treasurer" element={<Treasurer />} />
        <Route path="/dashboard/president" element={<President />} />
        <Route path="/dashboard/coordinator" element={<Coordinator />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
