import { Mongoose } from "mongoose";
import userModel from '../schemas/userSchema'
import enterpriseModel from "../schemas/enterpriseSchema";

class EnterpriseService{
    createEnterprise(data: any){
        enterpriseModel.create({
            enterprise_title: data.enterprise_title, 
            specialization: data.specialization,
            description: data.description,
            admin_id: data.admin_id,
            creation_date: Date.now(),
            active: true,
            meta: {
                enterpriselogo_uri: data.meta.enterpriselogo_uri,
                enterprisesite_uri: data.meta.enterprisesite_uri
            },
        });
    }
}

const enterpriseService = new EnterpriseService();

export default enterpriseService;