import { mongoose } from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: null
    },
},
{ timestamps: true }
);
const UserModel = mongoose.model('users', UserSchema);

export default UserModel;