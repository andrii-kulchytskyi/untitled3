import React from 'react';
import {FilterValues} from "./App";


export type PropsTodoList = {
    title: string
    tasks: Array<TaskType>
    removeTask: Function
    changeFilter: (value: FilterValues) => void

}
export type TaskType = {
    id: number
    isDone: boolean
    title: string

}

export const Todolist = (props: PropsTodoList) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <input/>
            <button>+</button>
            <ul>
                {props.tasks.map(el => <li>
                    <div><input type={"checkbox"}
                                checked={el.isDone}></input><span>{el.title}</span>
                        <button onClick={() => props.removeTask(el.id)}>x</button>
                    </div>

                </li>)}
            </ul>

            <div>
                <button onClick={() => props.changeFilter("all")}>All</button>
                <button onClick={() => props.changeFilter("active")}>Active</button>
                <button onClick={() => props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

