import React from 'react'

const DisplayTab = (props) => {
    const {tabArrays, index} = props;
    return (
    <div className='displayTab' style={{            
        display: 'flex',
        justifyContent:'center',}}>
        <div style={{
            outline: 'solid',
            width: '200px',
            height: '100px'
        }}>
            {tabArrays[index].content}
        </div>
    </div>
    )
}

export default DisplayTab