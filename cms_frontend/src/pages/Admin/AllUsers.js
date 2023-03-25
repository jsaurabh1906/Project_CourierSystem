import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
  Container,
  Grid,
} from "@mui/material";
import { getUsers, deleteUser } from "./UserService";
import { Link } from "react-router-dom";
import AdminMenu from "../../components/Layout/AdminMenu";

const StyledTable = styled(Table)`
  margin: 50px 0;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #456789;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <AdminMenu />
        </Grid>
        <Grid item xs={12} md={10}>
          <StyledTable>
            <TableHead>
              <THead>
                <TableCell>Id</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile N..</TableCell>
                <TableCell>Actions</TableCell>
              </THead>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TRow key={user.id}>
                  <TableCell>{user._id}</TableCell>{" "}
                  {/* change it to user.id to use JSON Server */}
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.mobileNo}</TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ mr: 1 }}
                      component={Link}
                      to={`/dashboard/admin/updateuser/${user._id}`}
                    >
                      Edit
                    </Button>{" "}
                    {/* change it to user.id to use JSON Server */}
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteUserData(user._id)}
                    >
                      Delete
                    </Button>{" "}
                    {/* change it to user.id to use JSON Server */}
                  </TableCell>
                </TRow>
              ))}
            </TableBody>
          </StyledTable>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllUsers;
