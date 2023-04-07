import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    name : {
        type:String,
        required:true,
        trim:true
    },

    email: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        trim:true
    },
    role: {
        type:String,
        default:'user'
    },
    image : {
        type:String,
        default:'https://res.cloudinary.com/demo/image/upload/koala.jpg'
    },
    emailVerified: {
        type:Boolean,
        default:false
    },
    defaultPaymentMethod: {
        type:String,
        default:''
    },

    address: [
        {
            firstName: {
                type:String,
               
              
            },
            lastName: {
                type:String,
                
              
            },
            phoneNumber: {
                type:String,
                
                
            },

            address: {
                type:String,
                

            },
            city: {
                type:String,

            },
            state: {
                type:String,

            },
            country: {
                type:String,

            },
            zipCode: {
                type:String,

            },

            isActive: {
                type:Boolean,
                default:false
            }
        }

    ],

    timestamp: {
        type:Date,
        default:Date.now
    }


}


)

const userModel = mongoose.models.User || mongoose.model('User', userSchema);

export default userModel;
