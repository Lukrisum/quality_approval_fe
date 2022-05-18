import mod from "./issue_card.module.scss"
import React, { useEffect, useState } from "react";
import { Button, Card } from "antd-mobile";
import { Empty } from "antd-mobile";
import { Iissue } from "../../../interfaces/interfaces";

const IssueItem = (props: any) => {

  const skipToEdit = () => {

  }

  const handelDeleteIssue = (e: any) => {
    e.stopPropagation()
    localStorage.removeItem(props.id)
    props.setList([])
  }

  return (
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
      className={mod['item-wrapper']}
      onClick={() => handelDeleteIssue(props.id)}
    />
  )
}

export default function IssueCard(props: any) {

  const [list, setList] = useState([])
  const [isPop, setIsPop] = useState(false)
  const [issue, setIssue] = useState()

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

  return (
    <Card
      title={props.cardName}
      extra={
        <Button
          size="mini"
          onClick={() => handelAddIssue({ title: "nmmsl", score: 200 })}
        >添加
        </Button>
      }
    >

      {
        list.length == 0
          ? <Empty description="无扣分事项" />
          : list?.map((content: Iissue, index) => {
            return (
              <IssueItem
                title={content.title}
                extra={content.score}
                key={index || 0}
                id={props.cardKey}
                setList={setList}
              />
            )
          })
      }

    </Card>
  )
}
