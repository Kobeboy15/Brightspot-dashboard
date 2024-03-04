![N|Solid](https://github.com/Kobeboy15/Brightspot-dashboard/assets/23691843/77cd517c-b49a-41a7-af2f-7aa372137e6d)
# React Personal Dashboard
Build a personal dashboard application using React.js that displays a user's personal
information, a to-do list, and the current weather in their city. This project aims to assess
my proficiency in React fundamentals, state management, and interaction with external
APIs.

Feel free to clone or fork it for your own personal use.

You can access it here as well:
https://brightspot-dashboard.vercel.app/

## Installation
| Tools | Version |
| ------ | ------ |
| npm | 9.6.3 |
| node | 19.9.0 |
| React | 18.2.0 |
Install the dependencies and start the server.
```sh
cd Brightspot-dashboard
npm install
npm start
```
For running tests...

```sh
npm run test
```

### Design decisions and Structure
For the assignment, I was tasked with creating a personal dashboard. This dashboard is meant to display key information or summaries in one spot. The main aim was to enhance what the user would interact with most. That's why I chose to highlight the ToDo list as a significant part of the dashboard. I opted for a smaller, side panel layout for the user profile and weather sections because they mainly show information and require minimal interaction.

On mobile screens, the To-Do list is shown above the weather because it's more important for users to interact with. You might wonder why I didn't put the user profile under the To-Do list. Functionally, it could work, but it's not what most users expect. We usually read from left to right and from top to bottom. This is how many people, especially in the West, process information. So, putting the user profile at the top left makes sense because it's the first thing you see, followed by the To-Do list to its right.

The aim for mobile was to make sure you can see the To-Do list right away, without needing to scroll or having it hidden by the user profile.

I explored a variety of designs and themes, drawing inspiration from different sources and adding my personal touch to suit our project's needs. My goal was to create something both enjoyable and useful for anyone to use.

### Checklist:
- Set up with Create React App
- Desktop & Mobile Responsive
- User Profile displays Name, Email, and a Profile picture
- User infomation is passed down as prop, but information is static.
- To-Do List Features (Add, Edit, Mark as Complete, and Delete)
- List of Tasks is handled by state and context API
- Each task has a checkbox and delete button
- Form to add new items to task list
- Weather component asks user to allow geolocation data in order to display current user's location weather data
- Uses OpenWeather API
- Requires user to allow location in order to input
- Styling was handled with Styled-Components
- Research and optimized design to be clean and user-friendly, as well as responsive.
- Implemented Context API for Task List
- Incorporated unit tests with the React Testing Library for each of the core components
- Incoprated a basic route, with an Index page, Dashboard page, and a simple 404 page



