# reactjs-scaffolding
Kickstarter project for ReactJS applications.




### Summary
1. Overview
2. Installation
3. Folder structure
4. Project commands
5. How to contribute 




### 1. Overview
---
This project could be used as a default scaffolding for React projects. It has some good practices for creating projects, such as eslint and precommit validation. For example, you won't be to perform a "git commit" if there is an error syntax in your code.


### 2. Installation
---
Just run this command:
```
    $ git clone https://github.com/whiteprompt/reactjs-scaffolding.git && cd reactjs-scaffolding && rm -rf .git && npm install && cd ..
```

### 3. Folder structure
---
```
.
├── examples/
│   └── todo-app/
├── src/
│   └── assets/
│   └── components/
│   └── redux/
│   └── App.jsx
├── .babelrc
├── .eslintrc
├── .gitignore
├── .index.html
├── package.json
├── README.md
├── webpack.config.babel.js
```




### 4. Project commands
---

Running application (**Default port: 8080**)
```
    $ npm start
```
Build for production (it will create a *dist* folder with bundled assets)
```   
    $ npm build
```




### 5. How to contribute
---

Contributions are welcome, so if you would like to contribute to the project, please submit a pull request in order to pass through a code review. 
