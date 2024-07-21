import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChip({ skills }) {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={0.75}>
        {
          skills.slice(0, 4).map((skill, i) => (
            <Chip key={i} sx={{ fontSize: 10 }} label={skill} color="primary" />
          ))
        }

      </Stack>
    </Stack>
  );
}
