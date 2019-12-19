import App from '../App';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  nets: state.nets,
  stations: state.stations,
  currentNetId: state.currentNetId,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  setNets: actions.setNets,
  addNet: actions.addNet,
  selectNet: actions.selectNet,
  changeStat: actions.changeStat,
  initApp: actions.initApp,
  displayNet: actions.displayNet,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
