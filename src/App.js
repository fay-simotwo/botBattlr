// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import BotSort from './components/BotSort';
import './App.css';

const App = () => {
  // State hooks to manage different aspects of the app
  const [bots, setBots] = useState([]); // State to store bot data fetched from the API
  const [enlistedBots, setEnlistedBots] = useState([]); // State to store enlisted bots in your army
  const [selectedBot, setSelectedBot] = useState(null); // State to keep track of the currently selected bot for BotSpecs view
  const [filterBy, setFilterBy] = useState(''); // State to store the selected filter class (e.g., tank, support, etc.)
  const [sortBy, setSortBy] = useState(''); // State to store the selected sort key (health, damage, armor)

   // Fetch bot data from the API using useEffect hook
   useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data)) // Store the fetched bot data in the 'bots' state
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);