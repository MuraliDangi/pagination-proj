import React from 'react'

const Pagination = ({data, pageHandler}) => {
    const pagiNumber = [];

    for(let i= 1; i<Math.ceil((data.length)/10)+1; i++){
        pagiNumber.push(i);
    }
  return (
    <div className='mt-3'>
        {
            pagiNumber.map((page)=>
            <div className='btn btn-outline-success m-1' onClick={()=>pageHandler(page)}>{page}</div>
            )
        }
    </div>
  )
}

export default Pagination