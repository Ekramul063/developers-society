import React from 'react';
import AddPost from './AddPost/AddPost';
import Header from './Header/Header';
import WithoutMedia from './homePosts/WithoutMedia';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <AddPost></AddPost>
           <WithoutMedia></WithoutMedia>
        </div>
    );
};

export default Home;