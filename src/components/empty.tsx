import { Box, Typography } from '@mui/material';
import nothingHere from '../assets/nothingHere.webp';


function EmptyState() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={5}>
      <img src={nothingHere} alt="Empty State" style={{ width: '200px', marginBottom: '20px' }} />
      <Typography variant="h5" fontWeight="bold">There is nothing here</Typography>
      <Typography variant="body2" marginBottom={2}>
        Create an invoice by clicking the <b>new invoice</b> button.
      </Typography>
    </Box>
  );
};

export default EmptyState;
