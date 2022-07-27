import styles from '../../Styles/App.module.css';
import SeccionRefrescos from '../../Components/SeccionRefrescos';
import SeccionDinero from '../../Components/SeccionDinero';
import DesgloseDinero from '../../Components/DesgloseDinero';
import { useState } from 'react';


function App() {
  const [montoPago, setMontoPago] = useState(0);


  return (
    <div className="App">
        <div className={styles.contenido}>
          <div className={styles.seccionSuperior}>
          <SeccionRefrescos cantidad="10" precio="650" />
        </div>
        <div className={styles.seccionInferior}>
          <div className={styles.seccionDinero}>
            <SeccionDinero montoPago={montoPago} setMontoPago={setMontoPago}/>
          </div>
          <div className={styles.seccionDesglose}>
            <DesgloseDinero monto="650" vuelto="0" />
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
