import styles from '../../Styles/App.module.css';
import SeccionRefrescos from '../../Components/SeccionRefrescos';
import SeccionDinero from '../../Components/SeccionDinero';
import DesgloseDinero from '../../Components/DesgloseDinero';

function App() {
  return (
    <div className="App">
        <div className={styles.contenido}>
          <div className={styles.seccionSuperior}>
          <SeccionRefrescos cantidad="10" precio="650" />
        </div>
        <div className={styles.seccionInferior}>
          <div className={styles.seccionDinero}>
            <SeccionDinero />
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
