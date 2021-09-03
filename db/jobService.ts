import { Mongoose } from "mongoose";
import userModel from '../schemas/userSchema'

class JobService{
    createJobOffer(data: any){
        userModel.create({
            job_title: data.job_title, 
            enterprise: data.enterprise,
            description: data.description,
            add_date: Date.now(),
            active: true,
            meta: {
                enterpriselogo_uri: data.meta.enterpriselogo_uri,
                enterprisesite_uri: data.meta.enterprisesite_uri
            }
        });
    }
}

const jobService = new JobService();
export default jobService;