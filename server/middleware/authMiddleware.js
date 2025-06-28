import User from "../models/User.js";

//MIDDLEWARE TO CHECK IF USER IS AUTHENTICATED
export const protect = async (req,resizeBy, next)=>{
    const {userId} = req.auth;
    if (!userId) {
        res.json({success: false, message: "not authenticated"})
    } else {
        const user = await User.findById(userId);
        req.user = user;
        next()    
    }
}