import React from 'react';

function UploadInput(props) {
  
  return (
    <>
      <h1 className='text-3xl text-cyan-400'>{`${props.header}`}</h1>
      <label
        className="block"
        onChange={`${props.onChange}`}
      >
        <input type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
      </label>
    </>
  );
}

export default UploadInput;