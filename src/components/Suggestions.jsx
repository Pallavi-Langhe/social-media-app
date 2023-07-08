import React, { useState } from 'react';
import '../style/Suggestions.scss';

const demoUsers = [
    { id: 1, username: 'pallavilanghe126' },
    { id: 2, username: 'pallavilanghe126' },
    { id: 3, username: 'pallavilanghe126' },
    { id: 4, username: 'pallavilanghe126' },
];

const Suggestions = () => {
    const [following, setFollowing] = useState([]);

    const handleFollow = (id) => {
        setFollowing([...following, id]);
    };

    const handleHideUser = (id) => {
        const updatedUsers = demoUsers.filter((user) => user.id !== id);
        demoUsers.length = 0; // Clear the array
        demoUsers.push(...updatedUsers);
    };

    return (
        <div className='suggestions-body justify-end'>
            <h2 className='text-lg font-bold'>Suggestions For You</h2>
            <div className="suggestions">
                {demoUsers.map((user) => (
                    <div key={user.id} className="user-card">
                        <p className="username">{user.username}</p>
                        <button
                            className="follow-button"
                            onClick={() => {
                                handleFollow(user.id);
                                handleHideUser(user.id);
                            }}
                        >
                            Follow
                        </button>
                    </div>
                ))}
                {following.length > 0 && (
                    <div className="following-state">
                        Following: {following.length} user{following.length !== 1 && 's'}
                    </div>
                )}
            </div>
        </div >
    );
};

export default Suggestions;
