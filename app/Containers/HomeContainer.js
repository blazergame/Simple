import React, { Component } from 'react';
import NewsBox from '../Components/NewsBox.js';
import { Button } from 'react-native';
import Data from '../Data/data.json';

const url = 'https://simple-news-server.herokuapp.com/v1/news';

class HomeContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            tab: 'HOME',
            apiData: [],
            
        };
    }




    //Fetch from news API
    componentDidMount(){

        fetch(url)
            .then(result => { return result.json();})
            .then(data => {
                console.log(data);
                this.setState({apiData: data});
            })
    }

    render(){        
        return(
            <NewsBox data={this.state} />
        );
    }
}

export default HomeContainer; 