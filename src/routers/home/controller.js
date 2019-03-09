import { getDetail } from './services/getPokemon'
import axios from 'axios';
import { randomRange } from '../../utils/randomRange';

export const mapStateToProps = (state) => {
  return {
    pokemons: [...state.pokemons]
  }
}

export const mapDispatchToProps = {
  getData(ids) {
    const getArray = [];
    for(let i = 0; i < ids.length; i++) {
      getArray.push(getDetail(ids[i]))
    }
    
    //dispatch一个actionCreator函数，在里面做异步请求
    return (dispatch) => {
      axios.all(getArray)
      .then(axios.spread(function (...args) {
        const pokemons = [];
        for(let i = 0; i < args.length; i++) {
          let temp = {};
          temp['height'] = args[i].data.height || 0;
          temp['weight'] = args[i].data.weight || 0;
          temp['base_experience'] = args[i].data.base_experience || 0;
          temp['name'] = args[i].data.name || 'unknow';
          temp['image'] = args[i].data.sprites.back_default || '';
          pokemons.push(temp);
        }    
        dispatch({
          type: 'GET_POKEMONS',
          payload: pokemons
        });
      }));
    }
  },

  randomGet() {
    let pokemonId = randomRange(1, 500);

    return (dispatch) => {
      getDetail(pokemonId)
      .then(({ data: { height=0, weight=0, name='unknow', base_experience=0, sprites: { back_default='' } } }) => {
        let temp = {
          height,
          weight,
          name,
          base_experience,
          image: back_default
        }
        dispatch({
          type: 'RANDOM_GET',
          payload: temp
        });
      }); 
    }
  }
}