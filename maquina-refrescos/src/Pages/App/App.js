import styles from '../../Styles/App.module.css';
import SeccionRefrescos from '../../Components/SeccionRefrescos';

function App() {
  return (
    <div className="App">
        <SeccionRefrescos cantidad="10" precio="650" />
    </div>
  );
}

export default App;
