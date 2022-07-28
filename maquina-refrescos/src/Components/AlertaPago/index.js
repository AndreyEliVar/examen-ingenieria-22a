import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export default function AlertaPago(props) {

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={props.abierto}>
        <Alert
        severity='info'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.mensaje}
        </Alert>
      </Collapse>
    </Box>
  );
}
