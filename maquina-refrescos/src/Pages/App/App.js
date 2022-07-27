import styles from '../../Styles/App.module.css';
import SeccionRefrescos from '../../Components/SeccionRefrescos';
import SeccionDinero from '../../Components/SeccionDinero';

function App() {
  return (
    <div className="App">
        <div className={styles.contenido}>
          <div className={styles.seccionSuperior}>
          <SeccionRefrescos cantidad="10" precio="650" />
        </div>
        <div className={styles.seccionInferior}>
          <SeccionDinero />
        </div>
        </div>
    </div>
  );
}

export default App;
