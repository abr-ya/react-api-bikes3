import React, {useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.css';

const App = (props) => {
  const {
    setNets,
    addNetId,
		nets,
    loadNetId,
  } = props;
  
  console.log(loadNetId);

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
    } else {
      console.log('надо загружать!');
      addNetId(id);
      axios.get(`http://api.citybik.es/v2/networks/${id}`)
        .then(res => {
          console.log(res.data);
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

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default App;
