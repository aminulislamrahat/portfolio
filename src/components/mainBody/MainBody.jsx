import React, { useEffect, useState } from 'react'

import { Bounce, ToastContainer, toast } from 'react-toastify';

import { AuctionTable } from '../auctionTable/AuctionTable';
import { FavouriteTable } from '../favouriteTable/FavouriteTable';
export const MainBody = () => {

    const notify = (message) => toast(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });



    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Failed to load bid items:", err));
    }, []);

    const handleLike = (item) => {
        if (!favorites.find((fav) => fav.id === item.id)) {
            setFavorites([...favorites, item]);

            notify(`🦄 Added "${item.title}" to favorites!`)
        }
    };

    const handleRemove = (itemId) => {
        const item = favorites.find((i) => i.id === itemId);
        setFavorites(favorites.filter((fav) => fav.id !== itemId));
        notify(`❌ Removed "${item?.title}" from favorites.`)
    };

    return (
        <div className='bg-[#EBF0F5] px-36 py-20 font-sora space-y-4'>
            <h1 className='text-3xl  font-semibold'>Active Auctions</h1>
            <p className='text-xl font-normal'>Discover and bid on extraordinary items</p>

            <div className='flex justify-between gap-4'>
                <div className=' w-3/4 bg-white rounded-3xl p-10'>
                    <AuctionTable
                        data={data}
                        handleLike={handleLike}
                        favorites={favorites}
                    /> </div>
                <div className='h-fit w-1/4 bg-white rounded-3xl p-10' >
                    <FavouriteTable
                        favItems={favorites}
                        handleRemove={handleRemove}
                    />
                </div>

            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

        </div>
    )
}
