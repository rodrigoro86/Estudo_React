# Seção 2: React(O Básico)

### Criando o projeto
`npx create-react-app my-app`

### Rodar o projeto
`npm start`

### Compoentes de classe com estado (stateful)
```
import { Component } from 'react';

class Teste extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Rodrigo"
        }
    };

    render(){
        const name = this.state.name;
        return (
            <>
            <h1>{name}</h1>
            </>
        )
    }
}

export default Teste
``` 
##### Destructuring 
`const { name } = this.state;`

##### Evento Sintético
```
handleH2Click = () => {
    const { counter } = this.state;
    const nextCounter = counter + 1;
    this.setState({ counter: nextCounter })
}
```