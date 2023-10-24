DePHY.io
====

### Requirements

- [NodeJS >= 18](https://nodejs.org/en/download/package-manager)

### Prepare

- Clone the repo
- `npm i`

### Development

- Run `npm run docs:dev` to start preview server
  - Open http://localhost:5173/
- Articles are under `docs`
  - Homepage `docs/index.md`
- Edit `docs/.vitepress/config.mjs` for changing sidebar and navigation
- Refresh the page to see update

### Build

- `npm run docs:build`
  - `npm run docs:preview` to see the result

### License

MIT.
