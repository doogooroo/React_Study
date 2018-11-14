import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

// props 전달
const mapStateToProps = (state) => ({ counters: state.counters }); 

// 함수 전달
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
})

// CounterListContainer props에 삽입
const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;