import {React, Component} from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { withRouter } from 'react-router'

class ItemPage extends Component{

    constructor() {
        super();
        this.state = { data: []};
    }
    componentDidMount(){
        const { item } = this.props.match.params.item;
        fetch(`/api/items/${item}`,{
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then(response => {
            return response.json()    
          })
        .then((data) => {
            this.setState({
                data: data
            })
            console.log(data)
        })
        .catch(error => {console.log(error)})
    }
    render(){
        return (
                <>
                    <Container>
                        <h6>{this.props.data} Recipe</h6>
                            <Image src="../images/temp.png" fluid/>;
                        
                    </Container>
                </>
                
        )};
}

export default withRouter(ItemPage)