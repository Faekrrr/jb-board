import { Schema, model, connect } from 'mongoose';
import connection from "../db/connection";

interface User {
  username:               string; 
  email:                  string;
  pwd:                    string;
  join_date: Date;
  active:                 boolean;
  meta: {
    self_description?:    string,
    interests?:           string
  };
  role:                   string;
  avatar?:                string
}

const userSchema = new Schema<User>({
  username:  { type: String, required: true}, 
  email: {type: String, required: true},
  pwd:   {type: String},
  join_date: { type: Date, required: true },
  active: {type: Boolean, required: true},
  meta: {
    self_description: {type: String, required: false},
    interests:  {type: String, required: false}
  },
  role: {type: String, required: true},
  avatar: {type: String, required: false}
});

const UserModel = model<User>('User', userSchema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  await connection;
}

export default UserModel;