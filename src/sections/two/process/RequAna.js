import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ArrowCircleRightRounded } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RequAna() {
  return (
    <Paper elevation="5" className="w-100 h-100 m-3">
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" className="p-3">
          Requirement And Analytics:
        </Typography>
        <Typography variant="h3" className="p-3">
          {' '}
          Review Uploaded File Here{' '}
        </Typography>
        <Stack spacing={2}>
          <Item>
            <a href="/pdfs/SRS.pdf" target="_blank">
              <Button variant="outlined" startIcon={<ArrowCircleRightRounded />}>
                GoTo Uploaded File
              </Button>
            </a>
          </Item>
        </Stack>
      </Box>
    </Paper>
  );
}
