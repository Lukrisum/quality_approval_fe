import React from "react"
import mod from "./list_header.module.scss"

export default function ParentListHeader(props: any){

  return (
    <div className={mod['list-parent-header']}>
      <span>{props.title}</span>
      <span>{props.extra}</span>
    </div>
  )
}
