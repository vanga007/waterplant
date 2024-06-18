import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='bg-black h-[130px] w-[153px] flex justify-center shadow-2xl'>
        <Triangle
          color="#ffffff"  
          height={120}      
          width={120}     
        />
      </div>
    </div>
  );
};

export default Loader;
