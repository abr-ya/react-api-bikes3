import App from '../App';
import {connect} from 'react-redux';
import {setNets, addNet, selectNet, changeStat} from '../actions/actions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  nets: state.nets,
  stations: state.stations,
  currentNetId: state.currentNetId,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  setNets,
  addNet,
  selectNet,
  changeStat
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
