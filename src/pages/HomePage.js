import React from 'react'
import jobs from '../jobs.json'
import BasicCard from '../components/BasicCard'
import { Container, Grid } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Container>
        <CssBaseline />

        <Grid sx={{ display: "flex" }} container spacing={4} mt={1}>

          {jobs.slice(0, 5).map((job) => (
            <Grid key={job.id} item xs={12} md={4} lg={4}>
              <BasicCard job={job} />
            </Grid>
          )
          )}
        </Grid>

      </Container>
    </div>
  )
}

export default HomePage
