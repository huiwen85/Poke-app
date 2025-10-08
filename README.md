# Poke-app

Este proyecto usa Storybook para documentar los componentes UI.

🌐 **Documentación de componentes (Storybook):** [Ver Storybook](https://huiwen85.github.io/Poke-app/)

Mi aplicación de Pokémon está desplegada en Vercel: [pokeapp-henna](https://pokeapp-henna.vercel.app)

# Quickstart

npm install

```bash
# On repository directory
# install npm
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Run cypress tests

npx cypress open --project ./test/

# Run storybook

npm run --prefix packages/ui-library storybook

### ⚡ Build and Publish the Library

Run the following command from the root of the project:

```bash
npm run --prefix packages/ui-library publish:lib
```
