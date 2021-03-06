import { Schema, model, connect } from 'mongoose';
import connection from "../db/connection";


interface Job {
    job_title:              string, 
    enterprise:             string,
    description:            string,
    salary:                 number,
    add_date:               Date,
    active:                 boolean,
    meta: {
    enterpriselogo_uri?:    string,
    enterprisesite_uri?:    string
  }
}

const jobSchema = new Schema<Job>({
  job_title:  {type: String, required: true},
  enterprise: {type: String, required: true},
  description:   {type: String, required: true},
  salary: [{ min: Number, max: Number, required: true }],
  add_date: { type: Date, required: true},
  active: {type: Boolean, required: true},
  meta: {
    enterpriselogo_uri: {type: String, required: false},
    enterprisesite_uri:  {type: String, required: false}
  }
});

const JobModel = model<Job>('Job', jobSchema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  await connection;
}