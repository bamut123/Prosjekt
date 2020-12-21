import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div id="home">
            <div class="jumbotron">
                <h1 class="display-4">Welcome To The Police Files App</h1>
                 <p class="lead">A simple Way To Keep Track Of Cases And Files</p>
                <hr class="my-4"/>
                <p>Here You Can Work  On Your Ongoing Cases Or Make New Ones</p>
                 <Link to="/caseFiles"><a class="btn btn-primary btn-lg" href="#" role="button">Get Started</a></Link>
                </div>
        
            </div>
    );
}

export default Home;