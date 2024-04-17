//EmojiList.jsx
import React from 'react';
import Emoji from './Emoji';


function EmojiList({emojis}) {
    return (
        <div className='emoji-list'>
            {emojis.map((emoji, index) => (
                <Emoji key={index} symbol={emoji.symbol} title={emoji.title} />  
            ))}
        </div>
    );
}

export default EmojiList;