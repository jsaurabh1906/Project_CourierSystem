import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    //sender
    sFirstName: { type: String, required: true },
    sLastName: { type: String, required: true },
    sMobile: { type: String, required: true },
    sEmail: { type: String, required: true },
    sAddress: { type: String, required: true },
    
    //receiver
    rFirstName: { type: String, required: true },
    rLastName: { type: String, required: true },
    rMobile: { type: String, required: true },
    rEmail: { type: String, required: true },
    rAddress: { type: String, required: true },
    
    //consignment details
    courierType:  { type: String, required: true },
    cWeight:  { type: String, required: true },
    transportMode:  { type: String, required: true },
    customerType:  { type: String, required: true },

  },
  { timestamps: true }
);

export default mongoose.model("Bookings", bookingSchema);
