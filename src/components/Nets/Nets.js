import React from 'react';
import styles from '../../App.module.css';
import Loader from '../Loader/Loader';

const Nets = ({nets, selectNet}) => {

	return (
		<>
			<h3>Список сетей</h3>
			{ (Array.isArray(nets) && nets.length)
				? nets.map((net, index) => (
					<div
						className={styles.card}
						key={`${net.id}_${index}`}
						onClick={() => selectNet(net.id)}
					>
						{net.name} ({net.id})
					</div>
				))
				: (<Loader />)
			}
		</>		
	)
}

export default Nets;
