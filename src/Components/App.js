import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddForm from './AddForm';
import DataUser from './data.json';
import EditForm from './EditForm';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai: true,
      data: DataUser,
      trangThaiChinhsua: false,
      searchText:'',
      userEditObject:{},
      trangthaisua: false
    }
  }
  
  thongbao = () =>{alert("done!");}
  reverse = () => {
    this.setState({trangThaiChinhsua : !this.state.trangThaiChinhsua
    }
      
    )
  }

  getText = (dl) =>{
    this.setState({
      searchText:dl
    })
  }

  getUserUpdate = (user) =>{
    // console.log(user);
    this.setState({
      userEditObject:user,
      trangThaiChinhsua : false,
      trangthaisua: true
    });
  }

  getDataNewUser = (name,diachi,quyen) =>{
      var item ={};
      item.id =uuidv1();
      item.name = name;
      item.diachi = diachi;
      item.quyen = quyen;

      var items = this.state.data;
      items.push(item);
      this.setState({
        data:items
      })
  }
  handleEditForm = (obj) =>{
    console.log(obj);
    
  }


  render() {

    const {data, searchText} = this.state;
    let ketqua;
    if(searchText !== ''){
      // data.forEach((item) => {
      //   if(item.name.indexOf(searchText)!=-1){
      //     ketqua.push(item);
      //   }
      // });
      ketqua = data.filter((item)=>item.name.indexOf(searchText) !== -1)
    } else{
      ketqua = data;
    }
    



    //console.log(this.state.data);
    //alert("hello "+ this.state.data[1].name);dfdgf
    return (
      <div >
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketnoi={()=>this.reverse()} 
              chacon={(dl)=>this.getText(dl)} />
              <Table edit={(user)=>this.getUserUpdate(user)} dulieu={ketqua}/>
              <AddForm add = {this.getDataNewUser}  trangThaiChinhsua={this.state.trangThaiChinhsua}/>
              <EditForm trangthai={this.state.trangthaisua} edit = {this.state.userEditObject} objEditdone={this.handleEditForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
