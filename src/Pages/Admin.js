import React, { Component } from 'react'
import '../Assets/Styles/Admin.css'
import axios from 'axios';
class Crud extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          id:'',
          title:"",
          image:"",
          action:"ADD ITEM",
          detail:"",
          items:[]
          
      };
      this.changeTitle = this.changeTitle.bind(this);
      this.changeImage = this.changeImage.bind(this);
      this.changeDetail = this.changeDetail.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
     
    }
    componentDidMount() {  
      axios.get(`https://628d8c71a339dfef879c3fac.mockapi.io/News`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
    }
    changeTitle = (e)=>{
        this.setState({
            title:e.target.value
        })
    }
    changeImage = (e)=>{
        this.setState({
          image:e.target.value
        })
    }
    changeDetail = (e)=>{
        this.setState({
            detail:e.target.value
        })
    }
   
    addItem =()=>{
        if(this.state.title !== '' && this.state.image!=='' && this.state.detail!==''){
          axios({
            method:'POST',
            url :`https://628d8c71a339dfef879c3fac.mockapi.io/News`,
            data: {
                title: this.state.title,
                image: this.state.image,
                detail: this.state.detail,

            }
    
          }).then(res => {
            this.componentDidMount();
            this.setState ({
                title:"",
                image:"",
                detail:""
            })
          })
        }
    }
    
    Edit = (item,index)=>{
      this.setState({
        action:'UPDATE ITEM',
        title:item.title,
        image:item.image,
        detail:item.detail,
        index:index,
        id: item.id
      });
    }
    updateItem = ()=>{
        axios({
        method:'PUT',
        url :`https://628d8c71a339dfef879c3fac.mockapi.io/News/${this.state.id}`,
        data: {
            title: this.state.title,
            image: this.state.image,
            detail: this.state.detail,
        }

      }).then(res => {
        this.componentDidMount();
      })
      this.setState({
        title:"",
        image:"",
        detail:"",
         action:'ADD_ITEM'
      })
      
    }
   
    deleteItem=(item)=>{
      axios
      .delete(`https://628d8c71a339dfef879c3fac.mockapi.io/News/${item}`)
      .then((res) => {
        this.componentDidMount();
       
      });
    }
    render(){
      return (
        <div className="container">
            <div className="row">
              <div className="col-md-4">
                  <h1>{this.state.action}</h1>
                  <div className="form-group">
                      <label>Title</label>
                      <input type="text" name="" className="form-control" onChange={this.changeTitle} value={this.state.title}/>
                  </div>
                  <div className="form-group">
                      <label>Image</label>
                      <input type="text" name=""  className="form-control" onChange={this.changeImage} value={this.state.image}/>
                  </div>
                  <div className="form-group">
                      <label>Detail</label>
                      <input type="text" name=""  className="form-control" onChange={this.changeDetail} value={this.state.detail}/>
                  </div>
                  <div className="form-group">      
                     <button type="button" className="btn btn-primary"  onClick={this.state.action=='ADD ITEM'?this.addItem:this.updateItem}>Add</button>
                  </div>
              </div>
               
              <div className="col-md-8">
                  <h1>List Products</h1>
                  <table className="table">
                     <thead>
                        <tr>
                             <th>STT</th>
                             <th>Title</th>
                             <th>Image</th>
                             <th>Detale</th>
                             <th>Edit</th>
                             <th>Remove</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                          this.state.items.map((item,index)=>(
                            <tr key={index}>
                                <td>{index +1 }</td>
                                <td>{item.title}</td>
                                <td><img src={item.image} alt="!!!!!" /></td>
                                <td>{item.detail}</td>
                                <td><label className="badge badge-warning" onClick={()=>this.Edit(item,index)}>Edit</label></td>
                                <td><label className="badge badge-danger" onClick={()=>this.deleteItem(item.id)}>Remove</label></td>
                            </tr>
                          ))
                        }
                     </tbody>
                  </table>
              </div>
            </div>
        </div>
      );
    }
  }
export default Crud;  