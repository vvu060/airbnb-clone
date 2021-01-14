import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home_section">
                <Card
                    src="https://coolstays.imgix.net/88790.jpg?&h=700&fit=crop&auto=compress"
                    title="Experiences"
                    description="Unique activities we can do together, led by a world of hosts."/> 
                <Card 
                    src="https://coolstays.imgix.net/119071.jpg?&h=700&fit=crop&auto=compress"
                    title="Unique Stays"
                    description="Spaces that are morethan just a place to sleep."/>
                <Card 
                    src="https://coolstays.imgix.net/94141.jpg?&h=700&fit=crop&auto=compress"
                    title="Entire Villas"
                    description="Comfortable private places, with rooms for friends and family."/>
                
            </div>

            <div className="home_section">
                <Card
                    src="https://coolstays.imgix.net/110856.jpg?&h=700&fit=crop&auto=compress"
                    title="Higher Wiscombe"
                    price="£550/Week"
                    description="A collection of award-winning cottages just a few miles from the Jurassic coast, with a heated outdoor pool and stunning country views…."/> 
                <Card 
                    src="https://coolstays.imgix.net/97766.jpg?&h=700&fit=crop&auto=compress"
                    title="Looking Glass Cottage"
                    price="£890-1185/Week"
                    description="Once in a lifetime Alice-in-Wonderland themed 16th Century cottage in Brighton, seconds from the beach."/>
                <Card 
                    src="https://coolstays.imgix.net/89632.jpg?&h=700&fit=crop&auto=compress"
                    title="SeaSpray"
                    price="£555-1325/Week"
                    description= "Cosy seaside cottage, just a stone’s throw from the beautiful Eype beach on the Dorset coast, perfect for a family getaway."/>
            </div>
            
        </div>
    )
}

export default Home;
