import React, { Component } from 'react';
import './table.css';

class Table extends Component {
    withoutHeader = () => {
        let data = this.props.data;
        console.log('we are here');
        if (this.props.headers) {
            let headers = this.props.headers;
            return (
                <table className={'withBorder'}>
                    <thead>
                        {
                            headers.map(header => <th>
                                {
                                    header.title
                                }
                            </th>)
                        }
                    </thead>
                    <tbody>
                        {
                            data.map(row =>
                                <tr>
                                    {
                                        headers.map(header => <td>{row[header.field]}</td>)
                                    }
                                </tr>)
                        }
                    </tbody>
                </table>
            )
        }
        else if (!this.props.header) {
            let keys = [];
            if (data.length > 0) {
                keys = Object.getOwnPropertyNames(data[0]);
            }
            return (
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
            );
        }
    }

    render() {
        return (
            <div className = {this.props.className}>
                {this.withoutHeader()}
            </div>
        )
    }
}

export default Table;