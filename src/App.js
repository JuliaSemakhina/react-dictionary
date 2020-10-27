import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Word from './Word';
import './App.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  //States
  const [query, setQuery] = useState('');
  const [words, setWords] = useState([]);
  const [audios, setAudio] = useState([]);
  const [examples, setExample] = useState([]);
  const [synonyms, setSynonym] = useState([]);


const getWord = async (e)=> {
  e.preventDefault();

  var api = 'https://api.wordnik.com/v4/word.json/';
  var key = 'ag99rn7f4gdd82rlrrcxdd1p6yaxw6hbogitsadptvg5221d8';
  var i = Math.floor(Math.random()*9);

  Promise.all([fetch(`${api}${query}/definitions?limit=10&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=${key}`),
  fetch(`${api}${query}/examples?includeDuplicates=false&useCanonical=true&limit=10&api_key=${key}`), 
  fetch(`${api}${query}/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=${key}`),
  fetch(`${api}${query}/audio?useCanonical=true&limit=10&api_key=${key}`)
  ])
  
  .then(responses=>{
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  })
  .then(data=>{
    setWords(data[0][i]);
    setExample(data[1].examples[i]);
    setSynonym(data[2][0].words);
    setAudio(data[3][0]);
    console.log(data[0][i]);
    console.log(data[3]);
    console.log(data[2][0]);
  }
  )
  .catch(function (error) {
    alert('Please enter a search word');
  })

}

const updateSearch = (e) => {
  setQuery(e.target.value.trim().toLowerCase());
}


  return (
    <div className='App'>
    <div className='header'>
      <div className='search-bar'>
        <h1>Dictionary App</h1>
        
        <form onSubmit={getWord} className="submit-field">
           <input
           onChange={updateSearch} 
           value={query}
           className="search-bar__input"
           type="search"
           required
           placeholder="enter a word" 
           aria-label="search"/>
           <button          
           id="submit" 
           className="search-bar__submit"
           type="submit">
           <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>  
</div>
        
      <Word title={words.word}
                speech={words.partOfSpeech} 
                source={audios.fileUrl}
                definition= {words.text}
                examples = {examples.text}
                synon = {synonyms}
                key={words.id}
          />
          
    </div>
  );
}

export default App;
