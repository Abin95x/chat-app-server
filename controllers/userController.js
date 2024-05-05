import  hashPassword  from "../utils/hashPassword.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const userSignup = async (req,res) => {
    try{
        const {name,email,password1} = req.body
        const exist = await prisma.user.findUnique({where: {email:email}})
        if(!exist){
            const hashedPassword = await hashPassword(password1)
            const newUser = await prisma.user.create({
                data:{
                    name:name,
                    email:email,
                    password:hashedPassword
                }
            })

            console.log(newUser)

            res.status(200).json({ message: "Signup successful" });
        }else{
            res.status(409).json({message:'Conflict user already registered with this email'})
        }
        

       
        
        res.status(200).json({ message: "Signup successful" });

    }catch(error){
        console.log('Error in signup',error)
        res.status(500).json({ error: "Internal Server Error" });

    }
}