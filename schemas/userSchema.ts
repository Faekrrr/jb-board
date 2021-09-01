const userSchema = new Schema({
  username:  String, // String is shorthand for {type: String}
  email: String,
  pwd:   String,
  join_date: { type: Date, default: Date.now },
  active: Boolean,
  meta: {
    self_description: String,
    interests:  String
  },
  role: String
});

const User = mongoose.model("User", userSchema);