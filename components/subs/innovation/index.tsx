import { List } from "antd-mobile";
import React,{useState} from "react";
import IssueCard from "../../common/issue_card";
import  ParentListHeader  from "../../common/list_header";

export default function Innovation() {
  const [score,setScore] = useState(100)

  return (
    <List
      header={<ParentListHeader title="🏆 加分事项（满分：100）" extra={`得分：${score}`}/>}
    >
      <IssueCard type="Y" cardName="科技创新、学科与文体活动竞赛（累计加分不超过 60分）" cardKey="C1" emptyDescription="无加分事项"></IssueCard>
      <IssueCard type="Y" cardName="社会活动与社会服务（累计加分不超过 20分）" cardKey="C2" emptyDescription="无加分事项"></IssueCard>
      <IssueCard type="Y" cardName="学院自主加分（累计加分不超过 20分）" cardKey="C3" emptyDescription="无加分事项"></IssueCard>
    </List>
  )
}
