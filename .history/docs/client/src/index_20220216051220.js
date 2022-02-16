import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './Register';
import Login from './Login';
import Member from './dashboard/Member';
import ViewAttendance from './dashboard/Member/ViewAttendance';
import ViewDues from './dashboard/Member/ViewDues';
import Profile from './dashboard/Member/Profile';
import President from './dashboard/President';
import SecretaryGeneral from './dashboard/SecretaryGeneral';
import Coordinator from './dashboard/Coordinator';
import Notes from './dashboard/secretarygeneral/Notes';
import New from './dashboard/secretarygeneral/New';
import Members from './dashboard/secretarygeneral/Members';
import Attendance from './dashboard/secretarygeneral/Attendance';
import RecordAttendance from './dashboard/secretarygeneral/RecordAttendance';
import Reports from './dashboard/secretarygeneral/Reports';
import Sevents from './dashboard/secretarygeneral/Events';
import Minutes from './dashboard/secretarygeneral/Minutes';
import MonthlyAttendance from './dashboard/secretarygeneral/MonthlyAttendance';
import WeeklyAttendance from './dashboard/secretarygeneral/WeeklyAttendance';
import Treasurer from './dashboard/Treasurer';
import MonthlyDuesList from './dashboard/treasurer/MonthlyDuesList';
import NewMonthlyDues from './dashboard/treasurer/NewMonthlyDues';
import NewProjectDues from './dashboard/treasurer/NewProjectDues';
import NewEventDues from './dashboard/treasurer/NewEventDues';
import Dues from './dashboard/treasurer/Dues';
import Project from './dashboard/treasurer/Project';
import Events from './dashboard/treasurer/Events';
import Account from './dashboard/treasurer/Account';
import NewCollection from './dashboard/treasurer/NewCollection';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/member" element={<Member />} />
        <Route path="/dashboard/member/" element={<Member />} />
        <Route path="/dashboard/member" element={<Member />} />
        <Route path="/dashboard/member" element={<Member />} />
        <Route path="/dashboard/secretarygeneral" element={<SecretaryGeneral />} />
        <Route path="/dashboard/secretarygeneral/members" element={<Members />} />
        <Route path="/dashboard/secretarygeneral/new" element={<New />} />
        <Route path="/dashboard/secretarygeneral/notes" element={<Notes />} />
        <Route path="/dashboard/secretarygeneral/notes/:minuteId" element={<Minutes />} />
        <Route path="/dashboard/secretarygeneral/attendance" element={<Attendance />} />
        <Route path="/dashboard/secretarygeneral/attendance/:year/:month" element={<MonthlyAttendance />} />
        <Route path="/dashboard/secretarygeneral/attendance/:date" element={<WeeklyAttendance />} />
        <Route path="/dashboard/secretarygeneral/events" element={<Sevents />} />
        <Route path="/dashboard/secretarygeneral/recordattendance" element={<RecordAttendance />} />
        <Route path="/dashboard/secretarygeneral/reports" element={<Reports />} />
        <Route path="/dashboard/treasurer" element={<Treasurer />} />
        <Route path="/dashboard/treasurer/monthlydueslist" element={<MonthlyDuesList />} />
        <Route path="/dashboard/treasurer/newmonthlydues" element={<NewMonthlyDues />} />
        <Route path="/dashboard/treasurer/newprojectdues" element={<NewProjectDues />} />
        <Route path="/dashboard/treasurer/neweventdues" element={<NewEventDues />} />
        <Route path="/dashboard/treasurer/dues/:collectionMonth/:collectionYear/:collectionFor" element ={<Dues />} />
        <Route path="/dashboard/treasurer/project" element={<Project />} />
        <Route path="/dashboard/treasurer/events" element={<Events />} />
        <Route path="/dashboard/treasurer/account" element={<Account />} />
        <Route path="/dashboard/treasurer/newcollection" element={<NewCollection />} />
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
