# Theory Assignment- Episode 2

> **What is `NPM`?**

```
NPM is a repository of all the packages that can be used in the JS language.
All the packages that one wants to be installed/use can be installed from this registry.
It works as a package manager for Node.js, a javascript runtime.
```

> **What is 'Parcel/Webpack? Why do we need it?** 

```
Parcel/Webpack are types of bundler. A bundler is a development tool that helps combine all the html,css,js files and converts them into a single production-ready loadable file in the browser.

We need it because it helps us improve our development experience and helps build scalable architecture while also providing other benefits like tree shaking, code splitting, better error handling, etc.
```

> **What is `.parcel-cache`?**

```
.parcel-cache is a directory created by parcel for storing our build files. So, when the first time we generate a build, parcel creates this directory using a caching mechanism to store cached data. This helps speed up the subsequent builds, as it already analyzes the project dependencies and optimizations, etc. This way, for any change post a build, Parcel can quickly retrieve the cached data and only process the modified parts, saving time and resources.
```

> **What is npx?**

```
npx stands for node package execute. It is simply an NPM package runner which helps us execute the JS package that we want to execute without installing it.
```

> **What is the difference between `dependencies` and `devDependencies`?**

```
- Dependencies are libraries/packages that we require for production ready environment and functioning of the project effectively
- devDependencies are packages that we need only for our project development purpose.
```

> **What is Tree shaking?**

```
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination.
This is important for preparing code that is production ready, for example with clean structures and minimal file size.
```

> **What is Hot Module Replacement?**

```
Hot module replacement exchanges allows all kinds of modules to be updated at runtime without the need for a full refresh.
This in parcel is done by a file watching algorithm- written in C++.
It helps us save development time by only updating what's changed.
Internal Working of HMR -> 
- The application asks the HMR runtime to check for updates.
- Runtime asynchronously downloads the updates and notifies the application
- Application then asks the runtime to apply the updates
- Runtime synchronously applies the updates.
```

> **List down your favourite 5 superpowers of Parcel and describe any 3 of them?**

```
Super powers of parcel:- 
1. Differential Bundling - support of Older versions of browsers, so parcel handles that, so that the app runs smoothly in older browsers.
2. Dev Build- It creates a dev build and hosts it for us to see our React UI working locally in the development setup.
3. Error Handling- It gives us the exact source of where the error occurs in our code.
4. Image Optimization
5. HMR- Hot Module Replacement, so we don't have to restart the entire app on every change.
```

> **What is `.gitignore`? What should we add and not add into it?**

```
Gitignore is a special file that helps us ignore files in the project which should not be pushed to git.
These are generally files that can be regenerated like node_modules which should be ignored and not pushed into git.
While anything that cannot be regenerated and is important for the project to function effectively should never be added to the gitignore file.
```

> **What is the difference between package.json and package-lock.json?**

```
- `package.json`` is a metadata file that describes the project's dependencies, scripts, configuration, and other details.
`package-lock.json` is a lockfile that provides an exact, deterministic list of all the installed packages and their dependencies including their exact version numbers.

- `package.json` lists the required dependencies and their version ranges, but not the exact versions to be installed.
`package-lock.json` is used to ensure that the same dependencies are installed consistently across different environments and prevent conflicts due to different versions being installed
```

> **Why should I not modify package-lock.json?**

```
We should not modify the package-lock.json because it will change the dependency graph/tree for the packages installed and it might break your application as it contains the exact versions. So, in order to keep the app stable and be functional for all the developers it is necessary to not update the package-lock.json. 
```

> **What is node_modules? Is it a good idea to push that on git?**

```
`node_modules` is a directory generated containing all the dependencies of the project and also contains the transitive dependencies that is the dependencies of the packages you install(dependency of dependencies).

It is not a good idea to push that on git as 
1. it is huge in size.
2. It can be regenerated with the `package.json` file present by just running `npm install`
```

> **What is the dist folder?**

```
dist is an automatically generated folder which comes into our app when we build something using parcel build command. It includes our HTML, CSS, JS files but all are named `index` and also contains .map files which is a source map file which tells the browser how to locate the original code from the bundled code
```

> **What is browserslist?**

```
browserslist is a npm package that helps you set browser compatibility config. By using this, we can make sure that our app is compatible in our specified versions of the browsers so that we can get maximum user coverage for our application.
```