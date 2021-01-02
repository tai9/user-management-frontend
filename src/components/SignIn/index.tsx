import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { SignInStyled } from "./styles";
import { Link } from "react-router-dom";

export type SignInProps = {
  handleSubmit: (event: React.FormEvent) => void;
};

const SignIn: React.FC<SignInProps> = ({ handleSubmit }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignInStyled>
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            className="checkbox"
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="btn_submit"
          >
            Sign In
          </Button>
          <Box textAlign="right">
            <Link to="/">Forgot password?</Link>
          </Box>
          <Box mt={4} textAlign="center">
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </Box>
        </form>
      </SignInStyled>
    </Container>
  );
};

export default SignIn;
