import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Admin = (props) =>{

    return(
            <div id="admin-container" style={{marginTop: 120}}>
            
            <h1 id="admin-h1">Administrator Site</h1>
            <h3 id="admin-h3" >Create A New Case Or Delete/Update A Case</h3>

            <div id="admin-btn" >   
               <Link to="/createCase" > <button type="button" class="btn btn-primary">Create Case</button> </Link>
               <Link to="/deleteCase"><button type="button" class="btn btn-danger">Delete Case</button></Link> 
               <Link  to="/caseFiles"><button id="back-btn" type="button" class="btn btn-secondary">Back</button></Link>
             </div>
    
           </div>
        )
   
}
export default Admin;