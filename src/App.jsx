// import './App.css';
// import { Body } from './views/Body/Body.jsx'
// import { Header } from './components/Header/Header.jsx';
// import { Footer } from './components/Footer/Footer.jsx';
// import { Body } from './views/Body/Body.jsx';

// function App() {
// 	return (
// 		<>
// 		<Header />
// 		<Body />
// 		<Footer />
// 		</>
// 	);
// }

// export default App;
export const Books = () => {
    useEffect( () => {
        console.log('UseEffect');
        fetch('http://localhost:4000/books')
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
        })
        .catch(e => {
          console.log(e);
        })
    })
  return (
    <>
    <h1>Books</h1>
    </>
  )
}
import "./App.css";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Body } from "./views/Body/Body.jsx"
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
export default App;








