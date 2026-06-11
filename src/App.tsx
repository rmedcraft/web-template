import { Button } from "#components/ui/button"

function App() {
    return (
        <>
            <div className=' bg-gray-300 dark:bg-gray-700 dark:text-white p-10'>
                <h1 className="text-7xl pb-5">Welcome to my template!</h1>
                <Button variant={"default"} className="p-4">This is a button</Button>
            </div>
        </>
    )
}

export default App
