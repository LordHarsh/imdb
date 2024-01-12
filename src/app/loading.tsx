import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center'>
        <Image className='h-96 w-96' width={500} height={500}  src="spinner.svg" alt="loading..." />
    </div>
  )
}
