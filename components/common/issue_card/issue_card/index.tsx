import { Button, Card } from 'antd-mobile'
import mod_issue_card from './issue_card.module.scss'
import React, { useState, FC } from 'react'
import { Empty } from 'antd-mobile'
import { IIssue } from '../../../../interfaces/interfaces'
import { Edit } from '../edit'
import { useAtom } from 'jotai'
import { IssueItem } from './issue_item'

let scroll: any = null

if (typeof window !== 'undefined') {
  let { scrollManager } = require('../../../../utils/scroll_maneger')
  scroll = scrollManager
}

interface IssueCardProps {
  type: string
  sign: string
  cardName: string
  ATOM: any
}

export const IssueCard: FC<IssueCardProps> = props => {
  const { type = 'Y', sign = '', cardName = '', ATOM } = props

  const [issueList, setIssueList] = useAtom<any>(ATOM.issueListAtom)
  const [editPopUp, setEditPopUp] = useState(false)
  const [score, setScore] = useState<number>(0.0)
  const [context, setContext] = useState<string>('')
  const [id, setId] = useState('')
  const [isAdd, setIsAdd] = useState(true)

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
              setIsAdd(true)
              scroll?.stop()
            }}
          >
            添加
          </Button>
        }
      >
        {issueList.length === 0 ? (
          <Empty description={type === 'Y' ? '无加分事项' : '无扣分事项'} />
        ) : (
          issueList.map((issue: IIssue) => {
            return (
              <IssueItem
                type={type}
                title={cardName}
                score={issue.score}
                context={issue.context}
                id={issue.id}
                key={issue.id}
                issueList={issueList}
                setIsAdd={setIsAdd}
                setIssueList={setIssueList}
                setId={setId}
                setScore={setScore}
                setContext={setContext}
                setEditPopUp={setEditPopUp}
              />
            )
          })
        )}
      </Card>
      {editPopUp ? (
        <Edit
          type={type}
          isAdd={isAdd}
          title={cardName}
          score={score}
          context={context}
          id={id}
          issueList={issueList}
          setEditPopUp={setEditPopUp}
          setScore={setScore}
          setContext={setContext}
          setIssueList={setIssueList}
        />
      ) : (
        <></>
      )}
    </>
  )
}
