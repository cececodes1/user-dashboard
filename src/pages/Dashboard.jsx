import React from 'react';
import Profile from '../components/Profile';
import Posts from '../components/Posts';
import Albums from '../components/Albums';
import { Todos } from '../components/Todos';
import DarkModeToggle from '../components/DarkModeToggle';

const Dashboard = () => {
    return (
        <div className="container">
            <DarkModeToggle />
            <h1>User Dashboard</h1>
            <div className="card">
                <h2>Profile</h2>
                <Profile />
            </div>
            <div className="card">
                <h2>Posts</h2>
                <Posts />
            </div>
            <div className="card">
                <h2>Albums</h2>
                <Albums /> {/* Added Albums component */}
            </div>
            <div className="card">
                <h2>Todos</h2>
                <Todos /> {/* Added Todos component */}
            </div>
        </div>
    );
};

export default Dashboard;
