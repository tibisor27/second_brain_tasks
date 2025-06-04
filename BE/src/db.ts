import mongoose, {model, Schema} from "mongoose";
import {MONGO_URL} from "./config";

mongoose.connect(`${MONGO_URL}`)
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password :{ type: String }
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}
})
    
export const ContentModel = model("Content", ContentSchema);