import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div className="card" key={index}>
          <p className='type'><Skeleton baseColor="#202020" highlightColor="#444" height={30} width={150}  /></p>
          <p className="quote"><Skeleton baseColor="#202020" highlightColor="#444" count={2} /></p>
        </div>
      ))}
    </>
  );
}

export default Loading;

