import React from 'react';
import { Pokemon } from '../../components/pokemon/Pokemon';
import './Home.css';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './controller'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData([7,4,1]);
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div id="home">
        <div className="container">
          {
            pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} {...pokemon} />
            ))
          }
        </div>
        <div className="main">
          <button onClick={() => {this.props.randomGet()}} type="button" className="btn btn-primary">Random Pokemon</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);