import React, {useEffect} from 'react';
import cn from 'classnames';
import axios from 'axios';

import styles from './App.module.css';

const App = (props) => {
  const {
    nets,
    stations,
    currentNetId,    
    // setNets,
		addNet,
    selectNet,
    changeStat,
    initApp,
  } = props;

  // при запуске получаем сети и записываем в Store
  // пока не сделали это, нужно крутить лоадер!
  // useEffect(() => {
  //   axios.get(`http://api.citybik.es/v2/networks`)
  //     .then(res => {
  //       setNets(res.data.networks);
  //   });
  // }, [setNets]);
  
  useEffect(() => {
    initApp();
  }, [initApp]);
	
	const netClickHandler = (id, index) => {
    console.log(id, index);
    // знаем ли сеть?
    if (stations[id]) {
      // сеть уже смотрели - получаем из Store
      selectNet(id);
    } else {
      // новая сеть - делаем запрос и сохраняем
      axios.get(`http://api.citybik.es/v2/networks/${id}`)
        .then(res => {
          addNet(id, res.data.network.stations);
      });
    }
  }
  
	const stationClickHandler = (index) => {
    changeStat(index);
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
									onClick={() => netClickHandler(net.id, index)}
								>
									{net.name} ({net.id})
								</div>
							))
						}
          </div>
          <div className={styles.col}>
            <h3>
              { // сеть выбрана и станции загружены
                (stations[currentNetId])
                  ? `Станции сети ${currentNetId} (${stations[currentNetId].length}):`
                  : "Необходимо выбрать сеть!"
              }
            </h3>

            { // в сети есть станции
              (stations[currentNetId])
                ? stations[currentNetId].map((station, index) => {
                  // станция: лайк или нет ?
                  //console.log(station.id, station.liked);

                  return (
                    <div
                      className={cn(styles.card, {
                        [styles.cardLike]: station.liked,
                      })}
                      key={`${station.id}_${index}`}
                      onClick={() => stationClickHandler(index)}
                    >
                      {station.name}, доступно велосипедов: {station.free_bikes}
                    </div>
                  )})
                : null
            }
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default App;
