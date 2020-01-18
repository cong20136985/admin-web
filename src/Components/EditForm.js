import React, { Component } from 'react';




class EditForm extends Component {
    constructor(props) {
        super(props);
        
    }
    
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        // this.setState({
        //     [name]:value
        // });
        this.props.edit[name]=value;
        // var item={};
        // item.id=this.state.id;
        // item.name=this.state.name;
        // item.diachi=this.state.diachi;
        // item.quyen=this.state.quyen;
        // console.log(item);
        
    }

    componentWillReceiveProps(){
       // console.log(this.props);
    }

    componentDidUpdate(){
        //console.log(this.props);
        
        
    }
    
    componentWillMount(){
        
    }

    componentDidMount(){
        
        //console.log(1,this.state);
        
    }
    add = () =>{
        console.log(this.props);
    }

    showFormEdit = () =>{
        //console.log(this.state);
        if(this.props.trangthai ===true){
            return (
                <div className="col"><div className="card border-info mb-3">
                <div className="card-header text-center">Sua thong tin</div>
                <div className="card-body text-primary">
                    <form>
                        <div className="form-group">
                        <label>Ten</label>
                        <input defaultValue={this.props.edit.name} name = 'name' onChange={(event)=>this.isChange(event)} type="text" className="form-control" placeholder="Nhap ten" />
                        <label>Dia chi</label>
                        <input defaultValue={this.props.edit.diachi} name = 'diachi' onChange={(event)=>this.isChange(event)} type="text" className="form-control" placeholder="Nhap dia chi" />
                        <label>Chon quyen</label>
                        <div className="form-group">
                            <select defaultValue={this.props.edit.quyen} onChange={(event)=>this.isChange(event)} name ='quyen' className="form-control form-control-sm" onChange={(event)=>this.isChange(event)}>
                                <option  >Mac dinh</option>
                                <option value ={1}>Admin</option>
                                <option  value={2}>Custumer</option>
                                <option value={3}>Normar user</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.objEditdone(this.props.edit)} value=" Them moi"/>
                        </div>
                    </div>
                    </form>
                    
                </div>
            </div>
            </div>
            )
        }
    }

    render() {
        return ( <div>
                {this.showFormEdit()}
        </div>
            
        );
    }
}

export default EditForm;