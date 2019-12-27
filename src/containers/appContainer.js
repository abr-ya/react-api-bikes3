import App from '../App';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import * as selectors from '../selectors';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  nets: state.nets,
  stations: state.stations,
  currentNetId: state.currentNetId,
  currentNetStations: selectors.getСurrentNetStations(state),
})

// добавляем функции actions в props компонента
const mapDispatchToProps = {
  selectNet: actions.selectNet,
  initApp: actions.initApp,
  displayNet: actions.displayNet,
  setStationLike: actions.setStationLike,
  setStationDislike: actions.setStationDislike,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
