// //delete vehicle
// const handleDelete = async (pId) => {
//   try {
//     const { data } = await axios.delete(
//       `${process.env.REACT_APP_API}/api/vehicle/${pId}`
//     );
//     if (data.success) {
//       toast.success(`vehicle is deleted`);

//       getAllVehicles();
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     toast.error("Somtihing went wrong");
//   }
// };
//delete a product
const handleDelete = async () => {
  try {
    let answer = window.prompt("Are You Sure want to delete this product ? ");
    if (!answer) return;
    const { data } = await axios.delete(`/api/vehicle/delete-vehicle/${id}`);
    toast.success("Vehicle DEleted Succfully");
    navigate("/dashboard/systemUser/vehicles");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};






/dashboard/systemUser/vehicle/