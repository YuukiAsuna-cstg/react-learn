import React from 'react';

const Student = (props) => {
    return (
        <li>
            【姓名】{props.name}
            【email】{props.email}
            【性别】{props.sex === 1 ? '男' : '女'}
            【出生年份】{props.birth}
        </li>
    );
};

export default Student;