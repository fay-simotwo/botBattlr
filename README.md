# Project Name
## Bot Battlr
This project is a React web application for managing and organizing a collection of bots. Users can enlist bots into their army, view bot specifications, release enlisted bots, and permanently discharge bots from the army. Additionally, users can sort and filter the bots based on their attributes such as health, damage, and armor.

# Author
## CHEPKOECH FAITH

## Key Features:
- BotCollection: Displays a grid of bot cards, each representing an available bot in the collection. Users can click on a bot card to view its specifications.

- YourBotArmy: Displays a grid of enlisted bot cards, each representing a bot that has been enlisted by the user. Users can release enlisted bots from their army or permanently discharge them.

- BotSpecs: Displays detailed specifications of a selected bot. Users can enlist the bot into their army from this view and also return to the list view.

- BotSort: Provides a sorting and filtering bar to sort the available bots by attributes like health, damage, and armor, and also filter them based on their class.

The application fetches bot data from an API endpoint (http://localhost:3000/bots) using the useEffect hook to populate the bots state. The useState hook is used to manage various state variables, such as bots, enlistedBots, selectedBot, filterBy, and sortBy.

Users can perform the following actions in the application:

- Enlist a bot into their army: Clicking on a bot card in the BotCollection view enlists the bot into the user's army. The bot is removed from the bots state and added to the enlistedBots state.

- Release a bot from the army: Clicking on a bot card in the YourBotArmy view releases the bot from the user's army. The bot is removed from the enlistedBots state and added back to the bots state.

- Permanently discharge a bot: Clicking on a button in the YourBotArmy view discharges a bot permanently from the user's army. The bot is removed from the enlistedBots state.

- Sort and Filter: Users can sort and filter the list of available bots in the BotCollection view based on attributes like health, damage, and armor. The sorted and filtered bots are displayed in real-time.

## Technologies Used
- React: The project is built using React, a popular JavaScript library for building user interfaces. React allows for the creation of reusable components and provides a structured way to manage the application's state and UI.

- JavaScript: The code is written in modern JavaScript, utilizing features such as arrow functions, destructuring, template literals, and the let and const keywords.

- HTML and CSS: HTML is used to structure the application's components and define the layout, while CSS is used for styling the user interface and creating a visually appealing design.

- React Hooks: The project utilizes React Hooks, specifically useState and useEffect, to manage state and side effects within functional components. Hooks allow developers to use state and other React features without writing class-based components.

- API Fetch: The fetch function is used to make HTTP requests to an API endpoint (http://localhost:3000/bots) to retrieve bot data. The fetched data is then processed and used to populate the bot collection and other components.
## Installation
```
1. Clone the repository:

   git clone git@github.com:fay-simotwo/botBattlr.git

2. Navigate to the project directory:
   cd bot-battlr

3. Install dependancies:
   npm install

4. Start the Development server:
   npm start

5. Build the production version:
   npm run build 

```

## Usage

- Viewing Bot Collection: When the application starts, it fetches data from an API endpoint (http://localhost:3000/bots) to retrieve a collection of available bots. These bots are displayed as cards in a grid layout, showing essential information about each bot, such as their name, image, health, damage, and armor.

- Sorting and Filtering: Users can sort the bots in the collection based on different attributes like health, damage, or armor. Additionally, they can filter the bots by their class, such as "Warrior," "Mage," or "Rogue." The sorting and filtering options help users find specific bots that meet their requirements.

- Enlisting Bots: Users can enlist bots from the collection into their army by clicking on the "Enlist" button on the bot card. Enlisting a bot moves it from the collection to the "Your Bot Army" section, where the enlisted bots are displayed.

- Releasing Bots: If a user wants to remove a bot from their army, they can click on the "Release" button on the enlisted bot card. Releasing a bot moves it back to the main bot collection.

- Discharging Bots Forever: In some cases, a user might want to permanently remove a bot from the application. The "Discharge" option allows users to delete a bot from their army entirely. Note that this operation only affects the enlisted bots within the application and does not perform any backend deletion.

- Viewing Bot Specifications: By clicking on a bot card in the main collection, users can view detailed specifications and information about the selected bot. The "BotSpecs" component displays the bot's image, name, health, damage, armor, and additional information.

- Handling Interactions: The application provides various interactive features, such as hover effects on bot cards and buttons, making the user interface more engaging and intuitive.

- Responsive Design: The application is designed with responsiveness in mind, ensuring that it works well on different screen sizes and devices.

## Usage scenarios
As a user, I can explore the available bots, sort them based on specific attributes, and filter them by class to find the bots that fit my requirements.
I can enlist bots that I like into my bot army, forming a personalized collection of bots for battle.
If I no longer need a bot in my army, I can release it, allowing me to enlist other bots in its place.
In certain cases, I might decide to discharge a bot permanently from my army to keep it lean and efficient.
By clicking on a bot card, I can view detailed specifications of the bot to help me make informed decisions.
The application provides a smooth and engaging user experience, making bot management enjoyable and straightforward.
Overall, the Bot Army Management application aims to provide users with an efficient and enjoyable way to manage their bot army, enabling them to make strategic decisions and optimize their collection for various purposes.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

#### You can reach me on :
- Email: chepfaith18@gmail.com
- Mattermost: @chepkoech.faith
- Linkedin: @faith-chepkoech

## License

This project is licensed under the [MIT License](LICENSE).

