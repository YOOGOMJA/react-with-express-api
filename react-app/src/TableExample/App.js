import React , {Component} from 'react';
import Table from '../TableExample/Table';


class App extends Component{
    render(){
        return (
            <div className="container">
                <h1>{this.props.Title}</h1>
                <Table />
            </div>
        )
    }
}

export default App;