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

The `vite.config.ts` file is configured with a `base` path so the built files work when served from
`https://<user>.github.io/beer-run/`. After building, you can publish the contents of the `dist/`
directory to the `gh-pages` branch of your repository or use GitHub Actions to automate the deploy.
