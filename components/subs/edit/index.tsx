import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Button, Input } from "antd-mobile";
import { atom } from "jotai";
import Link from "next/link";
import { Iissue } from "../../../interfaces/interfaces";
import useGetList from "../../../utils/get_list";

export const IDAtom = atom('')
export const IDLnk = atom((get) => get(IDAtom))
export const isAddAtom = atom(false)
export const isAddLnk = atom((get) => get(isAddAtom))

export default function Edit() {

  const [id] = useAtom(IDLnk)
  const [isAdd] = useAtom(isAddLnk)
  const [text, setText] = useState('')
  const [list, setList] = useGetList(id.slice(0, 2))

  useEffect(() => {
    if (!isAdd) {
      list.map((issue) => {
        if (issue.id === id) setText(issue.title)
      })
    }
  }, [])

  // todo change to getIssue() && change to useState<Iissue>() upper
  const getListEdited = (): Array<Iissue> => {
    const newList = [...list]

    newList.map((issue, index) => {
      if (issue.id === id) {
        const newIssue = { ...issue, title: text }
        newList[index] = newIssue
      }
    })

    return newList
  }

  const getListAdded = (): Array<Iissue> => {
    const newList = [...list]
    newList.push({ score: 100, title: text, id: id })
    console.log(newList)
    return newList
  }

  const handelComfirm = () => {
    const newList = isAdd?getListAdded():getListEdited()
    setList(newList)
  }

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
