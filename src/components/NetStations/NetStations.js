import React from 'react';
import styles from '../../App.module.css';
import cn from 'classnames';

const NetStations = ({currentNetStations, changeStat}) => {
	if (!currentNetStations) {

	}

	return (
		<>
			<h3>
			{ (currentNetStations)
				? `Станции сети (${currentNetStations.length}):`
				: "Идёи загрузка..."
			}
			</h3>

			{ (currentNetStations)
				? currentNetStations.map((station, index) => (
					<div
						className={cn(styles.card, {
							[styles.cardLike]: station.liked,
						})}
						key={`${station.id}_${index}`}
						onClick={() => changeStat(index)}
					>
						{station.name}, доступно велосипедов: {station.free_bikes}
					</div>
				))
				: null
			}
		</>		
	)
}

export default NetStations;
