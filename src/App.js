import React from 'react';
import dragonfire from './dragonfire.png'
import './App.css';

const Character = ({character}) => (
  <div className="character">
      <li>
          <ul>
              <li><p className="name">Name: {character.name}</p></li>
              <li><p className="gender">Gender: {character.gender}</p></li>
              <li><p className="hairColor">Hair Color: {character.hairColor}</p></li> 
              <li><p className="hairLength">Hair Length: {character.hairLength}</p></li>
              <li><p className="hairStyle">Hair Style: {character.hairStyle}</p></li>              
              <li><p className="eyes">Eyes: {character.eyes}</p></li>
              <li><p className="armor">Armor: {character.armor}</p></li>  
          </ul>
      </li>
  </div>
);


class CharacterForm extends React.Component {
  constructor(props) {
      super(props);

  }
}


class CharacterCreator extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          currentCharacter: {
              name: '',
              gender: '',
              hairColor: '',
              hairLength: '',
              hairStyle: '',
              eyes: '',
              armor: ''
          },
          characters: props.characters || []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

  handleSubmit(event) {
      const characters = this.state.characters || [];
      characters.push({
          name: this.state.name,
          gender: this.state.gender,
          hairColor: this.state.hairColor,
          hairLength: this.state.hairLength,
          hairStyle: this.state.hairStyle,
          eyes: this.state.eyes,
          armor: this.state.armor,
      });
      console.log(characters);
      event.preventDefault();
  }

  handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
          currentCharacter: {
              [name]: value
          },
          characters: this.state.characters
      });
    }
  
  render () {
      const characters = this.state.characters || [];
      const characterItems = characters.map(character => 
          (<Character key={character.name} character={character} />
      ));
      return (
          <div id="characterCreator">
              <h1>Character Creator</h1>
                  <form onSubmit={this.handleSubmit} className="characterCreator">
                      <div className="characterCreator">
                          <label for="name">Name: </label>
                          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required />
                      </div>
                      <div className="characterCreator">
                          <label for="gender">Gender: </label>
                          <input type="text" name="gender" id="gender" value={this.state.gender} onChange={this.handleChange} required />
                      </div>
                      <div className="characterCreator">
                          <label for="hairColor">Hair Color: </label>
                          <input type="text" name="hairColor" id="hairColor" value={this.state.hairColor} onChange={this.handleChange} />
                      </div>    
                      <div className="characterCreator">
                          <label for="hairStyle">Hair Style: </label>
                          <input type="text" name="hairStyle" id="hairStyle" value={this.state.hairStyle} onChange={this.handleChange} />
                      </div>
                      <div className="characterCreator">
                          <label for="hairLength">Hair Length: </label>
                          <input type="text" name="hairLength" value={this.state.hairLength} id="hairLength" onChange={this.handleChange} />
                      </div>
                      <div className="characterCreator">
                          <label for="eyes">Eyes: </label>
                          <input type="text" name="eyes" value={this.state.eyes} id="eyes" onChange={this.handleChange} />
                      </div>                        
                      <div className="characterCreator">
                          <label for="armor">Armor: </label>
                          <input type="text" name="armor" id="armor" value={this.state.armor} onChange={this.handleChange} />
                      </div>                   
                      <div className="characterCreator">
                          <input type="submit" value="Create!" />
                      </div>
                  </form>
          <ul>{characterItems}</ul>
          </div>
      );
  }
}

class CharacterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        characterOne: '',
        characterTwo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]: value});
  }

  handleSubmit(event) {
      
      event.preventDefault();
  }

render() {
  return (
<div id="characterSelect">
  <h1>Character select</h1>
  <ul className="characterList">
      {/* <li>
          <div className="character">
          <ul>
              <li><p className="name">Name: Kakuria</p></li>
              <li><p className="gender">Gender: Girl</p></li>
              <li><p className="hairColor" style={{color: 'purple'}}>Hair Color: Purple</p></li> 
              <li><p className="hairLength">Hair Length: Long</p></li>
              <li><p className="hairStyle">Hair Style: Flowing</p></li>              
              <li><p className="eyes" style={{color: 'green'}}>Eyes: Green</p></li>           
          </ul>          
          </div>
      </li>
      <li>
          <div className="character">
          <ul>
              <li><p className="name">Name: Daviel</p></li>
              <li><p className="gender">Gender: Boy</p></li>
              <li><p className="hairColor" style={{textShadow: '1px 1px #555', color: '#ccc'}}>Hair Color: Silver</p></li> 
              <li><p className="hairLength">Hair Length: Long</p></li>
              <li><p className="hairStyle">Hair Style: Flowing</p></li> 
              <li><p className="eyes">Eyes: Wolf</p></li>
          </ul>
          </div>
      </li>
      <li>
          <div className="character">
          <ul>
              <li><p className="name">Name: Antita</p></li>
              <li><p className="gender">Gender: Both</p></li>
              <li><p className="hairColor">Hair Color: Red and Purple</p></li> 
              <li><p className="hairLength">Hair Length: Short</p></li>
              <li><p className="hairStyle">Hair Style: Spiky</p></li> 
              <li><p className="eyes">Eyes: Wolf</p></li>   
          </ul>
          </div>
      </li>
      <li>
          <div className="character">
          <ul>
              <li><p className="name">Name: Lavita</p></li>
              <li><p className="gender">Gender: Both</p></li>
          <li><p className="hairColor">Hair Color: Orange, Yellow, and Red</p></li> 
              <li><p className="hairLength">Hair Length: Short</p></li>
              <li><p className="hairStyle">Hair Style: Curly</p></li> 
              <li><p className="eyes">Eyes: Blue and Green</p></li>              
          </ul>
          </div>
      </li> */}
  </ul>
  <form onSubmit={this.handleSubmit}>
      <div class="characterSelect">
          <label> 
              Character One Name:
              <input type="text" name="characterOne" id="characterOne" value={this.state.characterOne} onChange={this.handleChange} />
          </label>
          <label> 
              Character Two Name:
              <input type="text" name="characterTwo" id="characterTwo" value={this.state.characterTwo} onChange={this.handleChange} />
          </label>            
          <input type="submit" value="Submit" />
      </div>
  </form>
  <div>
    <h3>Character One: {this.state.characterOne}</h3>
    <h3>Character Two: {this.state.characterTwo}</h3>
  </div>
</div>
);
}
}


const characterName = <h3 className="name">Kurumi</h3>;
    
const character = <div className="character"></div>;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dragonfire} className="Dragonfire-logo" alt="logo" />
      </header>
      <CharacterCreator characters={[]}/>     
      <CharacterSelect />        
    </div>
  );
}


export default App;
