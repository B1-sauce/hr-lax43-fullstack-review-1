import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map((student, index) => {
      return (
        <ListElement student={student} key={index}/>
      )
    })}


  </div>


export default List