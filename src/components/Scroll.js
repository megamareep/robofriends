import React from 'react'

//not self closing component.
//all props has children. So you can make wrapping components
//
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;