import React from 'react';
import AddPost from './AddPost/AddPost';
import Header from './Header/Header';
import WithMedia from './homePosts/WithMedia';
import WithoutMedia from './homePosts/WithoutMedia';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <AddPost></AddPost>
           <WithMedia></WithMedia>
           <WithoutMedia></WithoutMedia>
        </div>
    );
};

export default Home;