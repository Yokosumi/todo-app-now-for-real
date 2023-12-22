function App() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className="p-4 bg-white rounded shadow-md w-64">
                    <h1 className="text-2xl font-bold mb-4">Todo List</h1>
                    <input
                        className="border p-2 w-full"
                        type="text"
                        placeholder="Add todo"
                    />
                    <div className="mt-4">
                        <h2 className="font-bold mb-2">Todos:</h2>
                        <ul>
                            <li className="border p-2 mb-2">Todo 1</li>
                            <li className="border p-2 mb-2">Todo 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
