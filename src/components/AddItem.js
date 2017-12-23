import React, { Component } from 'react';
import './App.css';

class AddItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <h4>Add Item</h4>
            <form className="form-horizontal">

                <div className="forum-group">
                    <label className="col-sm-2 control-label">Title</label>
                    <div className="col-sm-10">
                        <input name="todoTitle"
                               type="text"
                               className="form=control"
                               id="inputTodoTitle"
                               placeholder="Title">
                        </input>       

                     </div>   
                
                </div>  


            </form>

        </div> 
        
      </div>
    );
  }
}

export default AddItem;
