import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './index.css'


class PopupDataChanges extends Component {
  constructor(props) {
    super(props)

    this.optionsComponent();
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      const that = this;
      setTimeout(() => {
        that.props.handleClosePopup(); // сигнализируем родителю о том что компонент закрылся
      }, this.closingTime);
    }
  }

  handleClosePopup = () => {
    this.props.handleClosePopup();
  }

  optionsComponent = () => {
    // this.props.typeDataChanges = 'add', 'edit', 'delete'
    // в зависимости от типа меняем цвета и текст

    this.closingTime = 2000;
    this.textPopup = 'Данные изменены';
    this.additionalStyle = {
      color: 'black',
      backgroundColor: 'palegoldenrod'
    }

    if (this.props.typeDataChanges === 'add') {
      this.textPopup = 'Запись добавлена!'
      this.additionalStyle = {
        color: 'black',
        backgroundColor: 'palegreen'
      }
    } else if (this.props.typeDataChanges === 'edit') {
      this.textPopup = 'Изменения сохранены!'
      this.additionalStyle = {
        color: 'black',
        backgroundColor: 'skyblue'
      }
    } else if (this.props.typeDataChanges === 'delete') {
      this.textPopup = 'Запись удалена!'
      this.additionalStyle = {
        color: 'rgb(238, 255, 0)',
        backgroundColor: 'rgb(238, 77, 77)'
      }
    }

    // если (текст || цвет || фон) задан в компоненте тогда отображаем его
    Boolean(this.props.textPopup) && (this.formText = this.props.textPopup)
    Boolean(this.props.color) && (this.additionalStyle.color = this.props.color)
    Boolean(this.props.backgroundColor) && (this.additionalStyle.backgroundColor = this.props.backgroundColor)

    // время закрытия окна
    Boolean(this.props.closingTime) && (this.closingTime = this.props.closingTime)
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="animationPopupDataChanges"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300} >

        {this.props.isActive ?
          <div className="popupAdd" style={this.additionalStyle} >
            <span onClick={this.handleClosePopup} className="closePopupAdd" />
            {this.textPopup}
          </div>
          :
          null
        }

      </ReactCSSTransitionGroup>
    )
  }
}



export default PopupDataChanges
