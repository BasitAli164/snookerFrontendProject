import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import {
  AccountCircle,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Username validation
    if (!username || !isNaN(username)) {
      setErrorMessage("Username must contain letters and not be only numbers");
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 5) {
      setErrorMessage("Password must be at least 5 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Save user (demo purpose)
    const userDetails = { username, email, password };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Redirect to login
    navigate("/");
  };

  return (
    <Container maxWidth="xs" sx={{ paddingTop: "100px" }}>
      <Paper
        sx={{
          padding: 4,
          borderRadius: "16px",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 3,
            color: "#00796b",
            letterSpacing: "1px",
          }}
        >
          Create Account
        </Typography>

        <form onSubmit={handleSignup}>
          {/* Username */}
          <TextField
            label="Username"
            fullWidth
            required
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: "#00796b" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Email */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: "#00796b" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Password */}
          <TextField
            label="Password"
            type={passwordVisible ? "text" : "password"}
            fullWidth
            required
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: "#00796b" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    edge="end"
                  >
                    {passwordVisible ? (
                      <VisibilityOff sx={{ color: "#00796b" }} />
                    ) : (
                      <Visibility sx={{ color: "#00796b" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Confirm Password"
            type={confirmPasswordVisible ? "text" : "password"}
            fullWidth
            required
            size="small"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ marginBottom: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: "#00796b" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                    edge="end"
                  >
                    {confirmPasswordVisible ? (
                      <VisibilityOff sx={{ color: "#00796b" }} />
                    ) : (
                      <Visibility sx={{ color: "#00796b" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Error */}
          {errorMessage && (
            <Typography
              sx={{
                color: "error.main",
                textAlign: "center",
                fontSize: "0.875rem",
                marginBottom: 2,
              }}
            >
              {errorMessage}
            </Typography>
          )}

          {/* Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{
              backgroundColor: "#00796b",
              borderRadius: "25px",
              padding: "12px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#004d40",
                transform: "scale(1.05)",
              },
            }}
          >
            Sign Up
          </Button>
        </form>

        {/* Navigation Links */}
        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Typography variant="body2">
            Already have an account?{" "}
            <Link to="/" style={{ color: "#00796b", fontWeight: 600 }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
