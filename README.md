# Personal Portfolio In Svelte 5

![Portfolio Screenshot](/public/Screenshot.png)

A more advanced personal portfolio website created using Svelte 5, UnoCSS, lenis, and a collection of other technologies. This website showcases my skills and education.

## Published from Google's Project IDX

## Deployments
Vercel - [abhijeetdhikale007.vercel.app](https://abhijeetdhikale007.vercel.app)

## Features

-   **Home**: A home page.
-   **Skills**: Listed my skills and expertise.
-   **Education**: My education.
-   **Projects**: My projects.
-   **Resume**: Provided my resume.

## Technologies Used

-   [React](https://reactjs.dev) - The main library
-   [UnoCSS](https://unocss.dev/) - Atomic CSS Engine
-   [Three.js](https://threejs.org) - For 3D Objects
-   [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
-   [Matter JS](https://brm.io/matter-js) - Background Particles
-   [Gsap](https://gsap.com) - Background images changing effect on scrolling
-   [Lenis](https://lenis.darkroom.engineering) - Smooth Scrolling
-   [SCSS](https://sass-lang.com) - CSS

## Getting started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/AbhijeetDhikale007/Porfolio
```

2. NPM Install

```bash
npm i
```

3. To run the development server:

```bash
npm run dev
```

Open your web browser and visit http://localhost:3000 to see the website in action during development.

## Author

-   [@AbhijeetDhikale007](https://github.com/AbhijeetDhikale007)

# Published From Google's Project IDX

# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
