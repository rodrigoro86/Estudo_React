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

#### Map
```
import { Component } from 'react';

class Array extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: 'O título 1',
                body: 'O corpo 1'
            },
            {
                id: 2,
                title: 'O título 2',
                body: 'O corpo 2'
            },
            {
                id: 3,
                title: 'O título 3',
                body: 'O corpo 3'
            }
        ]
    }
    render() {
        const { posts } = this.state;
        return (
            <>
                {posts.map(post => (
                    <div key={post.title}>
                        <h1 key={post.title}>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>

                ))}
            </>

        )
    }
}

export default Array
```

### Lifecycle methods 
#### componentDidMount()
É invocado imediatamente após um componente ser montado (inserido na árvore). Inicializações que exijam nós do DOM devem vir aqui. Se precisar carregar data de um endpoint remoto, este é um bom lugar para instanciar sua requisição.

#### componentDidUpdate()
É invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.

#### componentWillUnmount()
É invocado imediatamente antes que um componente seja desmontado e destruído. Qualquer limpeza necessária deve ser realizada neste método, como invalidar timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi criada no componentDidMount().

### Fetch API