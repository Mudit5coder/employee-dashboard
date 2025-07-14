import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const EmployeeProfile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Employee Profile
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Profile page for {user?.name}. Profile editing features coming soon...
        </Typography>
      </Box>
    </Container>
  );
};

export default EmployeeProfile;