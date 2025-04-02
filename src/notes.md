# React

### Reminder

- **Js functions** :
  - function declarations : function sayHello() {..} Can be called before their definition due to hoisting(js moves function declarations to the top of the script before execution.)
  - Function Expressions : const sayHello = function() {...} Useful for passing functions as arguments or assigning them dynamically.
  - Arrow Functions : const sayHello = () => {..}`Do not have their own this (useful to avoid context errors) and ideal for callbacks and methods inside objects.`
  - Immediately Invoked Function Expressions (IIFE) : (function() {
    console.log("IIFE executed!");
    })(); `Executed immediately after being defined Useful for avoiding variable pollution in the global scope` Can also be written using arrow functions: (() => console.log("IIFE with arrow function"))();
  - Higher-Order Functions (Functions that take or return functions) : Can accept other functions as arguments Can return functions function applyOperation(a, b, operation) {
    return operation(a, b);
    }
- **==** Compares values but allows type coercion (automatic type conversion).
- **===** Compares both value and type. No type conversion → Values must be exactly the same.
- **bind(this)** : in case of using other functions then arrow fcts and u need to save the context of the components cux fct use in the constructor bind() like after initiating the state .. this.handChange = this.handChange.bind(this)

- **Computed Property Syntax** : using [] to access a key value instead of hardcoding it

```JS
const key = "name";

const obj = {
  key: "Alice", // This creates { key: "Alice" }, NOT { name: "Alice" }
  [key]: "Alice", // Uses the value of `key` as the property name
};
console.log(obj); // { name: "Alice" } Correct!
```

> npm create react-app UserMngmt
> cd my-app
> npm i
> npm start
> npm run build : to compile ur project before merging

- **component**: is a piece of the UI (user interface) that has its own logic and appearance.
  bref : React components are JavaScript functions that return markup:
  to use create react app u install react dom and react-scripts

- **react-scripts** : est un package utilisé pour gérer la configuration
  et les scripts nécessaires pour le développement, le test et le build
  d'une application React sans avoir à configurer manuellement Webpack,
  Babel, ESLint, etc. offre des cmds cmme npm start

u can define a component using a class and override render()

class Welcome extends React.Component {
render() {
return <h1>Hello, {this.props.name}</h1>;
}
}

- **re-render** : in React it happens when a component's state updates or it receives new props
  it happens in a top-down propagation way meaning from parent to child, Optimizing with React.memo, useCallback, and useMemo helps prevent unnecessary renders.

- **states** : are read only means immutable for multiple fields objects use

```javascript
function handlChange(e) {
  setObject({
    //set a new object to the state
    ...object, //create a new array with objects fields, (...) is named spreed
    [e.target.name]: e.target.value, // add the new value as objects name
  });
}
```

- **Arrays** : like objects updating arrays in states means treating them as immutable
  create new one or make a copy of the oldest and make a copy to an existing one
  no push() or pop() just filter() and map() or slice()

```javascript
const updateItem = (id) => {
  setItems(
    items.map(
      (
        item // map creates a new array
      ) => (item.id === id ? { ...item, value: Math.random() } : item)
    )
  );
};
```

using push or pop won t trigger a rerender means react wont detect any changes or updates

to access the first , second... elem in an array "array =[1,2,3,5]" using a spreed
console.log({[fisrt, second , ...array]}) => ["first" : 1,"second":2, 3,4,5]

- **Tests** : for unit tests or integration tests, ui or end to end tests
  use Jest > npm i Jest

### ADD

- **Distraction** : to access an elem of an object using

```Js
const objt ={
        user:{
            name:"egg",
            rating:{
                id:1,
                description:"smth"
            }
        }
}
const {user : {rating :{description :desc}} }=objt;
```

- each components has a key in its context when deleting or adding u should manage it match the items id

- **HOC** hight order component, prend en param des components et retur des components  
  utiliser pour se centraliser la logic partager par plusieurs component

```JS
import React, { Component } from "react";

// Composant de base qui affiche des props
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h2>{this.props.description}</h2>
    );
  }
}

// Higher-Order Component (HOC) pour ajouter une prop `title`
const withTitle = (WrappedComponent) => {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} title="Hello World" store="store" />;
    }
  };
};

// Appliquer le HOC à App
const WrappedApp = withTitle(App);

// Exporter le composant enveloppé
export default WrappedApp;
```

### Redux

- **Redux** : is a state management library
  npm install redux react-redux
- **core principals** :
  Single Source of Truth 🏛
  The entire application state is stored in a single JavaScript object (store).
  State is Read-Only 🔒
  The only way to change the state is by dispatching an action.
  Changes are Made with Pure Functions ⚡
  Reducers (pure functions) handle state changes based on actions.

- **key concepts** :
  1- **Store** : Holds the entire application state, Created using createStore(reducer) (now replaced by configureStore from Redux Toolkit).

```Js
import { createStore } from 'redux';
const store = createStore(reducer);
```

2- **Action** : Plain JavaScript objects that describe what should happen.
Must have a type property.
action = (args) => ({type, payload}) // les {} pour dire qu on return un object pas pour executer du js
const increment = { type: 'INCREMENT' };
3- **Reducers**: Pure functions that update state based on the action type.

```JS
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};
```

4- Dispatch
sends an action to the store store.dispatch({ type: 'INCREMENT' });

5- Selectors
Functions to get specific data from the store. const count = store.getState();

6- Provider
to wrape the whole app for using the store

```JS
// No need to spread state (...state) → setState
//[this.props.etat] → Uses computed property syntax to set a dynamic state key.

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);  //connect est un HOK de redux  pour ajouter la logic du redux au components todolist
//connect adds defined attributs and fcts in mapStateToProps, mapDispatchProps to the component as props

//window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE() : midlware pour synchoroniser les modifs de store avec  redux devtools


//every reducer has a state

/* <React.StrictMode> <App /> </React.StrictMode>  strict mode is a dev mode used to detect side effects like anything that happens
outside of React’s main rendering process
like fetching data or event listners or timers ....
*/
```

cycle de vie d un composant

la creation : componentDidMount() ou useEffect(() => {...}, [] )
la destruction : componentWillUnmount() ou useEffect( () => {return (...);}, [] )

for routing use react-router-dom liberary

faut passer un referentiel du display a onclick pas display() ni navigate("/") qui s execute au rendement du composant
const display = () => {
navigate("/");
};
return (
<>
<Button onClick={display}>Go back</Button>

<h1>hello user :{id}</h1>
</>
);

### Testing

to test react components u can use jest or RTL react testing liberary or cypress

- RTL : ``npm install --save-dev @testing-library/react @testing-library/dom``
**--save-dev** : install the packages as devdependencies meaning They are only needed for development and testing, They won't be included in the production build.
**@testing-library/react** : the mean RTL liberary
**@testing-library/dom** : lower-level library that React Testing Library depends on.

to run tests use npm test