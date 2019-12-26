import {createSelector} from 'reselect';

export const getСurrentNetId = (state) => state.currentNetId;
export const getStations = (state) => state.stations;

export const getСurrentNetStations = createSelector(
	getStations,
	getСurrentNetId,
	(Stations, СurrentNetId) => Stations[СurrentNetId]
);
