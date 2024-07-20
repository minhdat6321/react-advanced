import React from 'react'
import books from '../books.json'
import { useParams } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material';
import QuiltedImageList from '../components/QuiltedImageList';
import PersonIcon from '@mui/icons-material/Person';

function DetailPage() {
  const params = useParams();
  const bookId = params.id;
  const book = books.find((book) => book.isbn === bookId)
  if (!book)
    return (
      <Typography variant='h3' mt={3}>
        `Sorry we dont find that book. Try another one`
      </Typography>
    )

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' mt={3}>
        {book.title}
      </Typography>

      <Box mt={3} sx={{ display: "flex" }}>
        <img src={book.website} alt="" />
        ahihi
      </Box>
      <QuiltedImageList />

      <Box>
        <PersonIcon />
      </Box>
    </Container>
  )
}

export default DetailPage
