Les tests unitaires sont une technique de test logiciel qui vise à tester individuellement les plus petites parties d’un programme, appelées unités (fonctions, classes, méthodes).

permet d ameliorer la qualite du logiciel et reduires des couts et ameliorer 

couverage doit deplacer 80% pour dire que c est bon 

productivite tool 


Concepts :

Jest = test runner + assertion library.

React Testing Library = helps you test the UI as the user sees it.

render = renders your component into a virtual DOM.

screen = lets you query elements (e.g. getByText).

mock = simulate data or behavior (like fake useUsers() or Redux).


// Test goals 

// It shows loading text when loading is true.

// It shows error message when error exists.

// It renders the list of users when data is available.


// You need to mock:

// useUsers() hook

// Redux state (useSelector)

// npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest

MemoryRouter  : is a special version of React Router's router that's designed specifically for testing, It lets you simulate navigation in memory
