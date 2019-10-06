const React = require('react')
const ReactDOM = require('react-dom')

class HelloWorld extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstPlanet: {
        name: 'Alderaan',
        climate: 'temperate',
        population: 2000000000
      }
    }
  }

  componentDidMount () {
    console.log('component did mount')
    let response = {}
    fetch('https://swapi.co/api/planets/?page=1&format=json').then(
      fetchResponse => {
        this.fetchResponse = fetchResponse
      }
    )
    console.log('component mounted');
    const firstPlanet = this.state.firstPlanet;
    firstPlanet.color = 'brown';
    this.setState({firstPlanet: firstPlanet })
  }

  render () {
    console.log('render')
    const { firstPlanet } = this.state;

    return (
      <ul>
        <li>
          <div>name: {firstPlanet.name}</div>
          <div>climate: {firstPlanet.climate}</div>
          <div>population: {firstPlanet.population}</div>
        </li>
      </ul>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('myapp'))
