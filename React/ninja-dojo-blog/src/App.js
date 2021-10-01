import './App.css';

function App() {
  const title = "Welcome to the new vlog";
  const likes = 50;
//const person = { name:"yoshi", age: 30 };
  const google = "https://www.google.com/"


  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p> { person } </p> */}
        <p>{ 10 }</p>
        <p>{ "Hello ninja!" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10}</p>

        <a href= { google }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
