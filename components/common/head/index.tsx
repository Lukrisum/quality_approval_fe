import Image from 'next/image'
import mod from './head.module.scss'

export default function Head({ children }: any) {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>

      {children}

      <div className={mod['img-wrapper']}>
        <Image src="/logo.svg" height={50} width={150} />
        <span>南昌大学家园工作室</span>
      </div>
    </>
  )
}
