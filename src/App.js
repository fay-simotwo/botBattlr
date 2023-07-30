import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import BotSort from './components/BotSort';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Fetch bot data from the API
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  // Function to enlist a bot to your army
  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
    setBots(bots.filter((b) => b.id !== bot.id));
  };

  // Function to release a bot from your army
  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
    setBots([...bots, bot]);
  };

  // Function to discharge a bot forever
  const dischargeForever = (bot) => {
    // Delete the bot on the backend here if needed
    // For simplicity, we are just filtering it out from the enlistedBots array
    setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
  };

  // Function to handle bot selection and show the BotSpecs component
  const handleBotSelection = (bot) => {
    setSelectedBot(bot);
  };

  // Function to go back to the list view (BotCollection)
  const handleGoBackToListView = () => {
    setSelectedBot(null);
  };

  // Function to handle sorting
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  // Function to handle filtering by class
  const handleFilterChange = (value) => {
    setFilterBy(value);
  };

  // Filter the bots based on selected classes and sort key
  const filteredAndSortedBots = bots
    .filter((bot) => (filterBy ? bot.bot_class === filterBy : true))
    .sort((a, b) => {
      if (sortBy === 'health') {
        return b.health - a.health;
      } else if (sortBy === 'damage') {
        return b.damage - a.damage;
      } else if (sortBy === 'armor') {
        return b.armor - a.armor;
      }
      return 0;
    });

  // Render the BotCollection, BotSpecs, or YourBotArmy based on selectedBot state
  if (selectedBot) {
    return (
      <BotSpecs
        bot={selectedBot}
        goBackToListView={handleGoBackToListView}
        enlistBot={enlistBot}
      />
    );
  }

  return (
    <div className="container">
      <h1>Bot Army</h1>
      <BotSort
        filterBy={filterBy}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <YourBotArmy
        army={enlistedBots}
        releaseBot={releaseBot} // Pass the releaseBot function as a prop
        dischargeForever={dischargeForever}
      />
      <BotCollection
        bots={filteredAndSortedBots}
        showBotSpecs={handleBotSelection}
        enlistBot={enlistBot}
      />
    </div>
  );
};

export default App;
