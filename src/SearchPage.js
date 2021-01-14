import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="search_page">
            <div className="search_page_info">
                <p>7 stays &bull; 15 October - 20 October &bull; 2 Guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult
            img="https://coolstays.imgix.net/32103.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="Qube Hotel"
            description="2 Guest &bull; 1 Bedroom &bull; 1 Bed &bull; 1 Bath &bull; Wifi &bull; Kitchen &bull; Free Parking &bull; Washing Machine"
            star={4.75}
            price="&pound;58/night"
            total="&pound;290" />

            <SearchResult
            img="https://coolstays.imgix.net/17488.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="Arnold's Residence"
            description="2 Guest &bull; 1 Bedroom &bull; 1 Bed &bull; 1 Bath &bull; Wifi &bull; Kitchen &bull; Free Parking &bull; Pets Allowed"
            star={4.5}
            price="&pound;200/night"
            total="&pound;1000" />

            <SearchResult
            img="https://coolstays.imgix.net/111804.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="The Good Hotel"
            description="2 Guest &bull; 1 Bedroom &bull; 1 Bed &bull; Common Bath &bull; Wifi &bull; Kitchen &bull; Free Parking"
            star={4.6}
            price="&pound;59/night"
            total="&pound;295" />

            <SearchResult
            img="https://coolstays.imgix.net/48427.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="Hotel Boundryless"
            description="2 Guest &bull; 1 Bedroom &bull; 2 Bed &bull; 1 Bath &bull; Wifi &bull; Kitchen &bull; Smoking Allowed &bull; Washing Machine"
            star={4.79}
            price="&pound;175/night"
            total="&pound;875" />

            <SearchResult
            img="https://coolstays.imgix.net/18547.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="Hotel Haxton"
            description="2 Guest &bull; 1 Bedroom &bull; 1 Bed &bull; 1 Bath &bull; Wifi &bull; Kitchen &bull; Breakfast Included"
            star={4.65}
            price="&pound;119/night"
            total="&pound;595" />

            <SearchResult
            img="https://coolstays.imgix.net/17880.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="The Boutique"
            description="2 Guest &bull; 1 Bedroom &bull; 1 Bed &bull; 1 Bath &bull; Wifi &bull; Kitchen &bull; Free Parking &bull; taxi Service"
            star={4.75}
            price="&pound;150/night"
            total="&pound;600" />

            <SearchResult
            img="https://coolstays.imgix.net/108580.jpg?&h=700&fit=crop&auto=compress"
            location="UK / England / London"
            title="Oxo Hotel"
            description="4 Guest &bull; 2 Bedroom &bull; 2 Bed &bull; 2 Bath &bull; Wifi &bull; Kitchen &bull; Free Parking &bull; Washing Machine"
            star={4.75}
            price="&pound;325/night"
            total="&pound;1625" />
            
        </div>
    )
}

export default SearchPage;
