import enterpriseService from '../db/enterpriseService'

class EnterpriseController {

    getOneEnterprise = function(id?: Number, username?: string) {

    }
    
    getAllEnterprises(){
    
    }
    
    getSpecificEnterprises(active?: boolean, interests?: string){
    
    }

    async createEnterprise(req: Request, res: Response, next: any){
        //@ts-ignore
        const enterprise_title = req.body.enterprise_title;
        //@ts-ignore 
        const specialization = req.body.specialization;
        //@ts-ignore 
        const description = req.body.description;
        //@ts-ignore 
        const admin_id = req.body.admin_id;
        //@ts-ignore 
        const creation_date = Date.now();
        //@ts-ignore 
        const active = "true";
        //@ts-ignore 
        const meta = {
            //@ts-ignore
            enterpriselogo_uri: req.body.meta.enterpriselogo_uri,
            //@ts-ignore
            enterprisesite_uri: req.body.meta.enterprisesite_uri
        };


        const data = {
            enterprise_title: enterprise_title,
            specialization: specialization,
            description: description,
            admin_id: admin_id,
            creation_date: creation_date,
            active: active,
            meta: meta,
        };

        console.log(data);

        try{
        await enterpriseService.createEnterprise(data);
        //@ts-ignore
        res.json({msg: "Success - Created Enterprise"});
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

const enterpriseController = new EnterpriseController();

export default enterpriseController;