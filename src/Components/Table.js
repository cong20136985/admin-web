import React, { Component } from 'react';

class Table extends Component {
    showTable = () =>  this.props.dulieu.map((value, index) => (
            <tr key={index}>
        <td scope="row">{value.id}</td>
                <td>{value.name}</td>
                <td>{value.diachi}</td>
                <td>{this.showpermission(value.quyen)}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    " /> Sua
</div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete    " /> Xoa
</div>
                    </div>
                </td>
            </tr>
    ))

        
    showpermission = (ind) => {
        if(ind === 1) {
            return "Admin"
        } else if(ind === 2) {
            return "Custumer"
        } else if(ind === 3){
            return "normar user"
        }

    }

    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ten</th>
                            <th>Dia chi</th>
                            <th>Quyen</th>
                            <th>Thao tac</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.showTable()}
                        
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;