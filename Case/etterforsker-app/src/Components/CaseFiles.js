import React, {Component} from 'react';
import axios from 'axios';

class CaseFiles  extends Component{
constructor(props){
    super(props);
    this.state = {
        caseFiles: [ { id:"",  file: "", info: "", solved: "", imageSrc: ""}]
    }
}

getCases(){
    let casesP = this.state.caseFiles.map( caseFile => {
    return <article class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"  >
                <div className="card" >
                <h3 className="card-title" >File: {caseFile.file}</h3>
                <h4 className="card-title" >Case Id: {caseFile.id}</h4>
                <p>Case Information: {caseFile.info}</p>
                <p>Case Solved: {caseFile.solved}</p>
                <img className="card-img-top" src={ `https://localhost:5001/images/${caseFile.imageSrc}`} alt=""/>
                </div>
          </article>
    });
    return casesP
}


 componentDidMount(){
    let caseID = this.props.match.params.id;
    axios.get(`https://localhost:5001/cases/${caseID}`)
    axios.get("https://localhost:5001/cases")
    .then( response => {
        this.setState ( { caseFiles: response.data } )
        console.log(response.data)
     } );
 }


    render(){
        return(
            <div className="container" >
                <h1 class=" d-flex justify-content-center mb-5" id="title" style={{marginTop : 60}}>Case Files</h1>
                <main className="row" style={{marginTop:50}} >
                
                 {this.getCases()}
                
             </main>
            </div>
            )
    }
}

export default CaseFiles;