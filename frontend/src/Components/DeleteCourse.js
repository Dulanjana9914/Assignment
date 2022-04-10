import './Course.css'
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from "react-router";


export default function Update() {

    const [_id, set_id] = useState();
    const [Name, setName] = useState();
    const [Description, setDescription] = useState();
      
    let history = useHistory();

    useEffect(()=>{
        set_id(localStorage.getItem('_id'));
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));

},[])


function deleteData(e) {
  e.preventDefault();
  axios
    .delete(`http://localhost:8070/courses/deletecourse/${_id}`, {
      
     
    })
    .then(() => {
      alert("Successfully Deleted!");
      history.push("/");
    })
    .catch((err) => {
      alert(err);
    });
}
  return (
    <div className="course" onSubmit={deleteData}>
    <center><h1 className="Hfont">Delete Course</h1></center>
 
    <br></br>
 <div >
       <form>
       <div className="col-md-7 mb-3" style={{display:"flex"}}>
       <div   className="col-md-6 mb-3 font" >
        <label  htmlFor="name" className="form-label">
           Course Name:
           </label></div>
           <div className="col-md-7 mb-2" >
          <input 
           type="text"
           disabled
           className="form-control"
           id="C_Name"
           value={Name}
           onChange={(e) => {
            setName(e.target.value);
          }}
           
           /></div>
       </div>


       <div className="col-md-7 mb-3" style={{display:"flex"}}>
       <div className="col-md-6 mb-3 font" >
        <label htmlFor="description" className="form-label">
           Description  :
           </label></div>
           <div className="col-md-7 mb-2" >
          <textarea
           type="text"
           disabled
           className="form-control"
           id="C_Description"
           value={Description}
           onChange={(e) => {
            setDescription(e.target.value);
          }}
           
           /></div>
       </div>
                 
          <h3>Are you sure want to delete the course?</h3>    

        <hr className="col-md-10 mb-3" />       
        <center> <button type="submit" id= "btndelete" className="btn btn-danger" href='/' >
        Delete Course
        </button></center>  
       
        </form>
       </div>

</div>
  )
}

