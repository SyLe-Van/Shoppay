import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your full name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        unique: true,
        trim: true,
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minlength: [8, "Your password must be at least 8 characters long"],
        },
        role: {
            type: String,
            default: "user",
        },
        image: {
            type: String,
            default: "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg",
        },
        }

    }
    
});