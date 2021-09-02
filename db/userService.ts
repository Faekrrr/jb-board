import { Mongoose } from "mongoose";
import userModel from '../schemas/userSchema'

class UserService{
    createUser(data: any){
        userModel.create({
            username: data.username, 
            email: data.email,
            pwd: data.pwd,
            join_date: Date.now(),
            active: true,
            meta: {
                self_description: data.self_description,
                interests: data.self_interests
            },
            role: "member",
            avatar: data.avatar
        });
    }
}

const userService = new UserService();

export default userService;