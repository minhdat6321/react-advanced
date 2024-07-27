import { Grid } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import React from 'react'

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';


const TrackList = () => {
  const { trackList, playTrack, currentTrackIndex } =
    useMusicPlayer();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>

          {trackList.map((track, index) => (
            <button
              className="strack-btn"
              key={index}
              onClick={() => {
                playTrack(index)

              }}
            >

              <>
                {currentTrackIndex === index ? (
                  <PlayCircleIcon name={index} onClick={() => playTrack(index)} />
                ) : (
                  <PauseCircleIcon name={index} onClick={() => playTrack(index)} />
                )}
              </>
              {track.name}

            </button>
          ))}

        </Grid>
      </Grid>

    </>
  );
};

export default TrackList;