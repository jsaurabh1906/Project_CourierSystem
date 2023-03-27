import axios from "axios";

export const getOffices = async (id) => {
  id = id || "";
  return await axios.get(
    `${process.env.REACT_APP_API}/api/office/getoffice/${id}`
  );
};

export const addOffice = async (user) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/api/office/addoffice`,
    user
  );
};

export const deleteOffice = async (id) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/api/office/deleteoffice/${id}`
  );
};

export const updateOffice = async (id, office) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/api/office/updateoffice/${id}`,
    office
  );
};
