# React Bug Hunt

## Getting Started
Steps to launch project:
1. Run `npm install`
2. Run `npm run build`
3. Run `npm start`

## Bugs
### Index.jsx
- [ ] All components used in file need to be imported
- [ ] Components needs to be wrapped accordingly (`< />`)
- [ ] DOM elements need to exist in `index.html` before `bundle.js` or related code is loaded

### App.jsx
- [ ] To reference files, need to preface path with `./` for current directory or `../` for previou directory
- [ ] Callbacks need to be bound to component
- [ ] Fetch data needs to be parsed correctly
- [ ] Cannot set state directly, use setState

### ToDoList.jsx
- [ ] To update subcomponents with data from props, don't use a stateful component
- [ ] Include a `key` prop to remove warning (and speed up React)

### ToDoListItem.jsx
- [ ] Using `{}` requires a return statement
- [ ] Reference prop arguments by prefacing with `props.`
