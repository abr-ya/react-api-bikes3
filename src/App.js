import React, {useState} from 'react';
import styles from './App.module.css';
import NetStations from './components/NetStations/NetStations';

const App = (props) => {
  const {
    nets,
    currentNetId,
    currentNetStations,    
    selectNet,
    changeStat,
    initApp,
    displayNet,
  } = props;

  // инициализация - нужно добавить лоадер!
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
            <h3>Список сетей</h3>
						{
							nets.map((net, index) => (
								<div
                  className={styles.card}
									key={`${net.id}_${index}`}
									onClick={() => selectNet(net.id)}
								>
									{net.name} ({net.id})
								</div>
							))
						}
          </div>
          <div className={styles.col}>
            <NetStations currentNetStations={currentNetStations} changeStat={changeStat} />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default App;
