import React, { Component } from 'react'

//Component
import PopupDataChanges from './PopupDataChanges'

class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopupDataChanges_edit: false,
      isPopupDataChanges_delete: false
    }
  }
  
  onChangeData_edit() => {
    // ...
    this.handleClose__PopupDataChanges()
    this.setState({ isPopupDataChanges_edit: true })
  }
  
  onChangeData_delete() => {
    // ...
    this.handleClose__PopupDataChanges()
    this.setState({ isPopupDataChanges_delete: true })
  }
  
  handleClose__PopupDataChanges = () => {
    this.setState({ 
      isPopupDataChanges_edit: false,
      isPopupDataChanges_delete: false,
    })
  }
  
  render() {
    return (
      <div>
        <PopupDataChanges
          isActive={this.state.isPopupDataChanges_edit}
          typeDataChanges='edit'
          handleClosePopup={this.handleClose__PopupDataChanges} />
          
        <PopupDataChanges
          isActive={this.state.isPopupDataChanges_delete}
          typeDataChanges='delete'
          handleClosePopup={this.handleClose__PopupDataChanges} />
      </div>
    )
  }
}


export default Parent;
