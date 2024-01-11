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
        setEditing(true)
        setEditIndex(index)
        setEditTodo(todos[index])
    }

    const handleUpdateTodo = () => {
        if (editTodo !== '' && editIndex !== null) {
            const newTodos = [...todos]
            newTodos[editIndex] = editTodo
            setTodos(newTodos)
            setEditing(false)
            setEditIndex(0)
            setEditTodo('')
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
