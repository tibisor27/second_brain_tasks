import mongoose, {model, Schema} from "mongoose";

mongoose.connect("mongodb+srv://boiciuctyby27:EQZ6qsh364xUFMK5@cluster0.ic5enly.mongodb.net/test")
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