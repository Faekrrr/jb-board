import { Schema, model, connect } from 'mongoose';
import connection from "../db/connection";


interface Apply {
    job_title:              string, 
    enterprise:             string,
    job_offer_id:           string,
    apply_date:             Date,
    status:                 string,
    meta: {
    enterpriselogo_uri?:    string,
    enterprisesite_uri?:    string
  }
}

const applySchema = new Schema<Apply>({
  job_title:  {type: String, required: true},
  enterprise: {type: String, required: true},
  job_offer_id:   {type: String, required: true},
  apply_date: { type: Date, required: true},
  status: { type: String, required: true},
  meta: {
    enterpriselogo_uri: {type: String, required: false},
    enterprisesite_uri:  {type: String, required: false}
  }
});

const applyModel = model<Apply>('Job', applySchema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  await connection;
}