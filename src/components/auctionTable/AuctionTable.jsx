import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { FaBan } from "react-icons/fa";

export const AuctionTable = ({ data, handleLike, favorites }) => {





    return (
        <div className="overflow-x-auto font-sora">
            <table className="table">
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        const isFavorite = favorites.some(fav => fav.id === item.id);


                        return (
                            <tr key={item.id}>
                                <td>
                                    <div className="flex items-start gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded-lg h-20 w-20">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                        <div className="mt-3 font-normal">{item.title}</div>
                                    </div>
                                </td>
                                <td>${item.currentBidPrice}</td>
                                <td>{item.timeLeft} left</td>
                                <td>
                                    <div className="relative inline-block px-4">
                                        <button
                                            onClick={() => handleLike(item)}

                                            disabled={isFavorite}
                                            className={`text-2xl transition-all duration-300 ${isFavorite ? "text-red-600 cursor-not-allowed" : "text-black cursor-pointer"
                                                }`}


                                        >
                                            <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
                                        </button>


                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
