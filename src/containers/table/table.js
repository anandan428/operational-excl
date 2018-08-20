import React, { Component } from 'react';
import './table.css';

class Table extends Component {

    withoutHeader = () => {
        let data = this.props.data;
        if (this.props.headers) {
            let headers = this.props.headers;
            return (
                <table className={'withBorder'}>
                    <thead>
                        <tr>
                            {
                                headers.map(header => <th>
                                    {
                                        header.title
                                    }
                                </th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(row =>
                                <tr key={row[this.props.pk]} onClick={() => this.props.onClick(row)}>
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
                                <tr key={row[this.props.pk]}>
                                    {keys.map(key => {
                                        if (key !== 'id')
                                            return (<td>{row[key]}</td>
                                            )
                                    })}
                                </tr>)
                        }
                    </tbody>
                </table>
            );
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.withoutHeader()}
            </div>
        )
    }
}

export default Table;