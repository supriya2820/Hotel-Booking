import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res)=>{
    try {
        //CREATE A SVIX INSTANCE WITH CLERK WEBHOOK SECRET.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //GETTING HEADERS
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        //VERIFYING HEADERS
        await whook.verify(JSON.stringify(req.body),headers)

        //GETTING DATA FROM REQUEST BODY
        const {data, type} = req.body

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }

        //SWITCH CASES FOR DIFFERENT EVENTS
        switch (type) {
            case "User.created":{
                await User.create(userData);
                break;
            }

            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }

            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;
            }

            default:
                break;
            }
            res.json({success:true, message: "Webhook Recieved"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message});
        
    }
}
export default clerkWebhooks;