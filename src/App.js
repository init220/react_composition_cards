import './App.css';
import React from 'react';
import CardsList from "./components/CardsList";
import Card from "./components/Card";


function App() {
    const cards = [
        {
            title: 'Card title',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            title: 'Special title treatment',
            text: 'With supporting text below as a natural lead-in to additional content.'
        }
    ]
    return (
        <div className="App">
            <CardsList key={Math.random()}>
                <Card id={Math.random()}
                      image={'https://loremflickr.com/320/240'}
                      item={cards[0]}/>
                <Card id={Math.random()} item={cards[1]}/>
            </CardsList>
        </div>
    );
}

export default App;
