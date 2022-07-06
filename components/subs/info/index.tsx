import React, { FC, useState } from 'react'
import { List, Input } from 'antd-mobile'
import ParentListHeader from '../../common/list_header'
import { useAtom } from 'jotai'
import { IInfoItem, infoConfigData } from './info.config'
import mod from './info.module.scss'
import { INFOATOM } from '../../../models/info'
// todo ingredient regex
export default function Info() {
  // 测评总分
  const [totalScore, setTotalscore] = useState(0)

  // from mincu
  const [infoList, setInfoList] = useState(infoConfigData)

  const InfoItem: FC<IInfoItem> = props => {
    const { title = '', textAtom, regex = '' } = props

    const [text, setText] = useAtom(textAtom)

    return (
      <List.Item
        extra={
          <div className={mod['input-wrapper']}>
            <Input
              value={text}
              placeholder={`请输入${title}`}
              style={{
                '--text-align': 'right',
                '--font-size': 'var(--font-size-big)',
              }}
              onChange={val => {
                setText(val)
              }}
              clearable
            />
          </div>
        }
      >
        {title}
      </List.Item>
    )
  }

  return (
    <>
      <List
        header={<ParentListHeader title="📋 基本信息" extra={`测评总分：${totalScore}`} />}
        style={{
          '--font-size': 'var(--font-size-big)',
        }}
      >
        {infoList.map((item, index) => {
          return <InfoItem title={item.title} key={index} textAtom={item.textAtom} regex={''} />
        })}
      </List>
    </>
  )
}
