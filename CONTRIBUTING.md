# Contributing to boleto-br
First off, thanks for taking the time to contribute!

Now, take a moment to be sure your contributions make sense to everyone else.
These are just guidelines, not rules.
Use your best judgment, and feel free to propose changes to this document in a pull request.

## Reporting Issues
Found a problem? Want a new feature? First of all see if your issue or idea has [already been reported](https://github.com/boleto-br/boleto-br/issues).
If don't, just open a [new clear and descriptive issue](https://github.com/boleto-br/boleto-br/issues/new).

## Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.

- Fork it!
- Clone your fork: `git clone https://github.com/<your-username>/boleto-br`
- Navigate to the newly cloned directory: `cd boleto-br`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Install the tools necessary for development: `npm install`
- Make your changes.
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes.

## Keeping your fork up to date

After you had make a fork you will want to keep your fork up to date with the changes that may happen in this repository (upstream).

- Configure the remote for your fork: `git remote add upstream https://github.com/boleto-br/boleto-br.git`
- Fetch the branches and their respective commits from the upstream repository: `git fetch upstream`
- Check out your fork's local master branch: `git checkout master`
- Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes: `git merge upstream/master`

## Testing
Every time you write a test, remember to answer all the questions:

1. What are you testing?
2. What should it do?
3. What is the actual output?
4. What is the expected output?
5. How can the test be reproduced?

## Code Style
Follow the [xo](https://github.com/sindresorhus/xo) style.
Using two spaces for identation and no [semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding).

## Static type system

Use [flow](https://flow.org/) to check the types of your code.
JavaScript is not a statically typed language but using [flow](https://flow.org/) is this project helps a lot the validate the user input.
To accomplish that runtime checking of types is used [flow-runtime](https://codemix.github.io/flow-runtime/#/) to transform the [flow](https://flow.org/) markup in valid JavaScript type checking.

## Commit Message Emoji

Every commit is important.
So let's celebrate each and every commit with a corresponding emoji! :smile:

### Which Emoji to Use? :confused:

Commit Type | Emoji
----------  | -------------
Initial Commit | :tada: `:tada:`
Improve the format/structure of the code | :art: `:art:`
Improving performance | :racehorse: `:racehorse:`
Writing docs | :memo: `:memo:`
Fix a bug | :bug: `:bug:`
Remove code or files | :fire: `:fire:`
Fix CI build | :green_heart: `:green_heart:`
Deal with security | :lock: `:lock:`
Upgrade dependencies | :arrow_up: `:arrow_up:`
Downgrading dependencies | :arrow_down: `:arrow_down:`
Add tests | :umbrella: `:umbrella:`
Improving accessibility | :wheelchair: `:wheelchair:`
Add new features | :sparkles: `:sparkles:`
Refactoring | :package: `:package:`
Other | [Be creative](http://www.emoji-cheat-sheet.com/)

## Scripts
The follow scripts are available when you develop.

- `npm test` - Run the tests.
- `npm run test:watch` - Run the tests on the watch mode.
- `npm run coverage` - See the code coverage of the tests.
- `npm run build` - Build the package.
