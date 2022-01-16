# Morionlabs subject
✨ 웹 페이지에서 보기 : 


### 1. Settings
1. install

```json
yarn create react-app my-app --template typescript
```

2. `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es2016",
    "jsx": "react-jsx",
    "noImplicitAny": true,
    "module": "esnext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"]
}
```

3. `.eslintrc.json`

```jsx
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    //"prettier/@typescript-eslint" 
//prettier/@typescript-eslint has been removed in eslint-config-prettier v8.0.0.
  ]
}
```

4. `.vscode/setting.json`

```jsx
{
  "eslint.validate": [
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ],
  "javascript.format.enable": false,
  "typescript.format.enable": false
}
```

5. `.gitignore`

```jsx
.eslintcache
.vscode
.eslintrc
.prettierrc
```

6. Others install

```jsx
yarn add react-router-dom @types/react-router-dom  //router
yarn add styled-components @types/styled-components //style components
yarn add styled-reset // reset style install
```
<br />

### 2. Directory Structure


### 3. Features
- User Report Chart 

#### 3-1. Chart
#### 3-2. InfiniteScroll

### 4. Build

