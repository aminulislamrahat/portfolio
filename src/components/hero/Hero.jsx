import React from 'react'
import profile from '../../assets/AuctionGallery.png'

function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center" id="hero">
            <img src={profile} alt="profile" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h1 className="text-4xl font-bold">Hi, I'm John Doe</h1>
            <p className="text-lg text-gray-600 mt-2">Full Stack Developer</p>
            <a href="/resume.pdf" download>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download Resume</button>
            </a>
        </section>
    )
}

export default Hero
