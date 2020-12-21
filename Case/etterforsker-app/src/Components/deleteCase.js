import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class deleteCase extends Component{
    constructor(props){
        super(props);
        this.state = {
           id: 0,
           caseFiles: [ { id:"",  file: "", info: "", solved: "", imageSrc: ""}]
        }
    }

    getCases(){
        let casesP = this.state.caseFiles.map( caseFile => {
        return  <tr>
                    <td>{caseFile.id}</td>
                    <td>{caseFile.file}</td>  
                    <td>{caseFile.info}</td>    
                    <td>{caseFile.solved}</td> 
                    
                    <td><img id="table-pic" src={ `https://localhost:5001/images/${caseFile.imageSrc}`} alt=""/></td>  
                    <td><input class="btn btn-danger"  id={caseFile.id} onClick={this.deleteCase2} type="button" value="Delete"/></td>
                    <td><Link class="btn btn-warning" to={`/editCase/${caseFile.id}`}> Edit</Link></td>
                    
                    </tr>
        });
        return casesP
    }


handleChange = event =>{
    this.setState({ id: event.target.value})
}


deleteCase = (e) =>{
    e.preventDefault();
     const webAPIUrl = "https://localhost:5001/cases";
     let id = this.state.id;
    axios.delete( `${webAPIUrl}/${id}` )
                .then( response => {
                    console.log(response);
                    console.log(response.data);
                } )
}

deleteCase2 = (e) =>{
     const webAPIUrl = "https://localhost:5001/cases";
     let id = e.target.id;
    axios.delete( `${webAPIUrl}/${id}` )
                .then( response => {
                    console.log(response);
                    console.log(response.data);
                } )
}


componentDidMount(){
    axios.get("https://localhost:5001/cases")
    .then( response => {
        this.setState ( { caseFiles: response.data } )
        console.log(response.data)
     } );
 }

render(){
    return(
        <div>
        <form id="deleteForm" onSubmit={this.deleteCase}>
        <label >
            Case ID:
            <input type="number" name="id" onChange={this.handleChange}  />
         </label>
         <input type="submit" value="Delete Case"/>
         <Link  to="/admin"><button id="back-btn2" type="button" class="btn btn-secondary">Back</button></Link>
        </form>
        <table className="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">Case ID</th>
            <th scope="col">File Name</th>
            <th scope="col">Information</th>
            <th scope="col">Solved?</th>
            <th scope="col">Picture</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
        </tr>
         </thead> 
         <tbody>
          
            {this.getCases()}
           
            
            </tbody>
        </table>
        
        </div>
        )
}

}

export default deleteCase;