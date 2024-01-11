import { useState } from 'react'
import { TodoListType, TodoType, EditingType, editTodoIndexType } from './types'

export const useTodoHandlers = () => {
    const [todos, setTodos] = useState([] as TodoListType)
    const [newTodo, setNewTodo] = useState('' as TodoType)
    const [editing, setEditing] = useState(false as EditingType)
    const [editTodo, setEditTodo] = useState('' as TodoType)
    const [editIndex, setEditIndex] = useState(null as editTodoIndexType)

    const handleAddTodo = () => {
        if (newTodo !== '') {
            setTodos([...todos, newTodo])
            setNewTodo('')
        }
    }

    const handleDeleteTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const handleEditTodo = (index: number) => {
        setEditing(true) // sets to editing mode
        setEditIndex(index) // Sets the index of the todo to be edited
        setEditTodo(todos[index]) // holds the new text of the todo
    }

    const handleUpdateTodo = () => {
        if (editTodo !== '' && editIndex !== null) {
            const newTodos = [...todos]
            newTodos[editIndex] = editTodo // puts the chosen todo via index in the editTodo state
            setTodos(newTodos) // sets the new todo list
            setEditing(false) // sets editing mode to false
            setEditIndex(0) // sets the edit index to null so it can be used again
            setEditTodo('') // sets the edit todo to empty string so it can be used again
        }
    }

    return {
        todos,
        newTodo,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        setNewTodo,
        handleUpdateTodo,
        editing,
        editTodo,
        editIndex,
        setEditTodo,
    }
}
