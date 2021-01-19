import React, {Component} from 'react'
import axios from 'axios';
import './Detail.css';

class Detail extends Component {
    state = {
        post : {
            url : '',
            title : ''
        }
    }

    fetchDetailData = () => {
        let id = this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => {
            let data = res.data;
            this.setState({
                post : {
                    url: data.url,
                    title: data.title
                }
            })
        })
    }
    componentDidMount() {
        this.fetchDetailData();
        console.log("Ini Data",this.state.post)
    }
    render(){
        return(
            <div className="container">
                <img src={this.state.post.url}></img>
                <div className="desc">
                    {this.state.post.title}
                </div>
            </div>
        )
    }
}

export default Detail
