const { Schema, model } = require("mongoose");
const NewsletterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telegram: {
    type: String,
    required: true,
  },
  discord: {
    type: String,
    required: true,
  },
});
module.exports = model("Newsletter", NewsletterSchema);
