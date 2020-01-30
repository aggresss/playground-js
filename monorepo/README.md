
```shell
lerna init
lerna bootstap
lerna clean

# lerna.json
# "npmClient": "yarn",
# "useWorkspaces": true,

# package.json
# "workspaces": ["packages/*"]

lerna create hello-webpack
lerna add webpack --dev --scope hello-webpack
lerna add webpack-cli --dev --scope hello-webpack
lerna add webpack-dev-server --dev --scope hello-webpack
npm run start:hello-webpack

yarn install # = lerna bootstrap --npm-client yarn --use-workspaces
yarn workspaces run clean


```
