import { Component } from 'react';

class Array extends Component {
    state = {
        counter: 0,
        posts:[
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
            },
        ]
    };
    timeoutUpdate = null;
   
    componentDidMount(){
        this.handleTimeout();
    };
    
    componentDidUpdate(){
        this.handleTimeout();
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutUpdate);
    }

    handleTimeout = () => {
        const { posts, counter } = this.state;
        posts[0].title = 'O título mudou';

        this.timeoutUpdate = setTimeout(() => {
            this.setState({ posts, counter: counter + 1 });
        },1000);
    }

    render() {

        const { posts, counter } = this.state;
        return (
            <>
                <h1>{counter}</h1>
                {posts.map(posts => (
                    <div key={posts.title}>
                        <h1 key={posts.title}>{posts.title}</h1>
                        <p>{posts.body}</p>
                    </div>

                ))}
            </>

        )
    }
}

export default Array