import React from 'react'

const Tabs = (props) => {
    const {tabArrays, index, setIndex} = props;
    
    const setTab = (index) => {
        setIndex(index);
    }
    return (
    <div>
        { tabArrays.map((item, index) => (
        <div className='btn btn-primary btn-sm m-1' onClick={(e)=> setTab(index)}>
            {item.label}
        </div>)) 
        }
    </div>
    )
}

export default Tabs