import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Home() {
    return(
        <div className="home">
             <h1>
                BookStore
            </h1>
            <p>
                Keep In Touch With Best-selling Books
            </p>
            <Link className="btn" to='/booklist'>
                Go 
            </Link>
                
            

        </div>
    );
}

export default Home;