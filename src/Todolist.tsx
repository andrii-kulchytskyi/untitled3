import React, {ChangeEvent, ChangeEventHandler, KeyboardEventHandler, useState} from 'react';
import {FilterValues} from "./App";


export type PropsTodoList = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValues) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}
export type TaskType = {
    id: string
    isDone: boolean
    title: string
}

export const Todolist = (props: PropsTodoList) => {

    let [title, setTitle] = useState("")

    const addTaskHandler = () => {
        if (title.trim() === "") {
            return;
        }
        props.addTask(title);
        setTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickAllFiltersHandler = () => props.changeFilter("all")
    const onClickActiveFiltersHandler = () => props.changeFilter("active")
    const onClickCompletedFiltersHandler = () => props.changeFilter("completed")

    return (

        <div>
            <h3>{props.title}</h3>
            <input onChange={onChangeHandler}
                   value={title}
            />
            <button onClick={addTaskHandler}>+
            </button>
            <ul>
                {
                    props.tasks.map(
                        el => {

                            const onClickButtonRemove = () => props.removeTask(el.id)

                            const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(el.id, e.currentTarget.checked)
                            }
                            return (
                                <li>
                                    <div><input type={"checkbox"}
                                                checked={el.isDone}
                                                onChange={changeTaskStatus}></input><span>{el.title}</span>
                                        <button onClick={onClickButtonRemove}>x</button>
                                    </div>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={onClickAllFiltersHandler}>All</button>
                <button onClick={onClickActiveFiltersHandler}>Active</button>
                <button onClick={onClickCompletedFiltersHandler}>Completed</button>
            </div>
        </div>
    );
};

