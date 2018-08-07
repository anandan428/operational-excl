import React from 'react';
import './table.css';

const Table = (props) => {
    let keys = [];
    let data = props.data;
    if(data.length > 0){
        keys = Object.getOwnPropertyNames(data[0]);
    }

    return (
        <div style={{ padding: '10px', background: 'whitesmoke', position: "relative", float: "left", height: '300px', width: '57%' }}>
            <table>
                <tbody>
                    {
                        data.map(row => 
                        <tr>
                            {keys.map(key => <td>{row[key]}</td>)}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;