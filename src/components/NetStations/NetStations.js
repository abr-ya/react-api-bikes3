import React from 'react';
import styles from '../../App.module.css';
import cn from 'classnames';
import Loader from '../Loader/Loader';

const NetStations = ({currentNetStations, setStationLike, setStationDislike}) => {
	if (currentNetStations) {
		return (
			<>
				<h3>Станции сети ({currentNetStations.length}):</h3>
				{ currentNetStations.map((station, index) => (
						<div
							className={cn(styles.card, {
								[styles.cardLike]: station.liked,
							})}
							key={`${station.id}_${index}`}
							onClick={() => station.liked ? setStationDislike(index) : setStationLike(index) }
						>
							{station.name}, доступно велосипедов: {station.free_bikes}
						</div>
					))
				}
			</>		
		)		
	} else {
		return (<Loader />)
	}
}

export default NetStations;
