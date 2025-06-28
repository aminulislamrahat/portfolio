import { Link } from "react-router";


export default function Navbar() {
    return (

        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold">MyPortfolio</h1>
                <div className="space-x-6">
                    {['about', 'skills', 'education', 'projects', 'contact'].map((item, idx) => (
                        <Link key={idx} to={item} duration={500} className="cursor-pointer hover:text-blue-500 capitalize">
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>


    )
}
