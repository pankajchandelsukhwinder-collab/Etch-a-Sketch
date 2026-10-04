# Etch-a-Sketch

A browser-based Etch-a-Sketch project built with HTML, CSS, and JavaScript.

## Features

- Starts with a 16 × 16 grid.
- Grid squares are created dynamically using JavaScript.
- Uses Flexbox instead of CSS Grid.
- Hovering over squares creates a pixelated drawing effect.
- Each interaction generates a random RGB color.
- Each square progressively becomes more transparent by 10% per interaction.
- New Grid button allows a custom grid size from 1 × 1 to 100 × 100.
- The drawing area keeps the same overall size.
- Clear button resets the current grid.

## How to run

Open `index.html` in a web browser.

No build tools or dependencies are required.

## GitHub

Example commands:

```bash
git init
git add .
git commit -m "Create Etch-a-Sketch project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Odin Project requirements

This project intentionally uses Flexbox for the grid layout and does not use CSS Grid.
