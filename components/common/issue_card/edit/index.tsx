import { FC } from 'react'
import { Button, Card, List, Space, Stepper, TextArea } from 'antd-mobile'
import mod_edit from './edit.module.scss'
import { IIssue } from '../../../../interfaces/interfaces'

let scroll: any

if (typeof window !== 'undefined') {
  let { scrollManager } = require('../../../../utils/scroll_maneger')
  scroll = scrollManager
}

interface IEditProps {
  type: string
  isAdd: boolean
  title: string
  score: number
  context: string
  id: string
  issueList: Array<IIssue>
  setEditPopUp: (EditPopUp: boolean) => void
  setScore: (score: number) => void
  setContext: (context: string) => void
  setIssueList: (issueList: Array<IIssue>) => void
}

export const Edit: FC<IEditProps> = props => {
  const {
    type = 'Y',
    title = '',
    context = '',
    score = 0.0,
    isAdd,
    issueList = [],
    id = '',
    setEditPopUp,
    setScore,
    setContext,
    setIssueList,
  } = props

  const getId = (list: Array<any>) => {
    return `${new Date()}_${list.length}`
  }

  const clear = () => {
    setContext('')
    setScore(0.0)
  }

  const handleAddIssue = () => {
    let newIssueList = [...issueList]
    const id = getId(newIssueList)
    newIssueList.push({ score, context, id })
    setIssueList(newIssueList)
    clear()
  }

  const handleUpdatessue = () => {
    const [currentIssue] = issueList.filter(issue => issue.id === id)
    const index = issueList.indexOf(currentIssue)
    const newIssueList = [...issueList]
    const newIssue = { score, context, id }
    newIssueList[index] = newIssue
    setIssueList(newIssueList)
    clear()
  }

  return (
    <div className={mod_edit['total-wrapper']} onClick={e => e.preventDefault()}>
      <div className={mod_edit['card-wrapper']}>
        <Card
          title={
            isAdd ? (
              <span className={mod_edit['span-card-title']}>添加事项</span>
            ) : (
              <span className={mod_edit['span-card-title']}>编辑事项</span>
            )
          }
          extra={<span className={mod_edit['span-card-extra']}>{title}</span>}
          className={type === 'Y' ? mod_edit['card-Y'] : mod_edit['card-N']}
        ></Card>
      </div>
      <br />
      <List>
        <List.Item>
          <Space justify="between" block>
            <span className={mod_edit['span-list-title']}>分值</span>
            <Stepper
              defaultValue={52.0}
              value={score}
              digits={1}
              step={10}
              min={0}
              max={100}
              onChange={value => setScore(value)}
            />
          </Space>
        </List.Item>
        <List.Item>
          <span className={mod_edit['span-list-title']}> 标题 </span>
          <br />
          <div className={mod_edit['textarea-wrapper']}>
            <TextArea
              placeholder="请输入事项内容……"
              value={context}
              autoSize={{ minRows: 3, maxRows: 6 }}
              showCount
              maxLength={100}
              onChange={inputValue => setContext(inputValue)}
            />
          </div>
        </List.Item>
      </List>

      <br />
      <Space justify="center" block>
        <Button
          style={{
            '--border-color': 'rgb(49,160,254)',
            width: 'var(--button-size-big)',
          }}
          onClick={() => {
            setEditPopUp(false)
            scroll?.move()
          }}
        >
          取消
        </Button>

        <Button
          color="primary"
          style={{ width: 'var(--button-size-big)' }}
          onClick={() => {
            const action = isAdd ? handleAddIssue : handleUpdatessue
            console.log(isAdd)
            action()
            setEditPopUp(false)
            scroll?.move()
          }}
        >
          确定
        </Button>
      </Space>
    </div>
  )
}
