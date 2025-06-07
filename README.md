# Beer Run

This is a small Three.js browser game written in TypeScript. The project uses [Vite](https://vitejs.dev/) for development and building.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open <http://localhost:5173> in your browser to see the game.

## Building

To build a production version that can be hosted anywhere as static files:

```bash
npm run build
```

The output will be in the `dist/` folder. You can upload these files to any static host or share them directly.

## GitHub Pages

The project is preconfigured to deploy to GitHub Pages. A workflow at
`.github/workflows/gh-pages.yml` builds the site and publishes the `dist/` directory whenever changes
are pushed to the `main` branch. Simply enable GitHub Pages for the repository and choose the
**GitHub Actions** source. The deployed site will be available at
`https://<user>.github.io/beer-run/`.
