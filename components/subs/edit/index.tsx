import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Button, Card, Space, Stepper, TextArea, List, Divider } from "antd-mobile";
import mod from "./edit.module.scss"
import { atom } from "jotai";
import Link from "next/link";
import { Iissue } from "../../../interfaces/interfaces";
import useGetList from "../../../utils/get_list";

export const IDAtom = atom('')
export const IDLnk = atom((get) => get(IDAtom))
export const titleAtom = atom('')
export const titleLnk = atom((get) => get(titleAtom))
export const isAddAtom = atom(false)
export const isAddLnk = atom((get) => get(isAddAtom))

export default function Edit() {

  const [id] = useAtom(IDLnk)
  const [title] = useAtom(titleLnk)
  const [isAdd, setIsAdd] = useAtom(isAddAtom)

  const [text, setText] = useState('')
  const [score, setScore] = useState(0)

  const [list, setList] = useGetList(id.slice(0, 2))

  useEffect(() => {
    if (!isAdd) {
      list.map((issue) => {
        if (issue.id === id) setText(issue.title)
      })
    }
  }, [])

  const getListEdited = (): Array<Iissue> => {
    const newList = [...list]

    newList.map((issue, index) => {
      if (issue.id === id) {
        const newIssue = { ...issue, title: text, score: score }
        newList[index] = newIssue
      }
    })

    return newList
  }

  const getListAdded = (): Array<Iissue> => {
    const newList = [...list]
    newList.push({ score: score, title: text, id: id })
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
    <>
      <div className={mod['card-wrapper']}>
        <Card
          title={
            isAdd
              ? <span className={mod["span-card-title"]}>添加事项</span>
              : <span className={mod["span-card-title"]}>编辑事项</span>
          }
          extra={title}
          className={mod['card-Y']}
        >
        </Card>
      </div>
      <br />
      <List>
        <List.Item>
          <Space
            justify="between"
            block
          >
            <span className={mod["span-list-title"]}>分值</span>
            <Stepper
              defaultValue={52.0}
              value={score}
              digits={1}
              step={10}
              min={0}
              max={100}
              onChange={(value) => setScore(value)}
            />
          </Space>
        </List.Item>
        <List.Item>
          <span className={mod["span-list-title"]}> 标题 </span>
          <br />
          <div className={mod['textarea-wrapper']}>
            <TextArea
              placeholder="请输入事项内容……"
              value={text}
              autoSize={{ minRows: 3, maxRows: 6 }}
              showCount
              maxLength={100}
              onChange={(inputValue) => setText(inputValue)}
            />
          </div>
        </List.Item>
      </List>

      <br />
      <Space
        justify="center"
        block
      >

        <Link href='/'>
          <a>
            <Button
              style={{
                '--border-color': 'rgb(49,160,254)',
                'width': 'var(--button-size-big)'
              }}
            >
              取消
            </Button>
          </a>
        </Link>

        <Link href="/">
          <a>
            <Button
              color="primary"
              onClick={handelComfirm}
              style={{ 'width': 'var(--button-size-big)' }}
            >
              确定
            </Button>
          </a>
        </Link>

      </Space>
    </>
  )
}
