import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Our Application</h1>
                <p>Your journey starts here!</p>
                <button>Get Started</button>
            </section>

            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Feature 1: Easy to use interfaces</li>
                    <li>Feature 2: Fast performance</li>
                    <li>Feature 3: Secure data handling</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;