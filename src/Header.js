import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_icon" 
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/11/simplify-2.jpg?auto=format&q=60&fit=max&w=930"
                    alt=""
                />
             </Link>

             <div className="header_center">
                 <input type="text"></input>
                 <SearchIcon />
             </div>

             <div className="header_right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />  
                <Avatar />
             </div>
            
        </div>
    )
}

export default Header;
