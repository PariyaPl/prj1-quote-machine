import React, { useState } from 'react';
import './App.css';

const quotes = [
  {quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.', author: 'Christopher Columbus'},
  {quote: 'Definiteness of purpose is the starting point of all achievement.', author: ' W. Clement Stone'},
  {quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.', author: 'Helen Keller'},
  {quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', author: 'Joshua J. Marine'},
  {quote: 'Life is 10% what happens to me and 90% of how I react to it.', author: 'Charles Swindoll'},
  {quote: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.', author: 'Vincent Van Gogh'},
  {quote: 'Eighty percent of success is showing up.', author: 'Woody Allen'},
  {quote: 'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt'},
  {quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb'},
  {quote: 'You become what you believe.', author: 'Oprah Winfrey'},
]
const background = {
  background: 'linear-gradient(to right, rgb(152, 201, 204), rgb(15, 166, 177), rgb(29, 176, 187))',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
const quoteBox = {
  height: '40%',
  width: '35%',
  margin: 'auto auto',
  padding: '3%',
  color: 'rgb(233, 233, 233)',
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(2, 3, 3, 0.38)',
  border: '1px solid rgba(238, 241, 241, 0.16)',
  borderRadius: '1%'
}
const buttons = {
  position: 'fixed', 
  bottom: '15%', 
  right: '30%',        
  margin: '5% auto',
  height: '5%',
  width: '10%',
  fontSize: '1rem',
  backgroundColor: 'rgba(27, 48, 49, 0.44)',
  borderColor: 'rgba(203, 218, 219, 0.48)',
  color: 'rgb(247, 248, 248)'
}

function App() {
  const [i, seti] = useState(Math.floor(Math.random() * quotes.length));
  const ChangeQuote = () =>{
    const newi = Math.floor(Math.random() * quotes.length);
    seti(newi);
  }
  return (
    <div style={background}>
      <div id="quote-box" style={quoteBox}>
        <p id="text" style={{textAlign: 'justify'}}>{quotes[i].quote}</p>
        <p id="author" style={{alignSelf: 'flex-end'}}>{quotes[i].author}</p>
        <button id="new-quote" style={buttons} onClick={ChangeQuote}>New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" style={{fontSize: '1rem', color: 'rgb(233, 233, 233)'}}>post on twitter</a>
      </div>
    </div>
  );
}

export default App;
