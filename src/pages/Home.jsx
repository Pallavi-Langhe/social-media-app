import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Home/Sidebar';
import Navbar from '../components/Home/Navbar';
import Suggestions from '../components/Home/Suggestions';
import Post from '../components/Home/Post';


function Home() {
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const user = localStorage.getItem("user-id");
        setUserDetails(user);
    }, [])
    return (
        <div className='flex flex-col'>

            <Navbar />
            <div className='flex justify-between'>
                <Sidebar />
                <Post />
                <Suggestions />
            </div>

        </div>
    )
}

export default Home