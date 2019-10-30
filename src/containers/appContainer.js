import App from '../App';
import {connect} from 'react-redux';
import {setNets, add, addNum} from '../actions/actions';

// переносим State (или его часть) в props компонента
const mapStateToProps = state => ({
  counter: state.counter,
  nets: state.nets,
})
  
// добавляем функции - создатели экшенов в props компонента
const mapDispatchToProps = {
  setNets,
  add,
  addNum,
}

// связываем компонент с Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
