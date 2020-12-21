import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class editCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            file: "",
            info: "",
            solved: "",
            imageSrc: ""
        }
    }

    getCases() {}
    componentDidMount() {
        let caseId = this.props.match.params.id;
        axios.get(`https://localhost:5001/cases/${caseId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    file: response.data.file,
                    info: response.data.info,
                    solved: response.data.solved,
                    imageSrc: response.data.imageSrc
                })
                console.log(this.state)
            });
    }

    handleChange = event => {
        switch (event.target.name) {
            case 'imageSrc':
                if (event.target.files.length > 0) {
                    this.setState({
                        imageSrc: event.target.files[0].name
                    });
                }
                break;
            default:
                this.setState({
                    [event.target.name]: event.target.value
                });
        }
    };


    editCase = (event) => {
        event.preventDefault();
        let obj = {
            id: this.state.id,
            file: this.state.file,
            info: this.state.info,
            solved: this.state.solved,
            imageSrc: this.state.imageSrc
        };

        let id = this.props.match.params.id;
        const webAPIUrl = "https://localhost:5001/cases";
        // let newInfo = { info: this.state.newInfo };
        let file = document.getElementById("upload-img");
        let data = new FormData();
        data.append("file", file.files[0]);
        console.log(id);
        axios.put("https://localhost:5001/cases", obj)
        axios({
                method: 'post',
                url: 'https://localhost:5001/cases/savepicture',
                data: data,
                config: {
                    headers: {
                        'Contet-Type': 'multipart/form-data'
                    }
                }
            })
            .then(res => {
                console.log(res)
            });
    }
    render() {
        return ( 
            <div id="create-case-container">
            <h3>Edit File</h3>
            <form onSubmit={ this.editCase } >
                <div className="form-group" >
                <label >File: </label>
                <input className="form-control" onChange={ this.handleChange } type="text" name="file" value={ this.state.file }/>
                </div>
                <div className="form-group">
                <label >Solved?: </label>
                <input className="form-control" onChange={this.handleChange} type="text" name="solved" value={ this.state.solved} />
                </div>
                <div className="form-group">
                <label >Information: </label>
                <textarea  className="form-control" className="form-control" onChange={this.handleChange} cols="50" name="info" value={ this.state.info} />
                </div>
                <div className="form-group">
                <label >Picture: </label>
                <input className="form-control" onChange={this.handleChange} id="upload-img" type="file" name="imageSrc"/>
                </div>
                <input  class="btn btn-success" type="submit" value="Save File" />
                <Link  to="/deleteCase"><button id="back-btn" type="button" class="btn btn-secondary">Back</button></Link>

            </form>
        </div>
          
    )
}
}
export default editCase;