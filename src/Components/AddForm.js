import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhsua: true,
            id:'',
            name:'',
            diachi:'',
            quyen:''
        }
    }
    // hienthiNut = () => {
    //     if (this.state.trangThaiChinhsua === true) {
    //         return <div onClick={() => this.setTrangthai()} className="btn btn-block btn-outline-secondary" >Dong lai</div>
    //     } else {
    //         return <div onClick={() => this.setTrangthai()} className="btn btn-block btn-outline-info">Them moi</div>
    //     }
    // }
    setTrangthai = () => {
        this.setState({
            trangThaiChinhsua: !this.state.trangThaiChinhsua
        });
    }
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        // var item={};
        // item.id=this.state.id;
        // item.name=this.state.name;
        // item.diachi=this.state.diachi;
        // item.quyen=this.state.quyen;
        // console.log(item);
        
    }

    showFormAdd = () => {
        if (this.props.trangThaiChinhsua === true) {

            return  <div className="col"><div className="card border-info mb-3">
                <div className="card-header text-center">Them moi</div>
                <div className="card-body text-primary">
                    <form>
                        <div className="form-group">
                        <label>Ten</label>
                        <input name = 'name' onChange={(event)=>this.isChange(event)} type="text" className="form-control" placeholder="Nhap ten" />
                        <label>Dia chi</label>
                        <input name = 'diachi' onChange={(event)=>this.isChange(event)} type="text" className="form-control" placeholder="Nhap dia chi" />
                        <label>Chon quyen</label>
                        <div className="form-group">
                            <select onChange={(event)=>this.isChange(event)} name ='quyen' className="form-control form-control-sm" onChange={(event)=>this.isChange(event)}>
                            <option  >Mac dinh</option>
                                <option value ={1}>Admin</option>
                                <option  value={2}>Custumer</option>
                                <option value={3}>Normar user</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary" onClick={(name,diachi,quyen)=>this.props.add(this.state.name,this.state.diachi,this.state.quyen)} value=" Them moi"/>
                        </div>
                    </div>
                    </form>
                    
                </div>
            </div>
            </div>
                
        }
    }

    render() {
        //console.log(this.props.trangthai);
        return (
           
                <div>

                    {this.showFormAdd()}


                </div>

        );
    }
}

export default AddForm;