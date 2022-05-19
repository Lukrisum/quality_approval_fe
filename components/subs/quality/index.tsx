import React, { useState } from "react";
import { List } from "antd-mobile";
import ParentListHeader from "../../common/list_header";
import IssueCard from "../../common/issue_card";

export default function Quality() {
  const [score, setScore] = useState(100)

  return (
    <List
      header={
        <ParentListHeader title='🚨 扣分事项（满分 100分）' extra={`得分：${score}`} />
      }
    >
      <IssueCard type='N' cardName="思想道德素质（满分 40分）" cardKey="A1" emptyDescription="无扣分事项"></IssueCard>
      <IssueCard type='N' cardName="日常行为规范（满分 40分）" cardKey="A2" emptyDescription="无扣分事项"></IssueCard>
      <IssueCard type='N' cardName="身心素质（满分 20分）" cardKey="A3" emptyDescription="无扣分事项"></IssueCard>
    </List>
  )
}
