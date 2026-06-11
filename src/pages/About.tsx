import { Button } from "#components/ui/button";
import { NavLink } from "react-router";

export default function About() {
    return (
        <>
            <div>
                <div className=' bg-gray-300 dark:bg-gray-700 dark:text-white p-10'>
                    <h1 className="text-7xl pb-5">Welcome to my about page!</h1>
                    <NavLink to="/">
                        <Button variant={"default"} className="p-4 active:bg-blue-500">Home</Button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}