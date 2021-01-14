import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({img, location, title, description, star, price, total}) {
    return (
        <div className="search_result">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="search_result_heart" />

            <div className="search_result_info">
                
                <div className="search_result_info_top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>

                <div className="search_result_info_bottom">
                    <div className="search_result_stars">
                        <StarIcon className="search_result_star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>

                    <div className="search_result_price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchResult;
