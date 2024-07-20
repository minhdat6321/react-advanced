import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router'


export default function BookCard({ book }) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/book/${book.isbn}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.website}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}
