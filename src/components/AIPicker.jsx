import React from 'react'

import CustomButoon from './CustomButoon';





const AIPicker = ( { prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
       className='aipicker-textarea'
        placeholder='Ask AI...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        />
        <div className='flex flex-wrap gap-3'>
          {generatingImg ? (
            <CustomButoon 
              type='outline'
              title='Asking AI...'
              customStyles='text-xs'
            />
          ) : (
            <>
              <CustomButoon 
                type='outline'
                title='AI Logo'
                handleClick={() => handleSubmit('logo')}
                customStyles='text-xs'
              />
              <CustomButoon 
                type='filled'
                title='AI Full'
                handleClick={() => handleSubmit('full')}
                customStyles='text-xs'
              />
            </>
          )}

        </div>
    </div>
  )
}

export default AIPicker;