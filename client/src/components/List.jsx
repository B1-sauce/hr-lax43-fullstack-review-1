import React from 'react';
import ListElement from './ListElement.jsx';

const List = ({ students }) => (
  <div>
    {students.map((student, index) => (
      <ListElement student={student} key={index} />
    ))}
  </div>
)

export default List