const router = require("express").Router();
const Category = require("../models/Category");

//Add Categories
router.route("/addcategory").post((req, res) => {

    const Name = req.body.Name;

   
    const addCategory = new Category({
        Name    
       
    })


    addCategory.save().then(() => {

        res.json("Category Added!");

    }).catch((err) => {

        console.log(err);

    })

})

//Get All Categories
router.get("/allcategories",(req,res)=>{

    Category.find().exec((err,Category)=>{
          if(err){
              return res.status(400).json({
                 error:err
             });
         }
            return res.status(200).json({
              success:true,
              allCategories:Category
          });
      });
  })

module.exports = router;