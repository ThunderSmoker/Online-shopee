import SignIn from "../components/Signin";
import { Container, Paper } from "@mui/material";

function SignIn1() {
  return (<>
 
    <div className="signinnav" style={{backgroundColor: "#000000",marginTop:0}}>

      <Container maxWidth="sm" >
        <Paper
          elevation={5}
          sx={{ backgroundColor: "#FFFfff", borderRadius: 20 }}
          >
          <SignIn />
        </Paper>
      </Container>
      </div>

            </>
  );
}

export default SignIn1;
