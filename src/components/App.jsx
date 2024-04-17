import React, {useState} from 'react';
import emojisData from '../assets/emojis.json';
import EmojiList from './EmojiList';
import '../App.css'


function App() {
    const [emojis, setEmojis] = useState(emojisData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    // Filter emojis based on search query
  const filteredEmojis = emojis.filter((emoji) =>
  emoji.title.toLowerCase().includes(searchQuery.toLowerCase())
);

    
    return (
        <div className='App'>
            <h1> EmojiSearch</h1>
            <input className='search-input'
                    type="text" 
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    />
            <p>Click on an emoji to copy it</p>
            <EmojiList emojis={filteredEmojis} />
        </div>
    );
}
export default App;
