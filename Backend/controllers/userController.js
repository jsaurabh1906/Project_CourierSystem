import userModel from "../models/userModel.js";

export const addUserController = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new userModel(user);

    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crreating user",
    });
  }
};

// Get all users
export const getUsers = async (request, response) => {
  try {
    const users = await userModel.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// Get a user by id
export const getUserById = async (request, response) => {
  try {
    const user = await userModel.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// Save data of edited user in the database
export const editUser = async (request, response) => {
  let user = request.body;

  const editUser = new userModel(user);
  try {
    await userModel.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// deleting data of user from the database
export const deleteUser = async (request, response) => {
  try {
    await userModel.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
