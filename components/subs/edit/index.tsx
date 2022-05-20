import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Button, Input } from "antd-mobile";
import { testAtom } from "../../../model/quality";
import { atom } from "jotai";
import Link from "next/link";

export const ID = atom('')
// export const uppercaseIDAtom = atom(
//   (get) => get(ID).toUpperCase()
// )

console.log(ID)

export default function Edit() {
  const [list, setList] = useAtom(testAtom)
  const [text, setText] = useState('')
  const [id, setId] = useAtom(ID)

  const getText = () => {
    list.map((issue) => {
      if (issue.id === id) setText(issue.title)
    })
  }

  const handelComfirm = () => {
    const tempList = list

    tempList.map((issue, index) => {
      if (issue.id === id) {
        const newIssue = { ...issue, title: text }
        tempList[index] = newIssue
        console.log(newIssue)
      }
    })

    let newList = [...list]

    setList(newList)
  }

  useEffect(() => {
    getText()
  }, [])

  return (
    <div>
      编辑页面
      <Input placeholder="输入试试？" value={text} onChange={(inputValue) => setText(inputValue)}></Input>
      <Link href="/">
        <a>
          <Button color="primary" onClick={handelComfirm}>确定</Button>

        </a>
      </Link>
    </div>
  )
}
