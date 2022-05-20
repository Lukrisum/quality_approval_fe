import mod from "./issue_card.module.scss"
import React, { useEffect, useState } from "react";
import { Button, Card } from "antd-mobile";
import { Empty } from "antd-mobile";
import Link from "next/link";
import { Iissue } from "../../../interfaces/interfaces";

import { testAtom } from "../../../model/quality";
import { useAtom } from "jotai";
import { ID } from "../../subs/edit";

const IssueItem = (props: any) => {
  const [IdAtom,setIdAtom] = useAtom(ID)

  const skipToEdit = () => {

  }

  const handelDeleteIssue = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    localStorage.removeItem(props.id)
    props.setList([])
  }

  return (
    <Link href="./pages/edit">
      <a>
        <Card
          title={
            <span className={mod['item-title']}>{props.title}</span>
          }
          extra={
            <>
              <span className={mod['item-extra']}>{props.extra}</span>
              <Button size="mini" onClick={(e) => handelDeleteIssue(e)}>删除</Button>
            </>
          }
          className={(props.type === 'Y') ? mod['item-wrapper-Y'] : mod['item-wrapper-N']}
          onClick={()=>{setIdAtom(props.id)}}
        />
      </a>
    </Link>
  )
}

export default function IssueCard(props: any) {

  const [list, setList] = useAtom(testAtom)
  const [isPop, setIsPop] = useState(false)
  const [issue, setIssue] = useState()

  console.log(list)

  const handelAddIssue = (issue: Iissue) => {
    setIsPop(true)
    if (issue !== undefined) {
      let newList = [...list]
      newList.push(issue)
      localStorage.setItem(props.cardKey, JSON.stringify(newList))
      setList(newList)
    }
  }

  useEffect(() => {
    if (list.length === 0) {
      let tempList = JSON.parse(localStorage.getItem(props.cardKey) || '[]')
      setList(tempList)
    }
  }, [])

  const getId = (index: number) => {
    return props.cardKey + "__" + index.toString() + "__" + `${Date.now()}`
  }

  return (
    <Card
      title={
        <span className={mod["card-title"]}>
          {props.cardName}
        </span>
      }
      extra={
        <Button
          size="mini"
          // todo id 的 index = {list.length - 1}
          onClick={() => handelAddIssue({ title: "nmmsl", score: 200, id:`${getId(list.length)}` })}
        >
          添加
        </Button>
      }
    >

      {
        list.length == 0
          ? <Empty description={props.emptyDescription} />
          : list.map((content: Iissue, index: number) => {
            return (
              <IssueItem
                title={content.title}
                extra={content.score}
                setList={setList}
                type={props.type}
                key={content.id}
                id={content.id}
              />
            )
          })
      }

    </Card>
  )
}
