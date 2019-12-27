import React, {useState} from 'react';
import styles from './App.module.css';
import NetStations from './components/NetStations/NetStations';
import Nets from './components/Nets/Nets';

const App = (props) => {
  const {
    nets,
    currentNetId,
    currentNetStations,    
    selectNet,
    initApp,
    displayNet,
    setStationLike,
    setStationDislike,
  } = props;

  const [initislized, setInitialized] = useState(false);
  if (!initislized) {
    initApp();
    setInitialized(true);
  };

  const [currentNetIdState, setNetIdState] = useState('');
  if (currentNetIdState !== currentNetId) {
    displayNet(currentNetId, currentNetStations);
    setNetIdState(currentNetId);
  } 

  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <h1>Велосипеды 3</h1>
        <hr/>

        <div className={styles.row}>
          <div className={styles.col}>
            <Nets nets={nets} selectNet={selectNet} />
          </div>
          <div className={styles.col}>
            <NetStations currentNetStations={currentNetStations} setStationLike={setStationLike} setStationDislike={setStationDislike} />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default App;
