import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { addItem, removeItem, addPokemonData } from './redux/actions'
import { store } from './index'
import SearchHistory from './components/SearchHistory'
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import axios from 'axios'
import { Generations } from './components/Generations'
import { Abilities } from './components/Abilities'

function App(props) {
  let [searchValue, updateSearch] = useState("")
  let [abilities, updateabilities] = useState([])
  let [color, updateColor] = useState([])
  let [show, setShow] = useState(false);
  let [PokemonName, updatePkemonName] = useState([])

  let [Sprites, updateSprites] = useState({})
  let [redBlue, updateRedBlue] = useState([[]])
  let [yellow, updateYellow] = useState([[]])
  let [crystal, updateCrystal] = useState([[]])
  let [gold, updateGold] = useState([[]])
  let [silver, updateSilver] = useState([[]])
  let [emerald, updateEmerald] = useState([[]])
  let [fire, updateFire] = useState([[]])
  let [ruby, updateRuby] = useState([[]])
  let [diamond, updateDiamond] = useState([[]])
  let [Heart, updateHeart] = useState([[]])
  let [paltinum, updatePlatinum] = useState([[]])
  let [blackWhite, updateblackWhite] = useState([[]])
  let [omega, updateomega] = useState([[]])
  let [XY, updateXY] = useState([[]])
  let [SevenIcons, updateSevenIcons] = useState([[]])
  let [ultra, updateUltra] = useState([[]])
  let [EightIcons, updateEightIcons] = useState([[]])





  let handleSubmit = (event) => {
    event.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon/" + searchValue)
      .then(function (response) {
        console.log(response.data)
        getEvolution(response.data.species.url)

        updateabilities(response.data.species.url)
        updateColor(response.data.color)
        updatePkemonName(response.data.name);
        updateSprites(response.data.sprites)
        updateRedBlue(response.data.sprites.versions["generation-i"]['red-blue'])
        updateYellow(response.data.sprites.versions["generation-i"]['yellow'])
        updateCrystal(response.data.sprites.versions["generation-ii"]['crystal'])
        updateGold(response.data.sprites.versions["generation-ii"]['gold'])
        updateSilver(response.data.sprites.versions["generation-ii"]['silver'])
        updateEmerald(response.data.sprites.versions["generation-iii"]['emerald'])
        updateFire(response.data.sprites.versions["generation-iii"]['firered-leafgreen'])
        updateRuby(response.data.sprites.versions["generation-iii"]['ruby-sapphire'])
        updateDiamond(response.data.sprites.versions["generation-iv"]['diamond-pearl'])
        updateHeart(response.data.sprites.versions["generation-iv"]['heartgold-soulsilver'])
        updatePlatinum(response.data.sprites.versions["generation-iv"]['platinum'])
        updateblackWhite(response.data.sprites.versions["generation-v"]['black-white'])
        updateomega(response.data.sprites.versions["generation-vi"]['omegaruby-alphasapphire'])
        updateXY(response.data.sprites.versions["generation-vi"]['x-y'])
        updateSevenIcons(response.data.sprites.versions["generation-vii"]['icons'])
        updateUltra(response.data.sprites.versions["generation-vii"]['ultra-sun-ultra-moon'])
        updateEightIcons(response.data.sprites.versions["generation-viii"]['icons'])

        props.addItem(searchValue)
      })
      .catch(function (error) {
        console.log(error);
        setShow(true)
      });
  }

  let evName1, evName2, evName3, minLevel2, minLevel3;

  let getEvolution = function (url) {
    axios.get(url)
      .then(function (response) {
        
        axios.get(response.data.evolution_chain.url)
          .then(function (response) {
            console.log(response.data)
            evName1 = response.data.chain.species.name;
            evName2 = response.data.chain.evolves_to[0].species.name;
            evName3 = response.data.chain.evolves_to[0].evolves_to[0].species.name;
            minLevel2 = response.data.chain.evolves_to[0].evolution_details[0].min_level;
            minLevel3 = response.data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
            addPokemonData(response.data.chain)
            console.log(evName1, evName2, evName3, minLevel2, minLevel3)



          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Toast className="toast" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>Sorry it looks like that pokemon doesn't exist. <br />
        Please Check your spelling</Toast.Body>
      </Toast>

      <form className='inputForm' onSubmit={handleSubmit}>
        <input onChange={e => updateSearch(e.target.value)} placeholder="Search the pokidex!"></input>
        <select >
          <option value=""></option>
        </select>
      </form>

      <div className="main">
        <h1>{PokemonName}</h1>
        <img src={Sprites.front_default}></img>

        <Abilities />



        <div className="Evolutions">
          <h1>Evolutions</h1>
        </div>
        <Generations
          redBlue={redBlue}
          yellow={yellow}
          crystal={crystal}
          gold={gold}
          silver={silver}
          emerald={emerald}x
          fire={fire}
          ruby={ruby}
          diamond={diamond}
          Heart={Heart}
          paltinum={paltinum}
          blackWhite={blackWhite}
          omega={omega}
          XY={XY}
          SevenIcons={SevenIcons}
          ultra={ultra}
          EightIcons={EightIcons}
        />


      </div >


      <SearchHistory />
    </div>
  );
}


let mapStateToProps = state => {
  return store.getState();
};

export default connect(
  mapStateToProps,
  { addItem, removeItem, addPokemonData }
)(App);
