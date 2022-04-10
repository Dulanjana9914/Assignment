import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AllCourses from './Components/AllCourses';
import UpdateCourse from './Components/Update';
import AddCourse from './Components/AddCourse'
import DeleteCourse from './Components/DeleteCourse'

function App() {
  return (
   <Router>
  
    
  <Route path="/" exact component={AllCourses}/>
  <Route path="/courses/addcourse" exact component={AddCourse}/>
  <Route path="/courses/updatecourse/:id" exact component={UpdateCourse}/>
  <Route path="/courses/deletecourse/:id" exact component={DeleteCourse}/>
 
  </Router>
  );
}

export default App;
