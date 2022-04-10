import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function AddCourse() {

    const [Name, setName] = useState();
    const [Description, setDescription] = useState();
    const [Category, setCategory] = useState();
    const [Start_Date, setStart_Date] = useState();
    
    const[request,setRequest] = useState([]);

    
    useEffect(()=>{
      
      axios.get("http://localhost:8070/categories/allcategories").then((res)=>{
        setRequest(res.data.allCategories);
    }).catch((err)=>{
        alert(err.message);
     })
            

},[])

    function addCourse(e) {
      e.preventDefault();
  
      const addCourse = {
        Name,
        Description,
        Category,
        Start_Date
      
      };
  
      axios
        .post(
          "http://localhost:8070/courses/addcourse",
          addCourse
        )
        .then(() => {
          alert("Course Added Successfully");
          e.target.reset(); // to clear input field after the submission
        })
        .catch((err) => {
          alert(err);
        });
    }

  return (
    <div className="course">
    <center><h1 className="Hfont">Add Course</h1></center>
 
    <br></br>
 <div >
      <form onSubmit={addCourse}>
       <div className="col-md-7 mb-3" style={{display:"flex"}}>
       <div   className="col-md-6 mb-3 font" >
       <center> <label  htmlFor="name" className="form-label">
         <b>  Course Name:</b>
           </label></center></div>
           <div className="col-md-7 mb-2" >
          <input 
           type="text"
           required
           className="form-control"
           id="C_Name"
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
           onChange={(e) => {
            setDescription(e.target.value);
          }}
           
           /></div>
       </div>
              
               <div className="col-md-7 mb-3 font" style={{display:"flex"}}>
               <div className="col-md-6 mb-2">
              <center> <label  htmlFor="category" className="form-label">
              <b> Category :</b>
               </label></center></div>
            <div className="col-md-6 mb-2">
  
          <select
           className="form-select" 
           required
           id="C_Category"
           onChange={(e) => {
            setCategory(e.target.value);
          }}>
          
          <option selected>Select Category</option>
          {request.map((data,index)=>(
          <option value={data.Name}>{data.Name}</option>
          ))}

          </select> 
               </div> </div> 

       <div className="col-md-7 mb-3" style={{display:"flex"}}>
       <div className="col-md-6 mb-3 font" >
        <center><label htmlFor="startDate" className="form-label">
           <b>Start Date  : </b>
           </label></center>
           </div>
           <div className="col-md-7 mb-2" >
          <input
           type="date"
           required
           className="form-control"
           id="C_Date"
           onChange={(e) => {
           setStart_Date(e.target.value);
          }}
           
           /></div>
       </div>           
              

               <hr className="col-md-10 mb-3" />       
        <center> <button type="submit" id= "btnupdate" className="btn btn-primary" href='/' >
        Add Course
        </button></center>  
       
        </form>
       </div>

</div>
  )
}
