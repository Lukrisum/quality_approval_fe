import React, { useState } from 'react'
import { List } from 'antd-mobile'
import ParentListHeader from '../../common/list_header'
import { IssueCard } from '../../common/issue_card/issue_card'
import { MORAL_QUALITY } from '../../../models/quality/moral_quality'
import { BEHAVIOR } from '../../../models/quality/behavior'
import { PHYSICAL_MENTAL_QUALITY } from '../../../models/quality/physical_mental_quality'

export default function Quality() {
  const [score, setScore] = useState(100)

  return (
    <List header={<ParentListHeader title="🚨 扣分事项（满分：100）" extra={`得分：${score}`} />}>
      <IssueCard type="N" sign="（满分 40分）" cardName="思想道德素质" ATOM={MORAL_QUALITY} />
      <IssueCard type="N" sign="（满分 40分）" cardName="日常行为规范" ATOM={BEHAVIOR} />
      <IssueCard type="N" sign="（满分 20分）" cardName="身心素质" ATOM={PHYSICAL_MENTAL_QUALITY} />
    </List>
  )
}
