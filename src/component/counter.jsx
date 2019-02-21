import React, {Component} from 'react';

class Counter extends Component {
/*
    state = {
        count: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"],

        product :{
            id : 100
        }
    };*/

    abc = { id : 3};

    constructor(props){
        super(props);
        console.log('Counter Component >> Constructor');
        //this.handleIncrement = this.handleIncrement.bind(this);
    }
/*    handleIncrement = (product) => {
        console.log(product);
        this.state.count += 1;
        this.setState({ count: this.state.count, abc: this.abc  });
    };*/

    componentWillMount = () =>{
        console.log('Counter Component >> Mounting');
    };

    componentDidMount = () =>{
        console.log('Counter Component >> Mounted');
    };

    componentDidUpdate = (prevProps,prevState) =>{
        console.log('Counter Component >> Updated');

        console.log('Counter prevProps', prevProps);
        console.log('Counter prevState', prevState);
    }

    componentWillUnmount = () =>{
        console.log('Counter Component >> Un-mount');
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>No Tags found</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag} className="badge">{tag}</li>)}</ul>;
    }

    render() {
        console.log("Counter Component >> Render");

        return (
            <div>
                <span style={{ fontSize:20}} className={this.getBadgeClasses()}>{this.props.counter.value}</span>
                <button onClick={ ()=> this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                &nbsp;
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>

                {/*{this.renderTags()}*/}

            </div>
        );
    }

    getBadgeClasses(){

        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
