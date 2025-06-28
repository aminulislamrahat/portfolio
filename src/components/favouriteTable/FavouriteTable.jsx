import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export const FavouriteTable = ({ favItems = [], handleRemove }) => {
    const total = favItems.reduce((acc, item) => acc + item.currentBidPrice, 0);

    return (
        <div className="overflow-x-auto font-sora">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={3}>
                            <div className="flex items-center gap-2 text-3xl font-normal justify-center text-black">
                                <FontAwesomeIcon icon={regularHeart} />
                                Favorite Items
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {favItems.length === 0 ? (
                        <tr>
                            <td colSpan={3}>
                                <div className='text-center py-4 space-y-2'>
                                    <div className='text-2xl font-normal'>No favorites yet</div>
                                    <div className='text-base'>Click the heart icon on any item to add it to your favorites</div>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        favItems.map((item) => (
                            <tr key={item.id}>
                                <td colSpan={3}>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded-lg h-20 w-20">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-normal">{item.title}</div>
                                            <div className="font-normal space-x-3">
                                                <span>${item.currentBidPrice}</span>
                                                <span>Bids: {item.bidsCount}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="btn btn-outline btn-sm text-black border-none"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2}>Total bids Amount</th>
                        <th>${total}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
