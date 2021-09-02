import { Schema, model, connect } from 'mongoose';
import connection from "../db/connection";


interface Test {
    name:   string,
    pwd:    string
  }


const testSchema = new Schema<Test>({
  name: {type: String, required: true},
  pwd: {type: String, required: true}
});

const testModel = model<Test>('Job', testSchema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  await connection;
}

export default testModel;