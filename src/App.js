import React, {useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.css';

const App = (props) => {
  const {
    setNets,
		nets,
    loadNetId,
    addNet,
    getNet,
    stations,
    currentNetId,
  } = props;
  
  //console.log(loadNetId);

  // при запуске получаем сети и записываем в Store
  // пока не сделали это, нужно крутить лоадер!
  useEffect(() => {
    axios.get(`http://api.citybik.es/v2/networks?fields=id,company`)
      .then(res => {
        setNets(res.data.networks);
    });
	}, [setNets]);
	
	const loadBikes = (id, index) => {
    console.log(id, index);
    if (loadNetId.includes(id)) {
      console.log('уже смотрели');
      getNet(id);
    } else {
      console.log('надо загружать!');
      axios.get(`http://api.citybik.es/v2/networks/${id}`)
        .then(res => {
          const netNew = res.data.network;
          //console.log(netNew);
          addNet(id, netNew);
      });
    }
	}

  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <h1>Велосипеды 2</h1>
        <hr/>

        <div className={styles.row}>
          <div className={styles.col}>
						{
							nets.map((net, index) => (
								<div
									key={`${net.id}_${index}`}
									onClick={() => loadBikes(net.id, index)}
								>
									{net.id}
								</div>
							))
						}
          </div>
          <div className={styles.col}>
            { // сеть выбрана и станции загружены
              (currentNetId !== undefined && stations !== undefined)
                ? `Выбрана сеть ${currentNetId} компании ${stations[currentNetId].company[0]}.
                   Кол-во станций в сети: ${stations[currentNetId].stations.length}.`
                : "Необходимо выбрать сеть!"
            }

            { // в сети есть станции
              (currentNetId !== undefined && stations !== undefined && stations[currentNetId].stations.length > 0)
                ? stations[currentNetId].stations.map((station, index) => (
                    <div
                      key={`${station.id}_${index}`}
                    >
                      {station.id}
                    </div>
                  ))
                : null
            }
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default App;
