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
    changeStat,
    stations,
    currentNetId,
  } = props;

  // при запуске получаем сети и записываем в Store
  // пока не сделали это, нужно крутить лоадер!
  useEffect(() => {
    axios.get(`http://api.citybik.es/v2/networks?fields=id,company`)
      .then(res => {
        setNets(res.data.networks);
    });
	}, [setNets]);
	
	const netClickHandler = (id, index) => {
    console.log(id, index);
    if (loadNetId.includes(id)) {
      // сеть уже смотрели - получаем из Store
      getNet(id);
    } else {
      // новая сеть - делаем запрос и сохраняем
      axios.get(`http://api.citybik.es/v2/networks/${id}`)
        .then(res => {
          const netNew = res.data.network;
          addNet(id, netNew);
      });
    }
  }
  
  // внимание! ID - это id станции, а не сети!!!
	const stationClickHandler = (id, index) => {
    console.log(id, index);
    changeStat(id, index);
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
                  className={styles.card}
									key={`${net.id}_${index}`}
									onClick={() => netClickHandler(net.id, index)}
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
                ? stations[currentNetId].stations.map((station, index) => {
                  console.log(station.id, station.like);
                  // создаём массив классов
                  const cardClasses = [styles.card];
                  // добавляем класс если есть свойство
                  if (station.like) {cardClasses.push(styles.cardLike);}
                  return (                    
                    <div
                      className={cardClasses.join(' ')}
                      key={`${station.id}_${index}`}
                      onClick={() => stationClickHandler(station.id, index)}
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
