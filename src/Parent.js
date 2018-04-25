import React, { Component } from 'react'

//Component
import PopupDataChanges from './PopupDataChanges'

class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopupDataChanges: false
    }
  }
  
  onChangeData() => {
    // ...
    this.setState({ isPopupDataChanges: true })
  }
  
  handleClose__PopupDataChanges = () => {
    this.setState({ isPopupDataChanges: false })
  }
  
  render() {
    return (
      <div>
        <PopupDataChanges
          isActive={this.state.isPopupDataChanges}
          // typeDataChanges='edit'
          // color="red"
          // backgroundColor="blue"
          // textPopup="Данные измен."
          // closingTime='1300'
          handleClosePopup={this.handleClose__PopupDataChanges} />
      </div>
    )
  }
}



export default Parent;
