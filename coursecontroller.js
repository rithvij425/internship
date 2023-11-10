const coursemodel = require("../Models/coursemodel");

let createCourse = async(req,res)=>{
    try {
        let data = req.body
        if (!Validator.isValidBody(data)){
            return res.status(404).send({msg:"No Data Provided"});
        }

        let {Course_name,Course_code,Course_type}=data;
        
        if (!Validator.isValid(Course_name)){
            return res.status(400).send({msg:"Course Name is Required"});
        }
        if (!Validator.isValid(Course_code)){
            return res.status(400).send({msg:"Course code is Required"});
        }
        if (!Validator.isValid(Course_type)){
            return res.status(400).send({msg:"Course type is Required"});
        }
        let register1 = await coursemodel.create(data)
        return res
        .status(201)
        .send({
            status:true,
            msg:"Course Created Succesfully",
            data: register1,
        });
    } catch(error){
        return res
        .status(500)
        .send({status:false,msg:"Internal Server Error"});
    }
};
module.exports = {createCourse}