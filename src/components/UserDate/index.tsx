import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';

interface UserDateProps {
  fullPost: {
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

export const UserDate: React.FC<UserDateProps> = ({ fullPost }) => {
  return (
    <div>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Name: {fullPost.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Username: {fullPost.username}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Email: {fullPost.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Address:</Typography>
            <Box pl={2}>
              {fullPost.address ? (
                <>
                  <Typography>Street: {fullPost.address.street}</Typography>
                  <Typography>Suite: {fullPost.address.suite}</Typography>
                  <Typography>City: {fullPost.address.city}</Typography>
                  <Typography>Zipcode: {fullPost.address.zipcode}</Typography>
                </>
              ) : (
                <Typography>No address information available</Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Phone: {fullPost.phone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Website: {fullPost.website}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Company:</Typography>
            <Box pl={2}>
              {fullPost.company ? (
                <>
                  <Typography>Name: {fullPost.company.name}</Typography>
                  <Typography>Catch Phrase: {fullPost.company.catchPhrase}</Typography>
                  <Typography>BS: {fullPost.company.bs}</Typography>
                </>
              ) : (
                <Typography>No company information available</Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
