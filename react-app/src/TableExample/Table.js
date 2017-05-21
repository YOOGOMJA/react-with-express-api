import React from 'react';
import Columns from '../TableExample/Columns';

class Table extends React.Component{
    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>SEQ</th>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>CREATE DATE</th>
                    </tr>
                </thead>
                <Columns list={this.props.list}/>
            </table>
        );
    }
}

export default Table;