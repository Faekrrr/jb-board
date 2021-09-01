const jobSchema = new Schema({
  job_title:  String, // String is shorthand for {type: String}
  enterprise: String,
  description:   String,
  salary: [{ min: Number, max: Number }],
  add_date: { type: Date, default: Date.now },
  active: Boolean,
  meta: {
    enterpriselogo_uri: String,
    enterprisesite_uri:  String
  }
});