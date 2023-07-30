// components/YourBotArmy.js
import React from 'react'; // Import the React library to define React components

const YourBotArmy = ({ army, releaseBot, dischargeForever }) => {
    // Define a functional component called YourBotArmy that receives three props: army, releaseBot, and dischargeForever
    return (
      // Render the following JSX code when the YourBotArmy component is used
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
  
        {/* Use the map function to loop through the 'army' array and generate a bot card for each enlisted bot */}
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            {/* Display the enlisted bot's avatar */}
            <img src={bot.avatar_url} alt={bot.name} />
  
            {/* Display the enlisted bot's name */}
            <h3>{bot.name}</h3>
  
            {/* Display the enlisted bot's health */}
            <p>Health: {bot.health}</p>
  
            {/* Display the enlisted bot's damage */}
            <p>Damage: {bot.damage}</p>
  
            {/* Display the enlisted bot's armor */}
            <p>Armor: {bot.armor}</p>
  
            {/* Display the enlisted bot's class */}
            <p>Class: {bot.bot_class}</p>
  
            {/* Display the enlisted bot's catchphrase */}
            <p>Catchphrase: {bot.catchphrase}</p>
  
            {/* Button to release the bot from your army */}
            <button onClick={() => releaseBot(bot)}>Release Bot</button>
  
            {/* Button to discharge the bot from your army forever */}
            <button onClick={() => dischargeForever(bot)}>
              <span role="img" aria-label="discharge-icon">
                ❌
              </span>
              Discharge Forever
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default YourBotArmy; // Export the YourBotArmy component to be used in other parts of the application