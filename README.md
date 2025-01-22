# Pokémon React App

This is a React application that fetches data from the [PokéAPI](https://pokeapi.co/api/v2/pokemon) to display Pokémon information in a card layout. It also includes a search functionality to filter Pokémon by their names.

## Features

- **Fetch and Display Pokémon:** Dynamically fetch Pokémon data from the PokéAPI and display them in a grid of cards.
- **Search Functionality:** Users can search for Pokémon by name using the search bar.
- **Responsive Design:** The app is fully responsive and works well on various devices.
- **Clean Code Structure:** Organized code with reusable components and proper comments.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd pokemon-react-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000/`.

## Usage

- **View Pokémon Cards:** Open the app to see Pokémon displayed in card format with their name, image, and other basic details.
- **Search Pokémon:** Use the search bar to filter Pokémon by their name. The list updates dynamically as you type.

## Technologies Used

- **React:** For building the user interface.
- **Axios:** For making API requests to fetch Pokémon data.
- **CSS:** For styling the app.
- **PokéAPI:** The public API used to fetch Pokémon data.

## File Structure

```
project-directory/
├── public/
├── src/
│   ├── components/
│   │   ├── PokemonCard.js      # Card component for individual Pokémon
│   │   ├── SearchBar.js        # Search bar component
│   ├── App.js                  # Root component
│   ├── index.js                # Entry point for React
│   ├── styles/
│   │   ├── App.css             # Global styles
├── README.md                   # Documentation file
├── package.json
```

## API Reference

The application uses the **PokéAPI** to fetch data. Here are the key endpoints:

- **Get all Pokémon:**
  ```
  GET https://pokeapi.co/api/v2/pokemon?limit=100
  ```

- **Get Pokémon details by name or ID:**
  ```
  GET https://pokeapi.co/api/v2/pokemon/{id or name}
  ```

## Future Enhancements

- Add pagination to display more Pokémon.
- Include more details in the Pokémon cards, such as type, abilities, and stats.
- Implement a filter by type or ability.
- Add loading and error handling states.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature description here'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.


### Author

Developed by Chirag Tyagi. Feel free to reach out for feedback or questions!
