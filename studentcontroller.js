const studentmodel = require("../Models/studentmodel");
const Studentmodel = require("../Models/studentmodel");
const Validator = require("../Validation/validation")
let createStudent = async(req,res)=>{
    try {
        let data = req.body
        if (!Validator.isValidBody(data)){
            return res.status(404).send({msg:"No Data Provided"});
        }

        let {Student_name,Email,Usn,Gender,Mobile,Password}=data;
        
        if (!Validator.isValid(Student_name)){
            return res.status(400).send({msg:"Student Name is Required"});
        }
        if (!Validator.isValidName.test(Student_name)){
            return res.status(400).send({msg:"Please enter a valid name"});
        }
        if (!Validator.isValid(Email)){
            return res.status(400).send({msg:"Email is Required"});
        }
       
        let sameEmail = await studentmodel.findOne({ Email });
        if (sameEmail){
            return res.status(400).send({msg:"This Email Already Exists"});
        }
        if (!Validator.isValidEmail.test(Email)){
            return res.status(400).send({msg:"invalid email"});
        }
        if (!Validator.isValid(Usn)){
            return res.status(400).send({msg:"Usn is Required"});
        }
        let sameUsn = await studentmodel.findOne({ Usn });
        if (sameUsn ){
            return res.status(400).send({msg:"This Usn Already Exists"});
        }
        if (!Validator.isValidUsn.test(Usn)){
            return res.status(400).send({msg:"invalid Usn"});
        }
        if (!Validator.isValid(Gender)){
            return res.status(400).send({msg:"Gender is Required"});
        }
        if (!Validator.isValid(Mobile)){
            return res.status(400).send({msg:"Mobile no is Required"});
        }
        let sameMobile = await studentmodel.findOne({ Mobile });
        if (sameMobile){
            return res.status(400).send({msg:"This Mobile Already Exists"});
        }
        if (!Validator.isValidMobile.test(Mobile)){
            return res.status(400).send({msg:"invalid mobile number"});
        }
        if (!Validator.isValid(Password)){
            return res.status(400).send({msg:"Password is Required"});
        }
       
        let register = await Studentmodel.create(data)
        return res
        .status(201)
        .send({
            status:true,
            msg:"Student Registered Succesfully",
            data: register
        });
    } catch(error){
        return res
        .status(500)
        .send({status:false,msg:"Internal Server Error"});
    }
};
module.exports = {createStudent}