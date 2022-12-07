import { Component } from 'react';
import './Fetch.css';

class Fetch extends Component {
    state = {
        counter: 0,
        posts:[
        ]
    };
   
    componentDidMount(){
        this.loadPosts();
    };

    loadPosts = async () => {
        const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
        const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    
        const [posts, photos] = await Promise.all([postResponse, photosResponse]);
        
        const postsJson = await posts.json();
        const photosJson = await photos.json();

        const postsAndPhotos = postsJson.map((post, index) => {
            return { ...post, cover:photosJson[index].url }
        });

        this.setState({ posts: postsAndPhotos });
    }

    render() {

        const { posts, counter } = this.state;
        return (
            <section className='container'>
                <div className='posts'>
                {posts.map(posts => (
                    <div className='post'>
                        <img src={posts.cover} alt={posts.title} />
                        <div key={posts.title} className="post-content">
                            <h1 key={posts.title}>{posts.title}</h1>
                            <p>{posts.body}</p>
                        </div>
                    </div>
                ))}
                </div>
            </section>
            

        )
    }
}

export default Fetch