import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    cartData: {type: Object, default: {}},
}, {minimize: false, timestamps: true});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;