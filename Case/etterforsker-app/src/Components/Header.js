import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    
    return(
        <header>
              <nav class="navbar   navbar-dark bg-dark navbar-expand-md">

             <Link to="/"><a class="navbar-brand" href="#">PoliceFiles App</a></Link> 

                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="navbarNav">
                 <ul class="navbar-nav ml-auto">
                <Link to='/'><li class="nav-item "><a id="nav-link" class="nav-link" href="#"> Home</a></li> </Link>
                 <Link to='/CaseFiles'><li class="nav-item"><a id="nav-link" class="nav-link" href="#">Case Files</a></li></Link>
                 <Link to="/Admin" > <li class="nav-item"><a id="nav-link" class="nav-link" href="#">Admin</a></li></Link>
                 <Link to="/Redux" > <li class="nav-item"><a id="nav-link" class="nav-link" href="#">Notes</a></li></Link>
                </ul>

                </div>
                </nav>
        </header>
    );
}


export default Header;