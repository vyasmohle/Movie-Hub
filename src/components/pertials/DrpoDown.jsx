import React from 'react'

function DrpoDown({title, options, drop, value}) {   // value ko baad me dekhenge
  return (
    <div className='select' >
        <select defaultValue='0' onChange={drop} name='format' id='format' >
            
            <option value='0' disabled >
                {title}
            </option>
            {options.map((op,index)=>(
                <option key={index} value={op}  >
                {op.toUpperCase()}
            </option>
            ))}
        </select>
    </div>
  )
}

export default DrpoDown