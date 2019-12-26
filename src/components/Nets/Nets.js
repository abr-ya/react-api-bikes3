import React from 'react';
import styles from '../../App.module.css';

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
				: ("здесь будет лоадер...")
			}
		</>		
	)
}

export default Nets;
