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

   // Function to enlist a bot to your army
   const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]); // Add the selected bot to the 'enlistedBots' state array
    setBots(bots.filter((b) => b.id !== bot.id)); // Remove the enlisted bot from the 'bots' state array
  };

    // Function to discharge a bot forever
    const dischargeForever = (bot) => {
      // Delete the bot on the backend here if needed
      // For simplicity, we are just filtering it out from the 'enlistedBots' array
      setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
    };

      // Function to handle bot selection and show the BotSpecs component
  const handleBotSelection = (bot) => {
    setSelectedBot(bot); // Set the 'selectedBot' state to the bot that was selected
  };

    // Function to go back to the list view (BotCollection)
    const handleGoBackToListView = () => {
      setSelectedBot(null); // Set the 'selectedBot' state to null to return to the list view
    };

    // Function to handle sorting
  const handleSortChange = (value) => {
    setSortBy(value); // Set the 'sortBy' state to the selected sorting key (health, damage, armor)
  };

   // Function to handle filtering by class
   const handleFilterChange = (value) => {
    setFilterBy(value); // Set the 'filterBy' state to the selected filter class (e.g., tank, support, etc.)
  };


  // Filter the bots based on selected classes and sort key
  const filteredAndSortedBots = bots
    .filter((bot) => (filterBy ? bot.bot_class === filterBy : true)) // Filter bots based on the selected class or show all if no filter is selected
    .sort((a, b) => {
      if (sortBy === 'health') {
        return b.health - a.health; // Sort bots by health in descending order
      } else if (sortBy === 'damage') {
        return b.damage - a.damage; // Sort bots by damage in descending order
      } else if (sortBy === 'armor') {
        return b.armor - a.armor; // Sort bots by armor in descending order
      }
      return 0;
    });

  // Render the BotCollection, BotSpecs, or YourBotArmy based on selectedBot state
  if (selectedBot) {
    return (
      // Render the BotSpecs component with the selected bot details
      <BotSpecs
        bot={selectedBot}
        goBackToListView={handleGoBackToListView} // Pass the function to go back to the list view
        enlistBot={enlistBot} // Pass the function to enlist a bot to your army
      />
    );
  }
