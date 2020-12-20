import React from 'react';
import axios from 'axios';
import './Main.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Book extends React.Component{
    state={
        items:[],

    };
 
    componentDidMount(){
        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=T1cHAy86uf1YG584FytW3VY1oAxn9ArW')
        .then(res=>{
            console.log(res.data.results);
            this.setState({items: res.data.results});
        });
    }
    render(){
        return(
            
            <div className="booklist">
            <ul>
                {this.state.items.map(item =><Card className="card">
  <Card.Body>
    <Card.Title className="cardtitle">{item.display_name}</Card.Title>
    <Card.Title className="cardtitle">{item.display_author}</Card.Title>
   
    <Link className="cardlink" to="./booklist">Back to List</Link>
  </Card.Body>
</Card>)}
                
             </ul>
           </div>     
          
        )
    }

}