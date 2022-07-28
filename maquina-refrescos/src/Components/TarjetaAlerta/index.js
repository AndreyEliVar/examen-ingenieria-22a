import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export default function TarjetaAlerta(props) {

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={props.abierto}>
        <Alert
        severity='info'
          sx={{ mb: 2 }}
        >
          {props.mensaje}
        </Alert>
      </Collapse>
    </Box>
  );
}
