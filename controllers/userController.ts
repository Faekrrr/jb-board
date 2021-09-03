import userService from '../db/userService'

class UserController {

    getOneUser = function(id?: Number, username?: string) {

    }
    
    getAllUsers(){
    
    }
    
    getSpecificUsers(active?: boolean, interests?: string){
    
    }

    async createUser(req: Request, res: Response, next: any){
        //@ts-ignore
        const username = req.body.username;
        //@ts-ignore 
        const email = req.body.email;
        //@ts-ignore 
        const pwd = req.body.password;
        //@ts-ignore 
        const join_date = Date.now();
        //@ts-ignore 
        const active = "true";
        //@ts-ignore 
        const meta = {
            //@ts-ignore
            self_description: req.body.meta.self_description,
            //@ts-ignore
            interests: req.body.meta.interests
        };
        //@ts-ignore
        const role = "member";
        //@ts-ignore
        const avatar = req.body.avatar;


        const data = {
            username: username,
            email: email,
            pwd: pwd,
            join_date: join_date,
            active: active,
            meta: meta,
            role: role,
            avatar: avatar
        };

        console.log(data);

        try{
        await userService.createUser(data);
        //@ts-ignore
        res.json({msg: "Success - User Created"});
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
    
    
    createUsersd(username: string, email: string, pwd: string, join_date: Date, active: boolean, role: string, meta?: object, avatar?: string){
    
    }
    
    deleteUser(){
    
    }
    
    deactivateUser(){
    
    }


}

const userController = new UserController();

export default userController;