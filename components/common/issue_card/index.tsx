import mod from "./issue_card.module.scss"
import React, { useEffect, useState } from "react";
import { Button, Card, Dialog, Toast } from "antd-mobile";
import { Empty } from "antd-mobile";
import Link from "next/link";
import { Iissue } from "../../../interfaces/interfaces";
import { useAtom } from "jotai";
import { IDAtom, isAddAtom, titleAtom } from "../../subs/edit";
import useGetList from "../../../utils/get_list";

const IssueItem = (props: any) => {
  const [id, setId] = useAtom(IDAtom)
  const [title, setTitle] = useAtom(titleAtom)

  const getListDelete = () => {
    let newList = [...props.list]

    newList.map((issue, index) => {
      if (issue.id === props.id) {
        newList = newList.splice(0, index).concat(newList.splice(index + 1))
      }
    })

    return newList
  }

  const handelDeleteIssue = async (e: any) => {
    e.stopPropagation()
    e.preventDefault()

    // todo add localhost
    // console.log(props.id.slice(0, 2))
    // localStorage.removeItem(props.id.slice(0, 2))

    // props.setList([])
    const result = await Dialog.confirm({
      content: '确认删除？',
    })
    if (result) {
      Toast.show({ content: '已删除', position: 'bottom' })
      props.setList(getListDelete())
    }
    // else {
    //   Toast.show({ content: '点击了取消', position: 'bottom' })
    // }
    // localStorage.setItem(`${props.id.slice(0, 2)}`,JSON.stringify(getListDelete()))
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
          onClick={() => {
            setId(props.id)
            setTitle(props.parentName)
          }}
        />
      </a>
    </Link>
  )
}

export default function IssueCard(props: any) {
  const [id, setId] = useAtom(IDAtom)
  const [isAdd, setIsAdd] = useAtom(isAddAtom)
  const [title, setTitle] = useAtom(titleAtom)
  const [list, setList] = useGetList(props.cardKey)

  // todo localhost __init
  // useEffect(() => {
  //   if (list.length === 0) {
  //     // todo 
  //     let tempList = JSON.parse(localStorage.getItem(props.cardKey) || '[]')

  //     setList(tempList)
  //   }
  // }, [])

  const getId = (index: number) => {
    return props.cardKey + "__" + index.toString() + "__" + `${Date.now()}`
  }

  return (
    <Card
      title={
        <span className={mod["card-title"]}>
          {props.cardName + props.sign}
        </span>
      }
      extra={
        <Link href="/pages/edit">
          <a>
            <Button
              size="mini"
              onClick={() => {
                setId(getId(list.length))
                setTitle(props.cardName)
                setIsAdd(true)
              }}
            >
              添加
            </Button>
          </a>
        </Link>
      }
    >

      {
        list.length === 0
          ? <Empty description={props.emptyDescription} />
          : list.map((content: Iissue, index: number) => {
            return (
              <IssueItem
                // style __UI
                type={props.type}
                // parent & sub __self
                title={content.title}
                extra={content.score}
                setList={setList}
                list={list}
                key={content.id}
                id={content.id}
                parentName={props.cardName}
              />
            )
          })
      }

    </Card>
  )
}
