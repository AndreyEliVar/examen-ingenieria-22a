import styles from '../../Styles/App.module.css';
import TarjetaRefresco from '../../Components/TarjetaRefresco';

function App() {
  return (
    <div className="App">
        <TarjetaRefresco cantidad="10" precio="650" />
    </div>
  );
}

export default App;
