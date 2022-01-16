# Morionlabs subject
✨ **웹 페이지에서 보기** : https://motionlabs-subject.netlify.app/
✨ 
![motionlabs](https://user-images.githubusercontent.com/88074487/149668589-8f98bb5a-5bca-488a-aa4c-20257ade02dc.gif)


## 1. Settings
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

## 2. Directory Structure
.<br />
├── build <br />
│   ├── data <br />
│   └── static <br />
├── public <br />
│   └── data <br />
└── src <br />
    ├── assets <br />
    ├── components <br />
    ├── pages <br />
    └── styles <br />

## 3. Features
- User Report Chart 
- PassengerList InfiniteScroll

### 3-1. Common
- Select Types using Interface & Generic
- Create common style attributes using GlabalStyle, Themeprovieder이용하여 공통 스타일 속성 생성
- Using Navigation Common Component

### 3-2. Chart
- Data Fetching with **Axios**
- 📎 Line Chart
  - Calculate slope using **Math.tan, Math.cos**
  - props로 전달받은 속성들을 calc()을 사용해서 position 위치, width값을 계산
  - Calculate position & width using **calc** & attributes transferred to the **props**.
- 📎 Bar Chart
  - apply()를 활용하여 배열의 최대값을 구함
  - 각 배열의 요소를 최대값으로 나눠 비율 계산
  - 전체 높이 * 비율로 각 막대그래프 도식화

### 3-3. InfiniteScroll
- 

## 4. Build
```jsx
yarn build
```
❇️ netlify continuous deployment

