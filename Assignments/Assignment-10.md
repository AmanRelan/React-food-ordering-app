# Theory Assignment- Episode 10

> **How do we configure tailwind?**

```
- Install tailwind using `npm install -D tailwindcss postcss `
- Post installation Run- `npx tailwindcss init`
- `postcss` is a tool for transforming CSS with JS
- `npx tailwindcss init` => Executing Tailwind css which initialises the tailwind css into our repository
- The last command created a new file for us which is `tailwind.config.js`.
- After this, we will create a configuration file for `postcss` -> `.postcssrc`
- We do this to tell `postcss` that we are using tailwind here
- Parcel, in the background, use `.postcssrc` to understand tailwindcss.
- `content: ["./src/**/*.{html,js,ts,jsx,tsx}"]` -> this configuration takes a list of all the places where we can use tailwindcss.
- Tailwind according to the above configuration can be used in any js/html/ts/jsx/tsx file under src directory.
- We have to write a few directive, which are kind of importing, tailwind css into our files
```

> **In tailwind.config.js, what does all the key mean(content, theme, extend,plugins)?**

```
content - The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

theme - The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.

plugins- The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

Example of Plugins-
plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
],

presets - The presets section allows you to specify your own custom base configuration instead of using Tailwind’s default base configuration.

prefix - The prefix option allows you to add a custom prefix to all of Tailwind’s generated utility classes. This can be really useful when layering Tailwind on top of existing CSS where there might be naming conflicts.

corePlugins - The corePlugins section lets you completely disable classes that Tailwind would normally generate by default if you don’t need them for your project.
```

> **Why do we have .postcssrc file?**

```
PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
Using a .postcssrc file helps you configure PostCSS and integrate Tailwind CSS seamlessly with Parcel, allowing you to build and bundle your web applications effectively.
```
