import React, {useState,useEffect} from "react";
import axios from 'axios';
import moment from "moment";
import 'moment-timezone';
import './Course.css'




export default function AllCourses() {

    const[request,setRequest] = useState([]);
    
    useEffect(()=>{

      axios.get("http://localhost:8070/courses/allcourses").then((res)=>{
           setRequest(res.data.allCourses);
       }).catch((err)=>{
           alert(err.message);
        })
      

},[])

const setData = (data) => {
  let {_id,Name,Description,Category,Start_Date} = data;
  
  localStorage.setItem('_id',_id);
  localStorage.setItem('Name', Name);
  localStorage.setItem('Description', Description);
  localStorage.setItem('Category', Category);
  localStorage.setItem('Start_Date', Start_Date);

  console.log(data);  
}

  return (

  <div>
    <div className = "container">
   <center>    
   
     <h2>All Courses </h2>     </center> 
     <div className="Addbtn"> <a className="btn btn-primary" role="button" 
       href={`/courses/addcourse`}
       style={{textDecoration:'none'}}>
       Add New Course 
       </a> </div> 
       <br></br>
    <table className="table" style={{backgroundColor:"white"}}>

         <thead>
           <tr>
           </tr>
         </thead>
     <tbody>

       {request.map((data,index)=>(
                 
                 <tr key={index}>
                     <th scope="row"></th>
                     <td> </td>
                     <td><center> <u> <b> {data.Name}</b> </u> <br></br> </center>
                     <center> {data.Description} <br></br></center>
                    
                    <div className="Sdate"> 
            
                  <center>  
                   
                  <i class="fa-solid fa-calendar-days"></i>
                    {moment(data.Start_Date).format('DD/MM/YYYY')} <br></br> 
                  </center> </div><br></br>
                  </td> 
                      <a className="btn btn-secondary btntwo" role="button"
                                onClick={() => setData(data)}
                                href={`/courses/updatecourse/${data._id}`}
                                style={{textDecoration:'none'}}>
                                Update Course
                                </a>
                                <br></br>
                      
                     <a className="btn btn-warning btntwo" role="button"
                       href={`/courses/deletecourse/${data._id}`} onClick={() => setData(data)}
                       style={{textDecoration:'none'}}>
                       Delete Course</a>
                      <td>
                      </td>
                 </tr>
               

         ))}
         
         
         </tbody> 

     </table>
     </div>
     </div>
  )
}
