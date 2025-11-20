import React from 'react'
import CustomButoon from './CustomButoon';


const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex-col '>
        <input 
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}
          className='filepicker-input'
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>
        <p className='mt-2 text-gray-500 text-xs truncate' >
          {file === '' ? 'No file selected' : file.name}
        </p>
      </div>
      <div className='flex flex-wrap gap-3 mt-4'>
        <CustomButoon 
          type='filled'
          title='Logo'
          handleClick={() => readFile('logo')}
          customStyles='text-xs'
        />
        <CustomButoon 
          type='filled'
          title='Full'
          handleClick={() => readFile('full')}
          customStyles='text-xs'
          />
          </div>
      </div>
  )
}

export default FilePicker;