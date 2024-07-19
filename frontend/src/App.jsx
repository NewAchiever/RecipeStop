import './App.css';
import {React, Component} from 'react';
import Navbar from './components/navbar';
import RecipeList from './components/recipelist';
import ItemPage from './components/itempage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


class App extends Component{
    constructor() {
        super();
        this.state = { data: []};
    }
    componentDidMount(){
        fetch('/api/items',{
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
        })
        .catch(error => {console.log(error)})
    }
    render(){
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Routes>
                        <Route index element={<RecipeList data ={this.state.data}/>    } />
                        <Route path={`api/items/:item`} element={<ItemPage />} />
                    </Routes>
                </div>
            </Router>
        );        
    }
}

export default App;




