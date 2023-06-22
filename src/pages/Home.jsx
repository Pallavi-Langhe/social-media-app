import React, { useState, useEffect } from 'react'

function Home() {
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const user = localStorage.getItem("user-id");
        setUserDetails(user);
    }, [])
    return (
        <div>
            Home
            {userDetails && <p>{userDetails}</p>
            }
        </div>
    )
}

export default Home