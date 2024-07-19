import {React, Component} from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';



class RecipeList extends Component{
    render(){
        return (
                <>
                    <Container>
                    <h6>Recipes List</h6>
                    {this.props.data.map((name) => (
                        
                            
                            <ListGroup as="ol">
                                <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                >
                                    <a className='' href={`http://localhost:3000/api/items/${name}`} style={{ textDecoration: 'none', color: 'black'}}>
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{ name }</div>
                                            Cras justo odio
                                        </div>
                                        <Badge bg="primary" pill>
                                            14
                                        </Badge>
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>                        
                        
                        )
                    )}  
                    </Container>
                </>
                
        )};
}


export default RecipeList