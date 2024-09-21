import React, { useState } from 'react'

function FileUploader() {
const[file, setFile] = useState(null);

const handleChange = (e)=> {
    setFile(e.target.files[0])
}

  return (
    <div className='counter'>
        <input type='file' accept='image/*' onChange={handleChange}/>
        {file && <img src={URL.createObjectURL(file)} alt='uploaded' />}
    </div>
  )
}

export default FileUploader