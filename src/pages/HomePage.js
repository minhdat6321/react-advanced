import React from 'react'
import jobs from '../jobs.json'
import BasicCard from '../components/BasicCard'
import { Box, Container, Grid, Pagination, Stack } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

function HomePage() {

  return (
    <div>
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
        <Box display={'flex'} justifyContent={'center'} margin={4}>

          <Stack spacing={2}>
            <Pagination count={3} color="primary" />
          </Stack>
        </Box>

      </Container>
    </div>
  )
}

export default HomePage
