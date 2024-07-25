import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ColorChip from './ColorChip';
import { Box, Divider } from '@mui/material';
import { AuthProvider } from "../contexts/AuthContext";
import { Link, useLocation } from 'react-router-dom';



export default function BasicCard({ job }) {
  let location = useLocation();
  return (

    <Card sx={{
      width: "100%",
      maxWidth: "350px",
      minWidth: "270px",
      height: "320px",
      margin: "auto",
    }}>
      <Box height={'100%'} position={'relative'}>
        <Box>

          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              {job.title}
            </Typography>
            <Divider />
            <Typography margin={1} component="div">
              <ColorChip skills={job.skills} />
            </Typography>

            <Typography variant="body2">
              {job.description}
            </Typography>
          </CardContent>
        </Box>
        <Box position={'absolute'} bottom={0} left={'36%'} mb={'10px'}>
          <AuthProvider>


            <Button component={Link}
              to={`/job/${job.id}`}
              state={{ backgroundLocation: location }}
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#ffc400" }}
            >Learn More</Button>
          </AuthProvider>
        </Box>
      </Box>

    </Card >

  );
}
