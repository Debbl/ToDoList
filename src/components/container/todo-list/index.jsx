import React, { memo, useState } from 'react'
import uuid from 'react-uuid';
import lodash from 'lodash';

import { ToDoListWrapper } from './style';

import ToDoItem from './todo-item'

export default memo(function ToDoList() {

  const [toDoList, setToDoList] = useState([{id: "123", isDone: false, task: "任务一"}, {id: "124", isDone: false, task: "任务二"}, {id: "125", isDone: false, task: "任务三"}]);

  const [inputTask, setInputTask] = useState("");

  // 删除任务
  function delTask(e, index) {
    e.stopPropagation();
    console.log(index);
    setToDoList(toDoList.filter((_,indey) => index !== indey));
  }

  // 完成任务，加删除线
  function DoneTask(index) {
    const newToDoList = lodash.cloneDeep(toDoList);
    newToDoList[index].isDone = !newToDoList[index].isDone;
    setToDoList(newToDoList);
    console.log(newToDoList);
  }

  // 添加任务
  function addTask(e) {
    if(inputTask === "") {
      alert("输入任务不能为空！！！");
    } else {
      if(e.keyCode === 13) {
        setToDoList(toDoList => [...toDoList, {id: uuid(), isDone: false, task: inputTask}]);
        setInputTask("");
      }
    }
  }

  return (
    <ToDoListWrapper>
      <input
      placeholder="请输入任务"
      value={inputTask}
      onKeyUp={e => addTask(e)}
      onChange={e => setInputTask(e.target.value)}
      >
      </input>

      <ul>
        {
          toDoList.map((item, index) => (
            <ToDoItem
            key={item.id}
            task={item.task}
            isDone={item.isDone}
            index={index}
            delTask={delTask}
            DoneTask={DoneTask}
            />
          ))
        }
      </ul>
    </ToDoListWrapper>
  )
})
