import './Course.css'
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from "react-router";


export default function Update() {

    const [_id, set_id] = useState();
    const [Name, setName] = useState();
    const [Description, setDescription] = useState();
    const [Category, setCategory] = useState();
    
    const[request,setRequest] = useState([]);

    let history = useHistory();

    useEffect(()=>{
        set_id(localStorage.getItem('_id'));
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));
        setCategory(localStorage.getItem('Category'));
        
        axios.get("http://localhost:8070/categories/allcategories").then((res)=>{
          setRequest(res.data.allCategories);
      }).catch((err)=>{
          alert(err.message);
       })
              

},[])


function updateData(e) {
  e.preventDefault();
  axios
    .put(`http://localhost:8070/courses/updatecourse/${_id}`, {
      Name,
      Description,
      Category
      
     
    })
    .then(() => {
      alert("Updated Successfully");
      history.push("/");
    })
    .catch((err) => {
      alert(err);
    });
}
  return (
    <div className="course" onSubmit={updateData}>
    <center><h1 className="Hfont">Update Course</h1></center>
 
    <br></br>
 <div >
       <form>
       <div className="col-md-7 mb-3" style={{display:"flex"}}>
       <div   className="col-md-6 mb-3 font" >
       <center> <label  htmlFor="name" className="form-label">
           <b>Course Name: </b>
           </label> </center>
           </div>
           <div className="col-md-7 mb-2" >
          <input 
           type="text"
           required
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
       <center> <label htmlFor="description" className="form-label">
        <b> Description  :</b>
           </label></center></div>
           <div className="col-md-7 mb-2" >
          <textarea
           type="text"
           required
           className="form-control"
           id="C_Description"
           value={Description}
           onChange={(e) => {
            setDescription(e.target.value);
          }}
           
           /></div>
       </div>
              
               <div className="col-md-7 mb-3 font" style={{display:"flex"}}>
               <div className="col-md-6 mb-2">
              <center> <label  htmlFor="category" className="form-label">
               <b>Category : </b>
               </label></center></div>
            <div className="col-md-6 mb-2">
  
          <select
           className="form-select" 
           required
           id="C_Category"
           value={Category}
           onChange={(e) => {
            setCategory(e.target.value);
          }}>
          
          <option selected>Select Category</option>
          {request.map((data,index)=>(
          <option value={data.Name}>{data.Name}</option>
          ))}

          </select>
          
           
           
               </div> </div>            
              

               <hr className="col-md-10 mb-3" />       
        <center> <button type="submit" id= "btnupdate" className="btn btn-primary" href='/' >
        Submit
        </button></center>  
       
        </form>
       </div>

</div>
  )
}
