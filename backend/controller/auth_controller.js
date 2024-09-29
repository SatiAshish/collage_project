const User = require("../models/user-model")
const newPerson = require("../models/newPerson-model")
const anniversary = require("../models/anniversary-model");
const bcrypt = require("bcryptjs")



const home = async (req, res) =>{
    try {
        res.status(200).send("Welcome to home page")
    } catch (error) {
        res.status(404).send({msg:"page not found"})
    }
}

// *********************//

const register = async (req, res)=>{
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email })

        if(userExist){
            return res.status(400).json({msg: "Email already exists"})
        }

        const hash_password = await bcrypt.hash(password, 10)

        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password: hash_password,
        })

        res.status(200).json({ 
            msg: "Registration Successful", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })
    } catch (error) {
        res.status(404).send({msg:"page not found"})
    }
}

// **************************//

const login = async (req, res)=>{
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        
        if(!userExist){
            return res.status(400).json({msg: "Invalid Credential" })
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({ 
                msg: "login Successful", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }else{
            res.status(401).json({msg: "Invalid Email or Password."});
        }

    } catch (error) {
        res.status(404).send({msg:"page not found"})
    }
}

// ********************** //

const user = async (req, res) => {
    try {
      const userData = req.user;
    //   console.log(userData);
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };

// ***********add members for brthday*********** //

// const addUser = async (req, res)=>{
//     try {
//         const { name, email, dob } = req.body;

//         const userExist = await newPerson.findOne({ email })

//         if(userExist){
//             return res.status(400).json({msg: "Email already exists"})
//         }

//         const userCreated = await newPerson.create({ 
//             name, 
//             email, 
//             dob,
//         })

//         res.status(200).json({ 
//             msg: "member added successfully.", 
//             persnId: userCreated._id.toString()
//         })


//     } catch (error) {
//         res.status(404).send({msg:"page not found"})
//     }
// }



//*****************************************/

// const addAnniversary = async (req, res)=>{
//     try {
//         const { name, email, date } = req.body;

//         const userExist = await anniversary.findOne({ email })

//         if(userExist){
//             return res.status(400).json({msg: "Email already exists"})
//         }

//         const userCreated = await anniversary.create({ 
//             name, 
//             email, 
//             date,
//         })

//         res.status(200).json({ 
//             msg: "member added successfully.", 
//             persnId: userCreated._id.toString()
//         })


//     } catch (error) {
//         res.status(404).send({msg:"page not found"})
//     }
// }

//*****************************************/

const getUser = async (req, res) =>{

    // **********************************************
    
    try {

        const today = new Date();
        // const todayString = `${today.getMonth() + 1}-${today.getDate()}`;

        // Query the database to fetch all data
        const data = await newPerson.find({
                    dob: {
                        $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                        $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
                    }
                });
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {home, register, login, user, getUser};