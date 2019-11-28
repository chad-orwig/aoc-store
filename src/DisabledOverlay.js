import React from 'react';

function DisabledOverlay() {
    return (
        <div style = {{top: 0, bottom: 0, left: 0, right: 0, zIndex : 5000, position : 'absolute', background : '#77777777' }}>
        </div>
    );
}

export default DisabledOverlay;