import React, {ChangeEvent, ChangeEventHandler, KeyboardEventHandler, useState} from 'react';
import {FilterValues} from "./App";


export type PropsTodoList = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValues) => void
    addTask: (title: string) => void
}
export type TaskType = {
    id: string
    isDone: boolean
    title: string
}

export const Todolist = (props: PropsTodoList) => {

    let [newTaskTitle, setNewTaskTitle] = useState("")

    const addTaskHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onClickAllFiltersHandler = () => props.changeFilter("all")
    const onClickActiveFiltersHandler = () => props.changeFilter("active")
    const onClickCompletedFiltersHandler = () => props.changeFilter("completed")


    return (
        <div>
            <h3>{props.title}</h3>
            <input onChange={onChangeHandler}
                   value={newTaskTitle}
            />
            <button onClick={addTaskHandler}>+
            </button>
            <ul>
                {props.tasks.map(el => <li>
                    <div><input type={"checkbox"}
                                checked={el.isDone}></input><span>{el.title}</span>
                        <button onClick={() => props.removeTask(el.id)}>x</button>
                    </div>
                </li>)}
            </ul>
            <div>
                <button onClick={onClickAllFiltersHandler}>All</button>
                <button onClick={onClickActiveFiltersHandler}>Active</button>
                <button onClick={onClickCompletedFiltersHandler}>Completed</button>
            </div>
        </div>
    );
};

