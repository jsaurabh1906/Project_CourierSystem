import bookingModel from "../models/bookingModel.js";

export const addBookingController = async (req, res) => {
  try {
    const booking = req.body;
    const newBooking = new bookingModel(booking);

    await newBooking.save();
    res.status(201).send({
      success: true,
      message: "Booking Created Successfully",
      newBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crreating Driver",
    });
  }
};
