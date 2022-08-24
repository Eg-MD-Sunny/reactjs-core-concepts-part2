import './App.css';
import logo from './logo.svg';


const number = 5555;
const singer = {
	name:'Dr. Mahfuz',
	job:'Singer'
}
const singer2 = {
	name:'Eva Rahman',
	job:'singer2'
}

/*Start Style*/
const singerStyle = {
	color:'Purple',
	backgroundColor:'white'
}
/*End Style*/

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>JSX</h1>

			{/*Custom HTML*/}
			<div id="countries" className="countries">
				<p></p>
				<p></p>
				<p></p>
			</div>

			{/*Custom HTML Adding*/}
			<div className="container">
				<h3>Hello Dude React.How are you?</h3>
			</div>

			<div className="music">
				<p>Name: {number}</p>
				<p>Name: {2222+number}</p>
				<p style={singerStyle}>Name: {singer.name} {singer.job}</p>
				<p style={{color:'blue',backgroundColor:'yellow'}}>Name: {singer2.name} {singer2.job}</p>
			</div>

				<p>Edit <code>src/App.js</code> and save to reload.</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
			</header>
		</div>
	);
}
export default App;
