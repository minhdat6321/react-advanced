import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function PaginationButton() {
  return (
    <Box display={'flex'} justifyContent={'center'} margin={4}>

      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </Box>

  );
}
