import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.list.map((item, index) => {
      return (
        <ListElement item={item} key={index} getStudents={props.getStudents}/>
      )
    })}
  </div>


export default List