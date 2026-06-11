import { Button } from "#components/ui/button"
import { NavLink } from "react-router"

function App() {
    return (
        <>
            <div className=' bg-gray-300 dark:bg-gray-700 dark:text-white p-10'>
                <h1 className="text-7xl pb-5">Welcome to my template!</h1>

                {/* https://reactrouter.com/start/declarative/navigating 
                    <Link> can't generate an active state, <NavLink> can
                */}
                <NavLink to="/about">
                    <Button variant={"default"} className="p-4 active:bg-blue-500">About</Button>
                </NavLink>
            </div>
        </>
    )
}

export default App
