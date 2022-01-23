const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carnumber: { type: String, required: true },
    mobileno: { type: String, required: true },
    model: { type: String, required: true },
    fuel: { type: String, required: true },
    total: { type: Number, required: true },
    pincode: { type: String, required: true },
    year: { type: String, required: true },
    month: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Payment = mongoose.model("PAYMENT", carSchema);
module.exports = Payment;

// 61e7c8e6c729b19294d84faa
