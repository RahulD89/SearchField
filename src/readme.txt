SearchField React Component
The SearchField React component is a reusable component that allows users to search for public repositories on GitHub. It fetches repository data from the GitHub API based on the user's search query and displays the results in a grid of repository cards.

Features
Search input: Users can enter a search query to search for repositories on GitHub.
Sort field: Users can select a sorting option to sort the search results based on stars, watchers count, score, name, created_at, or updated_at.
Repository cards: The component displays the repository information in individual cards, including the avatar image, repository name, number of stars, description, and programming language.
Usage
To use the SearchField component in your React application, follow these steps:

Install the required dependencies by running npm install or yarn install.

Import the SearchField component in your application file:

jsx
Copy code
import React from 'react';
import SearchField from './SearchField';

function App() {
  return (
    <div>
      <SearchField />
    </div>
  );
}

export default App;
Create a CSS file (e.g., SearchField.css) and apply the desired styles to customize the appearance of the search field and repository cards. You can use the provided CSS or create your own styles.

Run your React application and navigate to the page where you've rendered the SearchField component. You should see the search field, sort options, and repository cards displayed.

Customization
You can customize the styling of the SearchField component by modifying the CSS file (SearchField.css). Feel free to adjust the styles according to your design preferences and requirements.

Dependencies
The SearchField component requires the following dependencies:

React: The JavaScript library for building user interfaces.
CSS styles: The provided CSS file (SearchField.css) contains the styles for the component.
Credits
This component was developed by Rahul Dasari and is released under the MIT License.