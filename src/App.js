import React, {useEffect} from 'react';
import axios from 'axios';
import styles from './App.module.css';

const App = (props) => {
  const {
		setNets,
		nets,
    add,
    addNum,
    counter
	} = props;

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
	}

  return (
    <div className={styles.App}>
      <div className="main">
        <h1>Велосипеды. Перезагрузка</h1>
        <h2>Управляем числом: {counter}</h2>

        <hr/>

        <div className="row">
          <div className="col">
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
          <div className="col">

          </div>
        </div>

        <div className="Actions">
          <button onClick={add}>Добавить 1</button>
          <button onClick={() => {addNum(10)}}>Добавить 10</button>
        </div>        
      </div>
    </div>
  )
}

export default App;
