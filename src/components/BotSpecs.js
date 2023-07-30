// components/BotSpecs.js
import React from 'react'; // Import the React library to define React components

const BotSpecs = ({ bot, goBackToListView, enlistBot }) => {
  // Define a functional component called BotSpecs that receives three props: bot, goBackToListView, and enlistBot
  return (
    // Render the following JSX code when the BotSpecs component is used
    <div className="bot-specs">
      <h2>Bot Specs</h2>
      <div className="bot-card">
        {/* Display the bot's avatar */}
        <img src={bot.avatar_url} alt={bot.name} />

        {/* Display bot's name */}
        <h3>{bot.name}</h3>

        {/* Display bot's health */}
        <p>Health: {bot.health}</p>

        {/* Display bot's damage */}
        <p>Damage: {bot.damage}</p>

        {/* Display bot's armor */}
        <p>Armor: {bot.armor}</p>

        {/* Display bot's class */}
        <p>Class: {bot.bot_class}</p>

        {/* Display bot's catchphrase */}
        <p>Catchphrase: {bot.catchphrase}</p>

        {/* Button to go back to the list view */}
        <button onClick={goBackToListView}>Back to List</button>

        {/* Button to enlist the bot to your army */}
        <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
      </div>
    </div>
  );
};