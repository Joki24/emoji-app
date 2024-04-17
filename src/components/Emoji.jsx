import React from 'react';
import copy from'clipboard-copy';

function Emoji({symbol, title}) {
    const handleCopyEmoji = () => {
        copy(symbol);
        alert(`Copied ${symbol} to clipboard!`)
    };

    return (
        <div className='emoji' onClick={handleCopyEmoji}>
            {title} - {symbol}
        </div>
    );
}

export default Emoji;