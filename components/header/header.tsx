import mod from "./header.module.scss"
import React from "react"

export default function Header({children}:any){
  return (
    <>
      {children}
      <h1 className={mod.h1}>nmmsl</h1> 
    </>
  )
}
