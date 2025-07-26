# Tic Tac Toe game

## Table of Contents

-   [Project Description](#project-description)
-   [Key Features](#key-features)
-   [Game Logic](#game-logic)
-   [Styling](#styling)
-   [Resources Used](#resources-used)
-   [To-Do and Ideas for Future](#to-do-and-ideas-for-future)
-   [Рublished Website](#published-website)

## Project Description

A fully functional, interactive Tic Tac Toe web game built using HTML5, CSS3, and JavaScript (ES6). The game allows two players to enter their names, take turns, and play on a classic 3x3 grid with a visually appealing interface.

## Key Features

-   **Modular JavaScript Architecture**
    Uses Immediately Invoked Function Expressions (IIFEs) to separate concerns into gameBoard, gameController, and displayController modules.

-   **Factory Functions**
    Implements a Player factory function to generate reusable player objects with encapsulated behavior.

-   **Semantic and Accessible HTML5 Markup**
    Uses semantic HTML elements such as `<main>`, `<header>`, `<label>`, and `<input>` for proper document structure and accessibility.

-   **Responsive and Centered Layout**
    Layout uses modern CSS3 techniques like Flexbox and CSS Grid to ensure elements are centered and adapt to different screen sizes.

-   **Custom Styling with CSS3**
    Employs CSS variables, Google Fonts (Reggae One), and modern styling practices for a clean and customizable UI.

-   **SVG Icon Integration**
    A scalable SVG logo is used in the header for sharp, resolution-independent graphics.

-   **Dynamic Board Rendering**
    The game board is rendered dynamically in the DOM based on the current game state and updated after each turn.

-   **Hover Effects for Better UX**
    Interactive hover styling helps guide the player’s attention and improves usability.

-   **Player Symbol Styling**
    The symbols X and O are styled with different colors for easy differentiation, without affecting the background of the cells.

-   **Game Flow Management**
    Includes full game logic:
-   -   Validates player moves
-   -   Checks for winning combinations
-   -   Detects draw scenarios
-   -   Displays a message for the current turn, win, or draw
-   -   Resets the game state when restarting

-   **Input validation**
-   -   The input values for both players are validated using JavaScript before starting the game.
-   -   The `.trim()` method is used to remove leading and trailing whitespace from user input.
-   -   If the input is empty after trimming, a default name ("X" or "O") is assigned automatically.
-   -   HTML attributes `minlength` and `maxlength` ensure that player names contain between 1 and 10 characters.

-   **Start and Restart Functionality**
    Players can input names and start a new game or reset the current game at any time with responsive buttons.

## Game Logic

-   The game board is internally represented as a 1D array of 9 elements.
-   Each click on a cell updates the board if the cell is empty and the game is not over.
-   After every move, the system checks for a win or draw.
-   Players switch turns after each valid move.

## Styling

-   The project uses a cohesive color palette defined as CSS variables (located in `variables` folder).
-   `reset.css` ensures consistent styling across browsers, and `general.css` provides layout and component styling.

## Resources Used

-   The font from the free Google Fonts library [Google Fonts - Reggae One](https://fonts.google.com/specimen/Reggae+One?query=Reggae+One) has been imported to give the game a more playful and modern look.
-   A custom SVG icon (`tac_tic_toe_icon.svg`) from free package [Geek icon pack](https://www.iconfinder.com/iconsets/geek-4) by [Alpár-Etele Méder](https://www.iconfinder.com/pocike) on [Iconfinder](https://www.iconfinder.com/) is used as a scalable, resolution-independent logo for the game.
-   A CSS reset file is used to normalize default browser styles and ensure consistent layout across different browsers.

## To-Do and Ideas for Future

1. Add an opponent mode with computer or artificial intelligence.
2. Improve accessibility by using keyboard navigation.
3. Add animations of a winning combination or a draw.
4. Add sound effects.

## Published Website

https://codersimone.github.io/tic-tac-toe-game/
