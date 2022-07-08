import React, { FC, useState } from 'react'
import { List, Input } from 'antd-mobile'
import ParentListHeader from '../../common/list_header'
import { infoConfigData } from './info.config'
import { InfoItem } from '../../common'

// todo mincu ingredient
export default function Info() {
  // 测评总分(???)
  const [totalScore, setTotalscore] = useState(0)

  // mincu.getInfo() || config
  const [infoList] = useState(infoConfigData)

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
