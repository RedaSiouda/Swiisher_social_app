const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const userController = {
    createUser: async (req,res) =>{
        try{
            const {userName, profilPic, password, displayName, emailAdress, pet  } = req.body

            if(!password){
                return res.status(400).json({error: 'Password missng'})
            }

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = new UserModel({
                displayName,
                userName,
                profilPic,
                emailAdress,
                pet,
                password: hashedPassword,
            })

            const savedUser = await newUser.save()

            res.status(201).json(savedUser);
        }catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          };
    },

    //GET all user
    getAllUser: async (req,res) =>{
        try {
            const allUser = await UserModel.find();
            res.json(allUser);
          } catch (error) {
            console.error('Error retrieving all user from MongoDB:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }
}

module.exports = userController