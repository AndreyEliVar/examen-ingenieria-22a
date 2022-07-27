import Button from '@mui/material/Button';


export default function BotonDinero(props) {
    return (
        <div className="contenido">
            <Button variant="contained" sx={{backgroundColor: "#53DE62", width: "119px", height: "65px", fontSize: "25px", fontFamily: "Roboto Slab"}}>{props.cantidad}</Button>
        </div>
    );
}