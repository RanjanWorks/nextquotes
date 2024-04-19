import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = ({times}) => {
  return (
    <>
      {[...Array(times)].map((_, index) => (
        <div className="card" key={index}>
          <p className='type'><Skeleton baseColor="#202020" highlightColor="#444" height={25} width={150}  /></p>
          <p className="quote"><Skeleton baseColor="#202020" highlightColor="#444" count={2} /></p>
          <div><Skeleton baseColor="#202020" highlightColor="#444" circle={true} height={40} width={40}/></div>
        </div>
      ))}
    </>
  );
}

export default Loading;

