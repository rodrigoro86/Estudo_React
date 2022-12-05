import { Component } from 'react';

class Teste extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handlePClick = this.handlePClick.bind(this);
    //     this.state = {
    //         name: "Rodrigo Broslavschi",
    //         counter: 0
    //     };
    // };

    state = {
        name: "Rodrigo Broslavschi",
        counter: 0
    };

    handlePClick = () => {
        this.setState({ name: 'Teste' });
    }
    handleH2Click = () => {
        const { counter } = this.state;
        const nextCounter = counter + 1;
        this.setState({ counter: nextCounter })
    }

    render(){
        const { name, counter }= this.state;

        
        return (
            <>
                <h1 onClick={this.handlePClick}>{name}</h1>
                <h2 onClick={this.handleH2Click}>{counter}</h2>
            </>
        )
    }
}

export default Teste