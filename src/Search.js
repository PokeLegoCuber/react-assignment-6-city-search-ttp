import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {cityData: []};
    }
    
    componentDidMount(){
        
        //will take assing prop input recieved from a different component to a const
        const input = this.props.input;
        const url = "http://ctp-zip-api.herokuapp.com/city/" + input.toUpperCase();
        
        //Make http request to get data
        axios.get(url).then((res)=>{
            const data = res.data;
            
            //Goes thru each object returned
            data.forEach(element => {

                //Assigns selected values take from each object to a local object
                let obj = element;
               
                //Pushes object into the state array
                this.setState({ cityData: this.state.cityData.concat([obj])});

            });

        }).catch((err)=> console.log(err))

    }

    render() {
    const {cityData} = this.state;
      return (
        <div className="container">
                {
                //For each object inside the array 'cityData' it creates a div and outputs values
                cityData.map((value, idx) => (
                    <div key={idx}>
                        <p>{value}</p>
                    </div>
                ))}
        </div>
      );
    }
}

export default Search;