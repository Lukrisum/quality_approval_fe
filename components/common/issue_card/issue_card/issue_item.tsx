import { FC, useState } from 'react'
import { Button, Card, Dialog, Toast } from 'antd-mobile'
import mod_issue_card from './issue_card.module.scss'
import { IIssue } from '../../../../interfaces/interfaces'
import { Edit } from '../edit'
import { useEffect } from 'react'

let scroll: any

if (typeof window !== 'undefined') {
  let { scrollManager } = require('../../../../utils/scroll_maneger')
  scroll = scrollManager
}

interface IIssueItemProps {
  title: string
  id: string
  type: string
  score: number
  context: string
  issueList: Array<IIssue>
  setIssueList: (issueList: Array<IIssue>) => void
  setScore: (score: number) => void
  setContext: (context: string) => void
  setId: (id: string) => void
  setEditPopUp: (editPopUp: boolean) => void
  setIsAdd: (isAdd: boolean) => void
}

export const IssueItem: FC<IIssueItemProps> = props => {
  const { type, score, context, id, issueList, setIssueList, setScore, setContext, setId, setEditPopUp, setIsAdd } =
    props

  const handelDeleteIssue = async (e: any) => {
    e.stopPropagation()
    e.preventDefault()

    const newIssueList = issueList.filter(issue => issue.id !== id)
    // todo add localhost
    const result = await Dialog.confirm({
      content: '确认删除？',
    })
    if (result) {
      setIssueList(newIssueList)
      Toast.show({ content: '已删除', position: 'bottom' })
      setScore(0.0)
      setContext('')
    }
  }

  return (
    <>
      <Card
        title={<span className={mod_issue_card['item-title']}>{context}</span>}
        extra={
          <>
            <span className={mod_issue_card['item-extra']}>{score}</span>
            <Button size="mini" onClick={e => handelDeleteIssue(e)}>
              删除
            </Button>
          </>
        }
        className={type === 'Y' ? mod_issue_card['item-wrapper-Y'] : mod_issue_card['item-wrapper-N']}
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()

          setScore(score)
          setContext(context)
          setId(id)
          setIsAdd(false)
          setEditPopUp(true)
          scroll?.stop()
        }}
      />
    </>
  )
}
