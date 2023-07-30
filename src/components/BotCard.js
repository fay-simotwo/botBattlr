// components/BotCard.js
import React from 'react'; // Import the React library to define React components

const BotCard = ({ bot, showBotSpecs, enlistBot }) => {
  // Define a functional component called BotCard that receives three props: bot, showBotSpecs, and enlistBot
  return (
    // Render the following JSX code when the BotCard component is used
    <div className="bot-card">
      {/* Display the bot's avatar */}
      <img src={bot.avatar_url} alt={bot.name} />

      {/* Display the bot's name */}
      <h3>{bot.name}</h3>

      {/* Display the bot's health */}
      <p>Health: {bot.health}</p>

      {/* Display the bot's damage */}
      <p>Damage: {bot.damage}</p>

      {/* Display the bot's armor */}
      <p>Armor: {bot.armor}</p>

      {/* Display the bot's class */}
      <p>Class: {bot.bot_class}</p>

      {/* Button to view details of the bot */}
      <button onClick={() => showBotSpecs(bot)}>View Details</button>

      {/* Button to enlist the bot to your army */}
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotCard; // Export the BotCard component to be used in other parts of the application
