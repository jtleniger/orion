# Orion (orion)

An astrophotography capture tool for Sony cameras.

## Install the dependencies
```bash
yarn
```

## If there is an error about Sharp (Module did not self-register):
See [this](https://sharp.pixelplumbing.com/install#electron) article on installing Sharp with Electron.
```bash
npx electron-rebuild -v 8.0.0
```


### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
