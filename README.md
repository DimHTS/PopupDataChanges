# PopupDataChanges
React component: PopupDataChanges

Обязательные значения:
```
  <PopupDataChanges
    isActive={this.state.isPopupDataChanges}
    handleClosePopup={this.handleClose__PopupDataChanges} />
```

Дополнительные значения:
```
  <PopupDataChanges
    isActive={this.state.isPopupDataChanges}
    typeDataChanges='edit'
    color="red"
    backgroundColor="blue"
    textPopup="Данные измен."
    closingTime='300'
    handleClosePopup={this.handleClose__PopupDataChanges} />
```


Рекомендации:

для корректной работы компонента(а именно повторного отрытия попапа), изменение состояния в родительском компоненте должно происходить асинхронно:

пример заглушки:
```
  setTimeout(() => {
    this.handleClose__PopupDataChanges()
    this.setState({ isPopupDataChanges_edit: true })
  })
```

