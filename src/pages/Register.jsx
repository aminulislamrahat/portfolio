import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router'
import { auth } from '../firebase/Firebase.init';

export const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential?.user;
                if (user) {
                    updateProfile(user, {
                        displayName: name
                    }).then(() => {
                        console.log("name added")
                    }).catch((error) => {
                        console.log("update error", error)
                    });
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 mx-auto bg-[#e4dfcd69] mt-20">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Register Now</h1>
                <p className="text-sm dark:text-gray-600">Register to create a new account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to={'/login'} className="hover:underline dark:text-violet-600">Login</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}
