
```shell
lerna init

# lerna.json
"npmClient": "yarn",
"useWorkspaces": true,

# package.json
"workspaces": ["packages/*"]

lerna create @hello/webpack

```
