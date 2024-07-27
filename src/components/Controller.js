import { FastForwardRounded, FastRewindRounded, PauseRounded, PlayArrowRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import useMusicPlayer from '../hooks/useMusicPlayer'

function Controller() {
  const { isPlaying, togglePlay, playNextTrack, playPreviousTrack, currentTrackIndex } = useMusicPlayer();
  return (
    currentTrackIndex === null ? <Typography align='center'>Please, choose 1 song hihi</Typography> :
      <div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={'#000'} onClick={() => playPreviousTrack()} />
          </IconButton>
          <IconButton
            aria-label={isPlaying ? 'play' : 'pause'}
            onClick={() => togglePlay()}
          >
            {!isPlaying ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={'#000'}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={'#000'} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={'#000'} onClick={() => playNextTrack()} />
          </IconButton>
        </Box>    </div>

  )
}

export default Controller
