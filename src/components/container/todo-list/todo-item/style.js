import styled from 'styled-components';

export const ToDoItemWrapper = styled.li`
  display: block;
  width: 300px;
  padding: 10px 10px;
  padding-right: 0;
  border-bottom: 1px solid black;
  cursor: pointer;
  text-decoration:${(props => props.TDN)};
  button {
    display: none;
    position: absolute;
    border-style: none;
    outline: 0;
    border: 0;
    right: 0;
    :hover {
      color: black;
    }
    ::after {
      content: "x";
    }
  }
  :hover button {
    display: inline;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
    color: #ff3333;
    border-radius: 4px;
  }

`