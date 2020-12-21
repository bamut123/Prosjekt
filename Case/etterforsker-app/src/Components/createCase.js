import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class createCase extends Component{
    constructor(props){
        super(props);
        this.state = {
            newCase: "",
            newInfo: "",
            solved: "",
            imageSrc: ""
        }
    }

    handleChange = event => {
        switch(event.target.name) {
          case 'imageSrc':
                if(event.target.files.length > 0) {
                this.setState({ imageSrc: event.target.files[0].name });
            }
          break;
          default:
                this.setState({ [event.target.name]: event.target.value });
         }
      };


    postNewCase = (event) =>{
        event.preventDefault();
        let obj = { file: this.state.newCase, info: this.state.newInfo, solved: this.state.solved, imageSrc: this.state.imageSrc };  
        let file = document.getElementById("upload-img");
        let data = new FormData();
        data.append("file", file.files[0]);
        console.log(data);
        axios.post("https://localhost:5001/cases", obj)
        axios({
            method: 'post',
            url: 'https://localhost:5001/cases/savepicture',
            data: data,
            config: { headers: { 'Contet-Type': 'multipart/form-data'  } }
        })
        .then(res =>{
            console.log(res)
        }) ;
    }

    
    render(){
        return(
            <div id="create-case-container">
                <h3>Create File</h3>
                <form onSubmit={ this.postNewCase } >
                    <div className="form-group" >
                    <label >File: </label>
                    <input className="form-control" onChange={ this.handleChange } type="text" name="newCase" value={ this.state.newCase }/>
                    </div>
                    <div className="form-group">
                    <label >Solved?: </label>
                    <input  className="form-control" onChange={this.handleChange} type="text" name="solved" value={ this.state.solved} />
                    </div>
                    <div className="form-group">
                    <label >Information: </label>
                    <textarea  className="form-control" onChange={this.handleChange} cols="50" name="newInfo" value={ this.state.newInfo} />
                    </div>
                    <div className="form-group">
                    <label >Picture: </label>
                    <input  className="form-control" onChange={this.handleChange} id="upload-img" type="file" name="imageSrc"/>
                    </div>
                    <input  class="btn btn-success" type="submit" value="Save File" />
                    <Link  to="/admin"><button id="back-btn" type="button" class="btn btn-secondary">Back</button></Link>

                </form>
            </div>
        )
    }
}
export default createCase;