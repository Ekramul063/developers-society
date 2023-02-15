import React from 'react';
import AddPost from './AddPost/AddPost';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <AddPost></AddPost>
        </div>
    );
};

export default Home;