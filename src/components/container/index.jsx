import React, { memo } from 'react';

import { ContainerWrapper } from './style';

import ToDoList from './todo-list';

export default memo(function Container() {
  return (
    <ContainerWrapper>
      <div className="todoList">ToDoList</div>
      <ToDoList></ToDoList>
    </ContainerWrapper>
  )
})
