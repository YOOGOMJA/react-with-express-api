import React from 'react';

function Column(props , idx){
    return (
        <tr key={idx}>    
            <td>{props.Seq}</td>
            <td>{props.Title}</td>
            <td>{props.Writer}</td>
            <td>{props.Date }</td>
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