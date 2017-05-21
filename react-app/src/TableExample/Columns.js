import React from 'react';

function Column(props , idx){
    return (
        <tr key={idx}>    
            <td>{props.seq}</td>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.createdate + ''}</td>
        </tr>
    );
}

class Columns extends React.Component{
    
    render(){
        const list = this.props.list.slice();
        const columns = list.map((item , idx)=> {
            console.log(item,idx)
            return Column(item , idx);
        });

        return(
            <tbody>
                {columns}
            </tbody>
        );
    }
}

export default Columns