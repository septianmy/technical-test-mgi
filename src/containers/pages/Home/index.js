import React, {Component, Fragment} from 'react'
import axios from 'axios';
import { ListImage, NavBar } from '../../../components';
import './home.css';
class Home extends Component {
    state = {
        data : [],
    }

    fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => {
            this.setState({
                data: res.data
            });
            console.log('Data', this.state.data);
        })
    }
    componentDidMount() { 
        this.fetchData();
        console.log('Ini ',this.state.data)
    }
    render(){
        return(
            <div className="container">
                <NavBar/>
                <div className="row">
                {
                    this.state.data.map(dataImage => {
                       return (
                        <ListImage thumbnail={dataImage.thumbnailUrl} title={dataImage.title} id={dataImage.id}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Home