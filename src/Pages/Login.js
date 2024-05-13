import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div>
      <Card style={{ width: "300px", margin: "auto" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          sign up
        </Typography>

        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        />
        <CardActions>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Do you want to naviagte to <Link to="/"> sign up </Link> page?
          </Typography>
        </CardActions>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleSubmit}>
            Sign in
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
