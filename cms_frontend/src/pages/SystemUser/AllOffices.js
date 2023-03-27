import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getOffices, deleteOffice } from "./OfficeService";
import SystemUserMenu from "./../../components/Layout/SystemUserMenu";
import Layout from "../../components/Layout/Layout";
const StyledCard = styled(Card)`
  width: 300px;
  margin: 20px;
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(210, 210, 210, 0.2);
  transition: 0.3s;
  background-image: linear-gradient(to bottom right, #0000, #0000);
 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to bottom right, #4b6cb7, #182848); }
`;
const CardContentWrapper = styled(CardContent)`
  height: 160px;
  transition: background-color 0.3s ease-in-out;
  background-color: transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #eee;
  }

  p {
    font-size: 16px;
    margin-bottom: 5px;
    color: #ccc;
  }

  button {
    margin-top: 10px;

    margin-bottom: 10px;
    padding: 100px;
  }
`;

const AllOffices = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    getAllOffices();
  }, []);

  const deleteOfficeData = async (id) => {
    await deleteOffice(id);
    getAllOffices();
  };

  const getAllOffices = async () => {
    let response = await getOffices();
    setOffices(response.data);
  };

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{margin:0}}>
            <SystemUserMenu />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {offices.map((office) => (
                <Grid key={office._id} item xs={12} sm={6} md={4} lg={3}>
                  <StyledCard className="StyledCard">
                    <CardActionArea>
                      <CardContentWrapper className="CardContentWrapper">
                        <Typography gutterBottom variant="h5" component="h2">
                          {office.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Contact No.: {office.contact}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Office Email: {office.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Office Address: {office.address}
                        </Typography>
                      </CardContentWrapper>
                    </CardActionArea>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        sx={{ margin: "5px" }}
                        color="primary"
                        variant="contained"
                        fullWidth
                        component={Link}
                        to={`/dashboard/systemUser/updateoffice/${office._id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        sx={{ margin: "5px" }}
                        color="secondary"
                        variant="contained"
                        fullWidth
                        onClick={() => deleteOfficeData(office._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default AllOffices;
