const React = require('react')
const ReactDOM = require('react-dom')

// const myFavoritePeople = [
//   'Chris', // 0
//   'Alex',  // 1
//   'Chad',  // 2
//   'Kim'    // 3
// ];

// const myHusbandsName = myFavoritePeople[0];            // Chris
// const countMyFavoritePeople = myFavoritePeople.length; // 4
// const indexUndefined = myFavoritePeople[4];
// console.log(indexUndefined);

// const HelloWorld = () => {
//   return(<div>Temporary</div>);
// }

// const obj = {
//   color: 'blue'
// };

// function HelloWorld(){
//   return(<div>Temporary</div>);
// }

class HelloWorld extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      allPlanets: [],
      firstPlanet: {
        name: 'Alderaan',
        climate: 'temperate',
        population: 2000000000
      }
    }
  }

  componentDidMount () {
    console.log('component did mount');
    let response = {};
    fetch('https://swapi.co/api/planets/?page=1&format=json')
    .then(fetchResponse => { fetchResponse.json()
      .then((json) => {
        response = json;
        this.setState({ allPlanets: response.results });
        console.log(response);
      })
    });
    console.log('component mounted');
    const firstPlanet = this.state.firstPlanet;
    firstPlanet.color = 'brown';
    this.setState({ firstPlanet: firstPlanet });
  }

  getPlanetListUI (listOfPlanets = []){
    let results = []
    for (let i = 0; i < listOfPlanets.length - 1; i++){
      console.log(`listOfPlanets[${i}]: `, listOfPlanets[i]);
      results.push(<div>{listOfPlanets[i].name}</div>)
      results.push(<div>{listOfPlanets[i].climate}</div>)
      results.push(<div>{listOfPlanets[i].population}</div>)
    }
    return results;
  }

  render () {
    console.log('render');
    const { firstPlanet, allPlanets } = this.state;
    const planetListUI = this.getPlanetListUI(allPlanets)
    
    return (
      <div>
        <div>count: {allPlanets.length}</div>
        <div>{planetListUI}</div>
        <ul>
          <li>
            <div>name: {firstPlanet.name}</div>
            <div>climate: {firstPlanet.climate}</div>
            <div>population: {firstPlanet.population}</div>
          </li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('myapp'))
