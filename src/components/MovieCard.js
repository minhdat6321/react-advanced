import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecommendIcon from '@mui/icons-material/Recommend';
function MoiveCard({ movie }) {
  const navigate = useNavigate();
  return (
    //Click de link toi detail page
    <Card onClick={() => navigate(`/movie/${movie.id}`)}>
      <CardActionArea >
        <Box
          className="card"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          sx={[
            {
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "300px",
              backgroundPosition: 'center center',
            },
          ]}
        >

          <Paper className="sumCard">
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={[
                  {
                    maxHeight: "30%",
                    overflow: "hidden",
                  },
                ]}
              >
                <Typography gutterBottom variant="body1" component="div">
                  {movie.title || movie.name}
                </Typography>

                <Stack flexDirection="row" justifyContent="flex-end" mt={1}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    mr={3}
                  >
                    <RecommendIcon
                      className="recommend_icon"
                      fontSize="small"
                    />
                    <Typography variant="subtitle2" ml={1}>
                      {`${movie.vote_average}`}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <FavoriteIcon className="favorite_icon" fontSize="small" />
                    <Typography variant="subtitle2" ml={1}>
                      {`${movie.vote_count}`}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Paper>
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap textAlign='center'>
            {movie.title || movie.name}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    //Click de link toi detail page
  );
}

export default MoiveCard;