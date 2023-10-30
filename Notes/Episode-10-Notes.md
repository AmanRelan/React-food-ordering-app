# Episode 10:- Jo Dikhta hai vo Bikta hai!

#### Highlights

- Apply Styles to APP
- Cover ways how we can apply styles
- Pick a CSS Framework to style our app

#### First way

- Index.css and add styles
- Add classes into JSX & add styles based on the class name in index.css

#### Second Way

- Use Scss & Sass
- Sass is like writing css with superpower
- Not Recommended way as they do not scale well.

#### Recommended Way(Styled Components)

- Write css within JS Components
- Read more at styled-components.com

#### Fourth Way -> Other Libraries- You get pre built components, just import it in the app & use

> Material UI(Very Popular)
> Bootstrap
> Chakra UI
> Ant Design

#### In our app, we will use Tailwind CSS.

- Trending today
- Tailwind - Install tailwind using `npm install -D tailwindcss postcss `
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

#### Tailwind CSS

- Tailwind offers you a className for every css that you would want to write in your app.
- Make div flex -> Just add `flex` inside className
- Class to increase/decrease the width `w-8`, etc
- Add Space between div, use- `justify-between`.
- To add padding/margin, use - `p-4/ m-4`
- To get css/tailwind suggestions, use VSCode Extension called `Tailwind css Intellisense`
- To put in shadow, use intellisense.
- If you do not have the class for your specific use case, instead of writing `w-48`, you can make it specific by writing it like `w-[200px]`

##### PROS & CONS

- Not moving between files.
- Lightweight.
- Initial Learning Curve.
- When you have to apply a lot of css, we have to write classes for each and every thing, it makes code look ugly.
