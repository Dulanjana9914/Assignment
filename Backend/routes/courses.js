const router = require("express").Router();
const Course = require("../models/Course");

//Add Courses
router.route("/addcourse").post((req, res) => {

    const Name = req.body.Name;
    const Description = req.body.Description;
    const Category = req.body.Category;
    const Start_Date = req.body.Start_Date;
   
    

    const addCourse = new Course({
        Name,
        Description,
        Category,
        Start_Date
       
    })


    addCourse.save().then(() => {

        res.json("Course Added!");

    }).catch((err) => {

        console.log(err);

    })

})

//Display All Courses
router.get("/allcourses",(req,res)=>{

    Course.find().exec((err,Course)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              allCourses:Course
          });
      });
  })


//Update Course(class)
router.put("/updatecourse/:id",(req,res) => {

    
    Course.findByIdAndUpdate(

        req.params.id,
        {
          $set : req.body
        },
   
        (err,Course)=>{
          if(err){
   
            return res.status(400).json({error:err});
          }
   
          return res.status(200).json({
                
            success:"Update successfully"
            
   
          });
        }
     )
      
    })


//Delete course

router.route("/deletecourse/:id").delete(async(req, res) => {


    let courseID = req.params.id;
    await Course.findByIdAndDelete(courseID).then(() => {
        res.status(200).send({ status: "Course Deleted" })
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({ status: "Can Not Delete the Course", error: err.message })

    })
})

module.exports = router;