import Detail from "../model/contact.model.js";

export const contact = async(req , res)=>{
    try {

        const {name , gender , email , feedback} = req.body;

        const Details = new Detail({
            name: name,
            gender:gender,
            email: email,
            feedback:feedback
        });

        await Details.save();

        res.status(201).json({ 
            message: "Your Form is submitted successfully!",
            detail:{
              _id:Details._id,
              name:Details.name,
              gender:Details.gender,
              email:Details.email,
              feedback:Details.feedback
            }
           });
    } catch (error) {
        console.log("Error:", error.message);
         res.status(500).json({ message: "Internal server error" });
    }
}