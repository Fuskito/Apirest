import mongoose from "mongoose";
import { isGoodPassword } from "../utils/validators.js";
import bcrypt from "bcrypt"

//Faltaria encriptacion y categoria de usuario

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2,
    trim: true,
    lowercase: true,
  },

  lastName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2,
    trim: true,
    lowercase: true,
  },

  email: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 6,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
    unique: true,
  },

  age: {
    type: Number,
    required: true,
    min: 16,
    max: 110,
  },

  registrationDate: {
    type: Date,
    default: Date.now(),
  },

  password: {
    required: true,
    type: String,
    validate: {
      validator: function (value) {
        return isGoodPassword(value);
      },
      message:
        "Password must be between 6 and 12 characters, with at least one number, one upercase letter and one lowercase letter",
    },
  },

  role: {
    type: String,
    enum: ["ADMIN", "COMERCIANTE", "CLIENTE"], 
    default: "CLIENTE", 
    required: true,
    validate: {
      validator: function (value) {
        const rolesPermitidos = ["ADMIN", "COMERCIANTE", "CLIENTE"];
        return rolesPermitidos.includes(value);
      },
      message: (props) => `${props.value} no es un rol válido. Los roles permitidos son ADMIN, COMERCIANTE, CLIENTE.`,
    },
  },
  
  
});

userSchema.pre("save", function (next) {
  
  this.password = bcrypt.hashSync(this.password, 10)

  next()
})

export default mongoose.model("user", userSchema);

