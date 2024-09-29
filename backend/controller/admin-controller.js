const User = require("../models/user-model");
const newPerson = require("../models/newPerson-model")
const anniversary = require("../models/anniversary-model");


const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find({}, {password: 0});
        if(!users || users.length === 0){
            return res.status(404).json({message: "No user found"})
        }
        return res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const addAnniversary = async (req, res)=>{
    try {
        const { name, email, date } = req.body;

        const userExist = await anniversary.findOne({ email })

        if(userExist){
            return res.status(400).json({msg: "Email already exists"})
        }

        const userCreated = await anniversary.create({ 
            name, 
            email, 
            date,
        })

        res.status(200).json({ 
            msg: "member added successfully.", 
            persnId: userCreated._id.toString()
        })


    } catch (error) {
        res.status(404).send({msg:"page not found"})
    }
}


const addUser = async (req, res)=>{
    try {
        const { name, email, dob } = req.body;

        const userExist = await newPerson.findOne({ email })

        if(userExist){
            return res.status(400).json({msg: "Email already exists"})
        }

        const userCreated = await newPerson.create({ 
            name, 
            email, 
            dob,
        })

        res.status(200).json({ 
            msg: "member added successfully.", 
            persnId: userCreated._id.toString()
        })


    } catch (error) {
        res.status(404).send({msg:"page not found"})
    }
}


const deleteUserbyId = async (req, res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id });
        res.status(200).json({message:"User Deleted Successfuly"});
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports ={ getAllUsers, addAnniversary, addUser, deleteUserbyId };