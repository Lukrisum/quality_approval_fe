import { Button, Card, List, Space, Stepper, TextArea } from 'antd-mobile'
import mod_edit from './edit.module.scss'

let scroll: any = null

if (typeof window !== 'undefined') {
  let { scrollManager } = require('../../../utils/scroll_maneger')
  scroll = scrollManager
}

export const Edit = ({ isAdd = false, title = '', score = 0, context = '', ...callbacks }) => {
  const { setEditPopUp, setScore, setContext } = callbacks

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
          className={mod_edit['card-Y']}
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
