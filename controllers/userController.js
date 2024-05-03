export const userSignup = async(req,res) => {
    try{
        console.log(req.body,'contoo')
        res.status(200).json({ message: "testing success" });
    
    }catch(error){
        console.log(error)
    }
}