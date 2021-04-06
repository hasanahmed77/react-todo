import React, { useState } from 'react'
import { Checkbox } from 'antd';
import { DeleteTwoTone, CheckCircleTwoTone }  from '@ant-design/icons';
import { List, Typography, Divider } from 'antd';

function TodoList({ filteredTodos, todo, setTodo }) {

    const handleDelete = item => {
        setTodo(todo.filter(el => el !== item));
        console.log(item);
    }

    const completeHandler = item => {
        item.completed = !item.completed;
        console.log(item);
    }

    return (
        <div>
            {/* <ul className="todo-list">
                <Checkbox >Item 1</Checkbox> <DeleteTwoTone />
            </ul> */}
            <List
            size="large"
            dataSource={filteredTodos}
            renderItem={item =>
             <List.Item>{item.text}
             <CheckCircleTwoTone onClick={ () => completeHandler(item)} />
             <DeleteTwoTone onClick={ () => handleDelete(item)} /> {/*<-- delete button */}
             </List.Item>}
            />
        </div>

    )
}

export default TodoList;
