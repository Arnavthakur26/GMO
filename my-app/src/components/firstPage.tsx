import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TextField, Button, Typography, Container } from "@mui/material";

interface UserDetails {
  name: string;
  phone: string;
  email: string;
}

const FirstPage: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    localStorage.clear();
  }, []);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    navigate("/second");
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        User Details
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          required
          fullWidth
          value={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          margin="normal"
        />

        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          required
          value={userDetails.phone}
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
          margin="normal"
        />

        <TextField
          label="Email"
          variant="outlined"
          required
          fullWidth
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          margin="normal"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FirstPage;
