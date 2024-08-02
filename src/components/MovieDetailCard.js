import { ButtonBase, Chip, Divider, Grid, IconButton, Paper, Stack, styled, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

import React from 'react'
import useFavorite from '../hooks/useFavorite';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function MovieDetailCard({ movie }) {

  const { handleAdd } = useFavorite();

  if (!movie) {
    return <Typography variant='h3' mt={3}>No movie found</Typography>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Movie: {movie.original_title}</h1>
      <Divider />
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '90%',
          height: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ButtonBase sx={{ width: 'auto', height: 500 }}>
              <Img alt="complex" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </ButtonBase>
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="div">
                  Title: {movie.original_title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {movie.overview}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  ID: {movie.id}
                </Typography>
                <Stack direction="row" spacing={1} alignItems={'center'} gap={1}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Genre:
                  </Typography>
                  {movie.genres.map((genre) =>
                    <Chip key={genre.id} label={genre.name} />
                  )}
                </Stack>
                <Stack direction="row" spacing={2} alignItems={'center'} flexWrap={'wrap'} gap={1} mt={2}>
                  <Typography variant="body2" color="text.secondary">
                    Company:
                  </Typography>
                  {movie.production_companies.map((company) =>
                    <Chip sx={{ mb: 3 }} key={company.id} label={company.name} />
                  )}
                </Stack>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Budget: {movie.budget}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Status: {movie.status}
                </Typography>

              </Grid>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => handleAdd(movie)}>
                <FavoriteIcon sx={{ width: 40, height: 40, border: `2px solid yellow`, paddingTop: 0, borderRadius: '50%', bgcolor: "red" }} />
              </IconButton>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default MovieDetailCard
