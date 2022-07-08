import { List } from 'antd-mobile'
import React, { useState } from 'react'
import { IssueCard } from '../../common/issue_card/issue_card'
import ParentListHeader from '../../common/list_header'
import { SOCIAL_ACTIVITY } from '../../../models/innovation/social_activity'
import { COMPETITION } from '../../../models/innovation/competition'
import { FACULTY_BONUS } from '../../../models/innovation/faculty_bonus'

export default function Innovation() {
  const [score, setScore] = useState(100)

  return (
    <List header={<ParentListHeader title="🏆 加分事项（满分：100）" extra={`得分：${score}`} />}>
      <IssueCard type="Y" sign="（累计加分不超过 60分）" cardName="科技创新、学科与文体活动竞赛" ATOM={COMPETITION} />
      <IssueCard type="Y" sign="（累计加分不超过 20分）" cardName="社会活动与社会服务" ATOM={SOCIAL_ACTIVITY} />
      <IssueCard type="Y" sign="（累计加分不超过 20分）" cardName="学院自主加分" ATOM={FACULTY_BONUS} />
    </List>
  )
}
