
# Node Projects

So far we've been writing our labs in simple node scripts that we've been running with the `node` commmand. We've also been storing all our dependencies like `axios` globally. This works for our tiny scripts and maybe even small projects. 

**However this can get messy and hard to work with, especially when dealing with differing versions of `npm` packages.**

Fortunately, `npm` and `yarn` can manage our projects and dependencies for us.

---

### How to make an `npm` or `yarn` project

1. Create project directory with `mkdir $PROJECT_NAME` and `cd $PROJECT_NAME` into it.
2. Use `yarn init` or `npm init` to start a project, it will run you through a prompt to ask for more information.
3. Inspect the `package.json` file that was created, that's the meta information, scripts and dependencies for your project.

**That's it!** You can now install your dependencies locally by calling `npm install` or `yarn add`, this will create a `node_modules` folder which will contain all of your projects dependencies. *Remember to add `node_modules` to your `.gitignore` otherwise GitHub will not be happy.*

---

### How to get your package manager to run your project

*From here on out I will be focusing on `yarn`, but it's almost identical to `npm`!*

Inside your `package.json` file should be a value called `"scripts"`, these are shortcuts to command line statements you can call with `yarn`. 

**package.json**
```json
{
  ...
  "scripts": {
    "start": "node server.js",
    ...
  }
  ...
}
```

This will allow you to run your `server.js` file with the command:

```sh
yarn start
```

Any other commands you specify in your `"scripts"` (besides `test`) must be prefaced with `run`

For example:
```sh
yarn run <command>
```