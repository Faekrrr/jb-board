import enterpriseService from '../db/enterpriseService'

class JobsController {

    async createJobOffer(req: Request, res: Response, next: any){
        //@ts-ignore
        const job_title = req.body.job_title;
        //@ts-ignore 
        const enterprise = req.body.enterprise;
        //@ts-ignore 
        const description = req.body.description;
        //@ts-ignore  
        const add_date = Date.now();
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
            job_title: job_title,
            enterprise: enterprise,
            description: description,
            add_date: add_date,
            active: active,
            meta: meta,
        };

        console.log(data);

        try{
        await enterpriseService.createEnterprise(data);
        //@ts-ignore
        res.json({msg: "Success - Created Job Offer"});
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

const jobsController = new JobsController();
export default jobsController;