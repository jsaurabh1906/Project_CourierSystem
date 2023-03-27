import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
  Container,
  Grid,
} from "@mui/material";
import { getDrivers, deleteDriver } from "./DriverService";
import { Link } from "react-router-dom";
import SystemUserMenu from "./../../components/Layout/SystemUserMenu";
import Layout from "../../components/Layout/Layout";

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

const AllDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getAllDrivers();
  }, []);

  const deleteDriverData = async (id) => {
    await deleteDriver(id);
    getAllDrivers();
  };

  const getAllDrivers = async () => {
    let response = await getDrivers();
    setDrivers(response.data);
  };

  return (
    <Layout>
      {" "}
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SystemUserMenu />
          </Grid>
          <Grid item xs={12}>
            <StyledTable>
              <TableHead>
                <THead>
                  <TableCell>Id</TableCell>
                  <TableCell>FirstName</TableCell>
                  <TableCell>LastName</TableCell>
                  {/* <TableCell>Email</TableCell> */}
                  <TableCell>Mobile N..</TableCell>
                  <TableCell>License Number</TableCell>
                  <TableCell>Actions</TableCell>
                </THead>
              </TableHead>
              <TableBody>
                {drivers.map((driver) => (
                  <TRow key={driver.id}>
                    <TableCell>{driver._id}</TableCell>{" "}
                    {/* change it to driver.id to use JSON Server */}
                    <TableCell>{driver.firstName}</TableCell>
                    <TableCell>{driver.lastName}</TableCell>
                    {/* <TableCell>{driver.email}</TableCell> */}
                    <TableCell>{driver.mobileNo}</TableCell>
                    <TableCell>{driver.licenseNumber}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ mr: 1 }}
                        component={Link}
                        to={`/dashboard/systemUser/updatedriver/${driver._id}`}
                      >
                        Edit
                      </Button>{" "}
                      {/* change it to user.id to use JSON Server */}
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => deleteDriverData(driver._id)}
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
    </Layout>
  );
};

export default AllDrivers;
