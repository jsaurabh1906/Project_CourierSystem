import axios from "axios";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${process.env.REACT_APP_API}/api/user/getuser/${id}`);
};

export const addUser = async (user) => { 
  return await axios.post(
    `${process.env.REACT_APP_API}/api/user/adduser`,
    user
  );
};

export const deleteUser = async (id) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/api/user/deleteUser/${id}`
  );
};   

 export const updateUser = async (id, user) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/api/user/updateuser/${id}`,
    user
  );
};
