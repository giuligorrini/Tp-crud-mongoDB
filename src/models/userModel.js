import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { isGoodPassword } from "../../utils/validators.js";

const clubEnum=[
    "Gevp",
    "Apv",
    "Ciudad de Buenos Aires",
    "Sitas",
    "Velez",
    "Ballester",
    "Bolivar",
    "Estudiantes",
]
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:16,
        minlenght:2,
        trim:true,
        lowercase:true,
    },
    lastName:{
        type:String,
        required:true,
        maxlength:16,
        minlenght:2,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        maxlength:30,
        minlenght:8,
        trim:true,
        lowercase:true,
        match:/^\S+@\S+\.\S+$/,
        unique:true,
    },
    club:{
        type:String,
        required:true,
        enum:clubEnum,
        validate:{
            validator: function(v){
                return clubEnum.includes(v);
            }, message: props => `${props.value} no es un club valido`,
        },
    },
    age:{
        type:Number,
        require:true,
        min:14,
        max:120,
    },
    registrationDate:{
        type:Date,
        default:Date.now(),
    },
    password:{
        type:String,
        validate:{
            validator:function(value){
                return isGoodPassword(value);
            },
            message:"La constraseña debe tener entre 6 y 112 caracteres,un digito numerico,una letra minuscula,una letra mayuscula",
        },
    },

});

userSchema.pre("save",function (next){
    this.password=bcrypt.hashSync(this.password,10);
    next();
})

export default mongoose.model("user",userSchema);

