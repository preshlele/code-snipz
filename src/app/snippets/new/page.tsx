import React from 'react'

const SnippetCreatePage = () => {
  return (
    <form>
        <h3 className='font-bold m-3 text-center'>Create a snippet!</h3>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <label className='w-12' htmlFor="title">Title</label>
                <input type="text" name='title' id='title' className='border rounded p-2 w-full' />
            </div>
            <div className='flex gap-4'>
                <label className='w-12' htmlFor="code">Code</label>
                <input type="text" name='code' id='code' className='border rounded p-2 w-full' />
            </div>
            <button type='submit' className='p-2 rounded w-1/3 mx-auto bg-blue-300'> Post</button>
        </div>
    </form>
  )
}

export default SnippetCreatePage;