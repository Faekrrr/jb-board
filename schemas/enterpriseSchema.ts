import { Schema, model, connect } from 'mongoose';
import connection from "../db/connection";


interface Enterprise {
    enterprise_title:              string, 
    specialization:             string,
    admin_id:           string,
    creation_date:             Date,
    active:                 boolean,
    meta: {
    enterpriselogo_uri?:    string,
    enterprisesite_uri?:    string
  }
}

const enterpriseSchema = new Schema<Enterprise>({
  enterprise_title:  {type: String, required: true},
  specialization: {type: String, required: true},
  admin_id:   {type: String, required: true},
  creation_date: { type: Date, required: true},
  active: { type: Boolean, required: true},
  meta: {
    enterpriselogo_uri: {type: String, required: false},
    enterprisesite_uri:  {type: String, required: false}
  }
});

const enterpriseModel = model<Enterprise>('Job', enterpriseSchema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  await connection;
}