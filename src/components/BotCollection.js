// components/BotCollection.js
import React from 'react'; // Import the React library to define React components
import BotCard from './BotCard'; // Import the BotCard component to display individual bot cards

const BotCollection = ({ bots, showBotSpecs, enlistBot }) => {
  // Define a functional component called BotCollection that receives three props: bots, showBotSpecs, and enlistBot
  return (
    // Render the following JSX code when the BotCollection component is used
    <div className="bot-collection">
      {/* Use the map function to loop through the 'bots' array and generate a BotCard component for each bot */}
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} showBotSpecs={showBotSpecs} enlistBot={enlistBot} />
      ))}
    </div>
  );
};

export default BotCollection; // Export the BotCollection component to be used in other parts of the application
