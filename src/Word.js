import React from 'react';

const Word =({title, source, examples, definition, synon, speech})=> {
	return (
	<section className="output">
	<div>
		<h1>Searched word:</h1>
		<p>{title}</p>
		<p className="speech">{speech}</p>
	</div>
	<div>
		<h1>Definition:</h1>
		<p>{definition}</p>
	</div>
	<div>
		<h1>Example:</h1>
		<p>{examples}</p>
	</div>
	<div>
		<h1>Synonyms:</h1>
	   <div>
		<ul className="synonyms">
		{synon.map(line=> (
			<li>{line}</li>
		))}
		</ul>
		</div>
	</div>
	<div>
		<h1>Pronounciation:</h1>
		<audio controls="controls" src={source}></audio>
	</div>
	</section>
		);
}

export default Word;