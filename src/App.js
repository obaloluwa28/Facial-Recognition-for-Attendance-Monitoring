import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import dashboard from './pages/dashbord/dashboard'
import user from './pages/user/user'
import attendance from './pages/attendance/attendance'
import settings from './pages/settings/settings'
import lecturers from './pages/user/lecturers'
import student from './pages/user/student'
import './App.css'


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component = {dashboard} />
            <Route path='/user' component = {user} />
            <Route path='/attendance' component = {attendance} />
            <Route path='/settings' component = {settings} />
            <Route path='/lecturers' component = {lecturers} />
            <Route path='/students' component = {student} />
          </Switch>
      </Router>
    </>
    
  );
}

export default App;
