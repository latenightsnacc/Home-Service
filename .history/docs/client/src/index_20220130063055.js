import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import New from './dashboard/secretarygeneral/New';
import Member from './dashboard/Member';
import Treasurer from './dashboard/Treasurer';
import President from './dashboard/President';
import SecretaryGeneral from './dashboard/SecretaryGeneral';
import Coordinator from './dashboard/Coordinator';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard/member" element={<Member />} />
        <Route path="/dashboard/secretarygeneral" element={<SecretaryGeneral />} />
        <Route path="/dashboard/secretarygeneral/members" element={<Members />} />
        <Route path="/dashboard/secretarygeneral/new" element={<New />} />
        <Route path="/dashboard/secretarygeneral/notes" element={<Notes />} />
        <Route path="/dashboard/secretarygeneral/attendance" element={<Attendance />} />
        <Route path="/dashboard/secretarygeneral/reports" element={<Re} />
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
