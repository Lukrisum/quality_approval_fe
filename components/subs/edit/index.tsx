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
  const [isAdd, setIsAdd] = useAtom(isAddAtom)
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
    return newList
  }

  const handelComfirm = () => {
    let newList: Array<Iissue>
    if (isAdd) {
      newList = getListAdded()
      setIsAdd(false)
    }
    else {
      newList = getListEdited()
    }
    setList(newList)
  }

  return (
    <div>
      {
        isAdd
          ? <span>新建项目</span>
          : <span>编辑页面</span>
      }
      <Input placeholder="输入试试？" value={text} onChange={(inputValue) => setText(inputValue)}></Input>
      <Link href="/">
        <a>
          <Button color="primary" onClick={handelComfirm}>确定</Button>

        </a>
      </Link>
    </div>
  )
}
