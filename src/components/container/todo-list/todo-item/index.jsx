import React, { memo } from 'react'

import { ToDoItemWrapper } from './style';

export default memo(function ToDoItem(props) {

  const { task, index, isDone, delTask, DoneTask } = props;
  const isTextDecoration = isDone ? "line-through": "";
  return (
    <>
      <ToDoItemWrapper
      TDN={isTextDecoration}
      onClick={ e => DoneTask(index)}
      >
        <span>{index+1}. {task}</span>
        <button onClick={ e => delTask(e, index)}></button>
      </ToDoItemWrapper>
    </>
  )
})
