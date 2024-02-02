import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  fullName: { type: String, require: true },
  creditCard: { type: String, require: true },
  dateTime: { type: Date, required: true },
  price: { type: Number, required: true },
  flagCard: { type: String, required: true },
  bank: { type: String, required: true },
  paymentInstallments: { type: Number, default: Date.now }
});

const PaymentModel = mongoose.model('Home', PaymentSchema);

export default PaymentModel;