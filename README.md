##STEPS TO CREATE A NEW PROJECT REACT+JAVASCRIPT WITH VITE

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

EN EL INDEX SE RENDERIZA TODA LA APP

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
5. Install the dependencies as well `npm i types@cors` and import it in server.ts

```js
import cors from 'cors';
app.use(cors());
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
npm install jwt-decode

importarlo en el Login

const decode = jwtDecode(response.token)