import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import style from "../../Styles/AlertaPago.module.css";

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
              onClick={() => props.setAbierto(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {
            props.texto ? (
            <div className={style.container}>
              <div className={style.titulo}>
                <h3>Su vuelto es de: {props.texto.vuelto.cambio} </h3>
              </div>
              <div className={style.monedas}>
                <h3>Desglose: </h3>
                {props.texto.vuelto.monedas.map((moneda, index) => (
                  <div key={index} className={style.moneda}>
                    <h3>{moneda.cantidad} moneda de {moneda.moneda}</h3>
                  </div>
                ))}
              </div>
            </div>

            ) : (
              null
            )
          }
        </Alert>
      </Collapse>
    </Box>
  );
}
