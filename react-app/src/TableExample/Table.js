import React from 'react';
import Columns from '../TableExample/Columns';

class Table extends React.Component{
    constructor() {
        super();
        this.state = {
            list : [
                { seq : 1 , title : '제목1' , author : '작성자' , createdate  : (new Date()) },
                { seq : 2 , title : '제목2' , author : '작성자' , createdate  : (new Date()) },
                { seq : 3 , title : '제목3' , author : '작성자' , createdate  : (new Date()) },
                { seq : 4 , title : '제목4' , author : '작성자' , createdate  : (new Date()) },
                { seq : 5 , title : '제목5' , author : '작성자' , createdate  : (new Date()) },
                { seq : 6 , title : '제목6' , author : '작성자' , createdate  : (new Date()) },
                { seq : 7 , title : '제목7' , author : '작성자' , createdate  : (new Date()) }
            ]
        }
    }

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
                <Columns list={this.state.list}/>
            </table>
        );
    }
}

export default Table;