import React, { Component } from 'react';
import './table.css';

class Table extends Component {

    withoutHeader = () => {
        let data = this.props.data;
        if (this.props.headers) {
            debugger;
            let headers = this.props.headers;
            return (
                <table className={this.props.appliedClassName ? '' : 'withBorder'}>
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
                                <tr key={row[this.props.pk]}>
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
            let list = data.map(dataRow => {
                return Object.assign({}, {
                    name: dataRow.name,
                    value: dataRow.employees.length,
                    id: dataRow.id
                });
            });
            if (list.length > 0) {
                keys = Object.getOwnPropertyNames(list[0]);
            }
            return (
                <table>
                    <tbody>
                        {
                            list.map(row =>
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