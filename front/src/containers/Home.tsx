import React from 'react';

// Router
import { Link } from 'react-router-dom';

// Styles
import '../styles/Home.css';

function Home(): React.ReactElement {
  return (
    <div className="Home">
      <h2>Welcome, user</h2>
      <p>Select your desired action:</p>

      <div className="Home__Links">
        <Link className="Home__Link" to="/authors">
          Go to Authors
        </Link>

        <Link className="Home__Link" to="/books">
          Go to Books
        </Link>
      </div>
    </div>
  );
}

export default Home;
