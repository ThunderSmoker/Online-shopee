import * as React from "react";
import '../index.css'
import GoogleIcon from '@mui/icons-material/Google';
import Avatar from "@mui/material/Avatar";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Online_Shopee
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const [error,setError]=React.useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("check-agree"))
    if(data.get("password")===data.get("confirm-password") && data.get("check-agree")=="agreeTermsandConditions" && data.get("email")!==""&&data.get("username")!==""){
        console.log({
            email:data.get("email"),
            password:data.get("password")
        })
        setError(false)
    }
    else{
        setError(true)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ height:100,width:100, m: 1, bgcolor: '#ff0000' }}> */}
          <AccountCircleIcon sx={{ height: 100, width: 100 }} />
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
             
            />
            {error?<p style={{color:"red"}}>*Please fill all details</p>:<p></p>}
             <FormControlLabel
                  required
                  control={<Checkbox value="agreeTermsandConditions" color="primary" />}
                  label="I agree to companies Terms and Conditions.*"
                  name="check-agree"
                />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {/* <Box>

              <Button
                id="google-button"
                type="submit"
                variant="contained"
                color="secondary"
                endIcon={<GoogleIcon/>}
                sx={{ mt: 3, mb: 2, paddingY:0.5,paddingX: 6,marginLeft:4.6,marginBottom:0,width:350,boxShadow:2,backgroundColor:"#e83939"}}
              >
                Continue using Google
              </Button>
              <Button
                type="submit"
                id="account-create"
                variant="contained"
                color="secondary"
               
                sx={{ mt: 3, mb: 2, paddingY:0.5,paddingX: 6,marginLeft:4.6,marginTop:1,width:350,boxShadow:2,backgroundColor:"#00EB98"}}
              >
                Create Account
              </Button>
            </Box> */}
              
           
             
           
            
            <Box paddingLeft={10.2} fullWidth marginRight={8} >
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                
                sx={{ mt: 3, mb: 2, paddingX: 10, borderRadius: 12,width:300}}
              >
                Create Account
              </Button>
            {/* <Typography paddingX={14.2}>
                 OR
            </Typography> */}
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
