import officeModel from "../models/officeModel.js";
//import fs from "fs";
import slugify from "slugify";

export const createOfficeController = async (req, res) => {
  try {
    const { name, address, email, contact } = req.fields;

    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !address:
        return res.status(500).send({ error: "address is Required" });
      case !email:
        return res.status(500).send({ error: "email is Required" });
      case !contact:
        return res.status(500).send({ error: "contact is Required" });
    }

    const offices = new officeModel({ ...req.fields, slug: slugify(name) });

    await offices.save();
    res.status(201).send({
      success: true,
      message: "Office Created Successfully",
      offices,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing office",
    });
  }
};

//delete controller
export const deleteOfficeController = async (req, res) => {
  try {
    await officeModel.findByIdAndDelete(req.params.pid);
    res.status(200).send({
      success: true,
      message: "office Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting office",
      error,
    });
  }
};

//upate officea
export const updateOfficeController = async (req, res) => {
  try {
    const { name, address, email, contact } = req.fields;

    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !address:
        return res.status(500).send({ error: "address is Required" });
      case !email:
        return res.status(500).send({ error: "email is Required" });
      case !contact:
        return res.status(500).send({ error: "contact is Required" });
    }

    const offices = await officeModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
   
    await offices.save();
    res.status(201).send({
      success: true,
      message: "office Updated Successfully",
      offices,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updte office",
    });
  }
};

//get all offices

export const getOfficeController = async (req, res) => {
  try {
    const offices = await officeModel
      .find({})

      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: offices.length,
      message: "ALloffices ",
      offices,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting offices",
      error: error.message,
    });
  }
};

// get single office
export const getSingleOfficeController = async (req, res) => {
  try {
    const office = await officeModel.findOne({ slug: req.params.slug });

    res.status(200).send({
      success: true,
      message: "Single office Fetched",
      office,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single office",
      error,
    });
  }
};
