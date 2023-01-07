import Signup from "../components/Signup";
import { Container, Paper } from "@mui/material";

function SignUp1() {
  return (
    <div style={{backgroundColor: "#000000",margin:0}}>

      <Container maxWidth="sm" >
        <Paper
          elevation={5}
          sx={{ backgroundColor: "#FFFfff", borderRadius: 20 }}
          >
          <Signup />
        </Paper>
      </Container>
      </div>

  );
}

export default SignUp1;
