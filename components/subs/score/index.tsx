import { List, Input, Radio, Space } from 'antd-mobile'
import React, { useState } from 'react'
import mod from './score.module.scss'
import ParentListHeader from '../../common/list_header'

export default function Score() {
  const [score, setScore] = useState(0)

  const [isAveScoreEmpty, setIsAveScoreEmpty] = useState(true)
  const [isCheck, setIsCheck] = useState(false)
  const [isSubjectEmpty, setIsSubjectEmpty] = useState(true)

  return (
    <List header={<ParentListHeader title="📈 课程学习成绩" extra={`得分：${score}`} />}>
      <List.Item
        extra={
          <Input
            placeholder="请输入平均学分绩点"
            style={{
              '--text-align': 'right',
              '--font-size': 'var(--font-size-big)',
            }}
            clearable
          />
        }
      >
        <div className={mod['left-title']}>
          {(function () {
            if (isSubjectEmpty) {
              return <span> * </span>
            }
          })()}
          <span>平均学分绩点</span>
        </div>
      </List.Item>

      <List.Item>
        <Space justify="between" block>
          <div className={mod['left-title']}>
            {(function () {
              if (!isCheck) {
                return <span>* </span>
              }
            })()}
            <span>是否有不及格科目</span>
          </div>

          <Radio.Group>
            <Space
              style={{
                '--gap-horizontal': '1rem',
              }}
            >
              <Radio
                value="radio1"
                style={{
                  '--icon-size': '1.8rem',
                  '--font-size': 'var(--font-size-big)',
                  '--gap': '.6rem',
                }}
              >
                是
              </Radio>
              <Radio
                value="radio2"
                style={{
                  '--icon-size': '1.8rem',
                  '--font-size': 'var(--font-size-normal)',
                  '--gap': '.6rem',
                }}
              >
                否
              </Radio>
            </Space>
          </Radio.Group>
        </Space>
      </List.Item>

      <List.Item
        extra={
          <Input
            placeholder="请输入平均学分绩点"
            style={{
              '--text-align': 'right',
              '--font-size': 'var(--font-size-big)',
            }}
            clearable
          />
        }
      >
        <div className={mod['left-title']}>
          {(function () {
            if (isSubjectEmpty) {
              return <span>* </span>
            }
          })()}
          <span>不及格科目</span>
        </div>
      </List.Item>
    </List>
  )
}
