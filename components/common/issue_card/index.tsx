import { Button, Card, Dialog, Toast } from 'antd-mobile'
import mod_issue_card from './issue_card.module.scss'
import React, { useState } from 'react'
import { Empty } from 'antd-mobile'
import { IIssue } from '../../../interfaces/interfaces'
import { Edit } from './edit'

let scroll: any = null

if (typeof window !== 'undefined') {
  let { scrollManager } = require('../../../utils/scroll_maneger')
  scroll = scrollManager
}

export default function IssueCard({ type = 'Y', sign = '', cardName = '', ...props }) {
  const [editPopUp, setEditPopUp] = useState(false)
  const [list, setList] = useState([])

  // todo localhost __init

  return (
    <>
      <Card
        title={<span className={mod_issue_card['card-title']}>{cardName + sign}</span>}
        extra={
          <Button
            size="mini"
            onClick={() => {
              setEditPopUp(true)
              scroll?.stop()
            }}
          >
            添加
          </Button>
        }
      >
        {list.length === 0 ? (
          <Empty description={type === 'Y' ? '无加分事项' : '无扣分事项'} />
        ) : (
          list.map((content: IIssue) => {
            return (
              <IssueItem
                // style __UI
                type={type}
                // parent & sub __self
                title={content.title}
                extra={content.score}
                setList={setList}
                list={list}
                key={content.id}
                id={content.id}
                parentName={cardName}
              />
            )
          })
        )}
      </Card>
      {editPopUp ? <Edit isAdd={true} title={cardName} setEditPopUp={setEditPopUp} /> : <></>}
    </>
  )
}

const IssueItem = ({ title = '', type = '', extra = 0.0, list, id = '', cardName = '', ...callbacks }: any) => {
  const { setList } = callbacks
  const [editPopUp, setEditPopUp] = useState(false)

  const getListDelete = () => {
    let newList = [...list]

    newList.map((issue, index) => {
      if (issue.id === id) {
        newList = newList.splice(0, index).concat(newList.splice(index + 1))
      }
    })

    return newList
  }

  const handelDeleteIssue = async (e: any) => {
    e.stopPropagation()
    e.preventDefault()

    // todo add localhost
    const result = await Dialog.confirm({
      content: '确认删除？',
    })
    if (result) {
      Toast.show({ content: '已删除', position: 'bottom' })
      setList(getListDelete())
    }
  }

  return (
    <>
      <Card
        title={<span className={mod_issue_card['item-title']}>{title}</span>}
        extra={
          <>
            <span className={mod_issue_card['item-extra']}>{extra}</span>
            <Button size="mini" onClick={e => handelDeleteIssue(e)}>
              删除
            </Button>
          </>
        }
        className={type === 'Y' ? mod_issue_card['item-wrapper-Y'] : mod_issue_card['item-wrapper-N']}
        onClick={() => {
          setEditPopUp(true)
          scroll?.stop()
        }}
      />
      {editPopUp ? <Edit isAdd={true} title={cardName} setEditPopUp={setEditPopUp} /> : <></>}
    </>
  )
}
