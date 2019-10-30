import App from '../App';
import {connect} from 'react-redux';
import {setNets, add, addNum, addNetId} from '../actions/actions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.counter,
  nets: state.nets,
  loadNetId: state.loadNetId,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  setNets,
  add,
  addNum,
  addNetId,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
