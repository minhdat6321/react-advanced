import React from 'react'
import { Container, Grid } from '@mui/material'
import BookCard from '../components/BookCard';
import books from '../books.json'

function HomePage() {
  return (
    <Container>

      <Grid container spacing={2} mt={1}>

        {books.slice(0, 4).map((book) => (
          <Grid key={book.isbn} item xs={12} md={4} lg={3}>

            <BookCard book={book} />
          </Grid>
        )
        )}
      </Grid>
    </Container>
  )
}

export default HomePage
