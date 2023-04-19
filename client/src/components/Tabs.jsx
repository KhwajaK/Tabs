import React from 'react'

const Tabs = (props) => {
    const {tabArrays, index, setIndex} = props;
    const setTab = (idx) => {
        setIndex(idx);
    }
    return (
    <div>
        { tabArrays.map((item, i) => (
        <div className='btn btn-primary btn-sm m-1' onClick={(e)=> setTab(i)}>
            {item.label}
        </div>)) 
        }
    </div>
    )
}

export default Tabs

// idx is paramater
// i is argument