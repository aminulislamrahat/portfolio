import React from 'react'

function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center text-xl bg-white font-sora p-10 text-black ">
            <aside>
                <img
                    alt="Tailwind CSS Navbar component"
                    src="/assets/AuctionGallery.png"
                    className="cursor-pointer"
                />
                <p className="font-normal">
                    Bid.   Win.   Own.
                </p>

                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className='cursor-pointer hover:text-primary transition-colors duration-200'>
                            Home
                        </a>
                        <a className='cursor-pointer hover:text-primary transition-colors duration-200'>
                            Auctions
                        </a><a className='cursor-pointer hover:text-primary transition-colors duration-200'>
                            Categories
                        </a><a className='cursor-pointer hover:text-primary transition-colors duration-200'>
                            How to works
                        </a>
                    </div>
                </nav>
                <p> © {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
            </aside>

        </footer>
    )
}

export default Footer