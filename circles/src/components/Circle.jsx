import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Circle({severity , probability , population} ) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
      <ProgressWithText value={severity*33.333} text="Severity" />
      <ProgressWithText value={probability*100} text="Probability" />
      <ProgressWithText value={population*100/41000} text="Population" />
    </Stack>
  );
}

function ProgressWithText({ value, text }) {
  const getColor = (value) => {
    if (value <= 25) return 'green';
    if (value <= 50) return 'yellow';
    if (value <= 75) return 'orange';
    return 'red';
  };

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress 
        variant="determinate" 
        value={value} 
        size={200} 
        sx={{
          color: getColor(value),
        }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
