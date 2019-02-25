import React from 'react';

export default function Button({theme, onClick}) {
    return <button class="theme-button btn btn-lg btn-success" value={theme} onClick={onClick}>{theme}</button>
}