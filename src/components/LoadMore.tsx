import React from 'react'
import Image from 'next/image'

type Props = {}

const LoadMore = (props: Props) => {
  return (
    <>
    <section className="flex justify-center items-center w-full">
      <div>
        <Image
          src="./spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </section>
  </>
  )
}

export default LoadMore