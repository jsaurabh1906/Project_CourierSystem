import axios from "axios";

export const getDrivers = async (id) => {
  id = id || "";
  return await axios.get(
    `${process.env.REACT_APP_API}/api/user/getdriver/${id}`
  );
};

export const addDriver = async (user) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/api/user/adddriver`,
    user
  );
};

export const deleteDriver = async (id) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/api/user/deletedriver/${id}`
  );
};

export const updateDriver = async (id, user) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/api/user/updatedriver/${id}`,
    user
  );
};
