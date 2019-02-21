import React, {Component} from 'react';
import Counter from './counter'

class Counters extends Component {

    componentDidMount = () =>{
        console.log('Counter[s] Component >> Mounted');
    };

    componentDidUpdate = (prevProps1,prevState) =>{
        console.log('Counter[s] Component >> Updated');

        console.log('Counter[s] prevProps', prevProps1);
        console.log('Counter[s] prevState', prevState);
    }

    componentWillUnmount = () =>{
        console.log('Counter[s] Component >> Un-mount');
    }

    render() {
        console.log('Counter[s] Component >> Rendered');
        // Object destructuring
        const {onReset,counters,onDelete,onIncrement} = this.props;

        return (
            <div>
                <button className="btn btn-info btn-sm" onClick={onReset}>Reset</button>
                {counters.map(c=> <Counter key={c.id} counter={c}
                                                      onDelete={onDelete}
                                                      onIncrement={onIncrement}
                />)}

            </div>
        );
    }
}


export default(Counters);
