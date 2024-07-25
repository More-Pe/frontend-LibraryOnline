## STEPS TO CREATE A NEW PROJECT REACT+JAVASCRIPT WITH VITE

1. Go to the folder where you want to create the folder containing your project and open a terminal there:
   `$ npm create vite@latest your-project-name --template react`.
   ✔ Package name: your-project-name
   ✔ Select a framework: ‘ React
   ✔ Select a variant: ‘ JavaScript + SWC
2. Then execute the commands that the terminal says:
   `$ cd name-from-your-project`
   `$ npm install`
   `$ npm run dev`
3. Then you can open your project in your IDE and start a repository:
   `$git init`
4. Don't forget configurate the .gitignore!
5. These files form the basic structure of a React project with Vite:
- **index.html:** Main HTML template.
- **vite.config.js:** Vite configuration.
- **src/main.jsx:** React application entry point. This is where the root component (App) is mounted in the DOM of the browser.
- **src/App.jsx:** Root component of the application. Here you define the structure and content of your application. You can include other components inside the App, manage local state, and define the main logic of the user interface.
- **src/index.css:** Global styles.
- **src/App.css:** Styles specific to the App component.
- **package.json:** Project information and dependencies.
- **README.md:** Project documentation.
- **Body.jsx** This is a file created by us where we will put the front-end routes.

You can expand and modify this structure according to the needs of your project.

## STEPS TO CREATE A NEW PROJECT REACT+JAVASCRIPT WITH VITE

1. Go to the folder where you want to create the folder containing your project and open a terminal there:
   `$ npm create vite@latest your-project-name --template react`.
   ✔ Package name: your-project-name
   ✔ Select a framework: ‘ React
   ✔ Select a variant: ‘ JavaScript + SWC
2. Then execute the commands that the terminal says:
   `$ cd name-from-your-project`
   `$ npm install`
   `$ npm run dev`
3. Then you can open your project in your IDE and start a repository:
   `$git init`
4. Don't forget configurate the .gitignore!
5. These files form the basic structure of a React project with Vite:
- **index.html:** Main HTML template.
- **vite.config.js:** Vite configuration.
- **src/main.jsx:** React application entry point. This is where the root component (App) is mounted in the DOM of the browser.
- **src/App.jsx:** Root component of the application. Here you define the structure and content of your application. You can include other components inside the App, manage local state, and define the main logic of the user interface.
- **src/index.css:** Global styles.
- **src/App.css:** Styles specific to the App component.
- **package.json:** Project information and dependencies.
- **README.md:** Project documentation.

You can expand and modify this structure according to the needs of your project.


## STEPS TO FOLLOW WHEN USING REACT ROUTE DOM

1. `npm i react-router-dom`
2. import in main.jsx

```
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

3. In App.jsx delete everything as components
4. - new folder in SRC - views + new folder - body + new file Body.jsx
5. In this file Body.jsx we need to import the following:

```
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../components/Login/Login';

export const Body = () => {
  return (
    <>
       <Routes>
        <Route path="/login" element={<Login />}/>
       </Routes>
    </>
  )
}

```

6. In App.jsx import the body.jsx

```

function App() {

  return (
    <>
      <Body />
    </>
  );
}

export default App;

```

CREATE CUSTOM NAVIGATE

1. Create it as new component in components folder
2. In the file .jsx import the useNavigate function such as:

```
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const CSurfer = (
    {
       content,
       path
    }
 ) => {
    const navigate = useNavigate();
    return (
    <div onClick={() => navigate(path)}> {content} </div>
  )
}

```

3. Then in the Header.jsx import the created serfer as in the return function:

```

export const Header = () => {

  const navigate = useNavigate();         //hook to use navigate function

  return (
    <>
      <div onClick={() => navigate('/login')}> Login </div>
      <CSurfer path="/register" content="Register" />
      <CSurfer path="/services" content="Services" />
    </>
  )
}
```

4. Dont forget to include the path in the body as well

```
export const Body = () => {
  return (
    <>
       <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/services' element={<Service />}/>
       </Routes>
    </>
  )
}
```

## STEPS TO CONNECT OUR REACT PROJECT TO OUR API

--- IN API PROJECT ---

1. Go to Docker and run our DB container for SQL
2. Go to the DB folder and elevete it as `npm run dev`
3. Go back to the React project and ensure the server is on there as well `npm run dev`
4. In the library project install cors with `npm install cors`
5. Install the dependencies as well `npm install --save-dev @types/cors` and import it in server.ts

```js
import cors from 'cors';
app.use(cors({origin: 'http://localhost:5173', // request origin URL
	methods: 'GET,HEAD,PUT,POST,DELETE', // allowed methods in the request
	credentials: true, // allows session cookies from browser to pass through
}));
```

--- IN REACT PROJECT ---

1. In SRC - reate new folder Services
2. Inside new file - apiCalls.js
3. Inside import

```
export const registerUser = async () => {

        const request = await fetch('http://localhost:4000/register',
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          });

        const result = await request.json();

        console.log(result)
       }

```

4. Import this registerUser in our Register component as

```
async function register() {
          try {
            console.log(credentials);

           const response = await registerUser(credentials)   // guarda la repsuesta en una variale

          } catch (error) {
            console.log(error)
          }
        }
```
### HOW DECODE TOKEN IN FRONTEND
1. Install jwt-decode:
`$ npm install jwt-decode`

2. Import and Use in Login Component:
In your login component, import jwt-decode and use it to decode the JWT token received from the backend:

```import jwtDecode from 'jwt-decode';

// After receiving the token in your login function
const decode = jwtDecode(response.token);```

### TO CREATE A NEW VIEW
1. Generate a Component Skeleton Using rafc:
Use the rafc (React Arrow Function Component) snippet to create a new React component quickly.

2. Import the New Component into Body.jsx:
After creating the new component, import it into your Body.jsx or wherever you need to use it.
```
import NewComponent from './path/to/NewComponent'; // Adjust the path as needed

// Use the component within your Body.jsx or other relevant file
```
________________________________
Crear carpeta utls y dentro fichero funtions.js
Crear la función para verificar en segundo plano el tiempo de validez del token
Llamar a la función en CLogin.
_______
Para hacer editable el perfil de usuario
Cambio Profile.jsx con los inputs
Edito el CInput para que tenga una propiedad ClassName
En el profile agregamos funciones: editButtonHandler, 
en apiCalls hago una función para mandar al backend los datos editados en perfil
Luego en backend como no estaba hecho, se crea el controlador y el endpoint para editar usuario.
Añadir vista de Admin.
En el Body agrego la ruta Admin y la lógica en el try.