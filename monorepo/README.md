
```shell
lerna init
lerna bootstrap

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

```
