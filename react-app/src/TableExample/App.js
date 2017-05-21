import React , {Component} from 'react';
import Table from '../TableExample/Table';
import Pagination from '../TableExample/Pagination';

class App extends Component{
    constructor(){
        super();
        this.state = {
            list : [],
            count : 1,
            limit : 1,
            page : 1
        };
        
    }

    componentDidMount(){        
        fetch('/api/board/list' , {
            method : 'GET',
            headers :{
                accept : 'application/json'
            },
            params : {
                'TYPE' : 'LIST',
                'PAGE' : 1
            }
        })
        .then(res => res.json())
        .then((result) =>{
            this.setState({
                list : result.rows,
                count : result.count,
                limit : result.limit,
                page : result.page
            })
        }, () => {
            console.log('1')
        })
    }

    render(){
        return (
            <div className="container">
                <h1>{this.props.Title}</h1>
                <Table list={this.state.list} />
                <Pagination count={this.state.count} limit={this.state.limit} page={this.state.page}/>
            </div>
        )
    }
}

export default App;