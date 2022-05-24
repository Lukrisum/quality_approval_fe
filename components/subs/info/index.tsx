import React, { useState } from "react";
import { Card, Divider, List } from "antd-mobile";
import ParentListHeader from "../../common/list_header";
import { Iinfo } from "../../../interfaces/interfaces";

export default function Info() {

  //获取测评总分
  const [totalScore, setTotalscore] = useState(0)

  // 通过 mincu 获取基本信息（拿不到的自己填 
  const [basicInfo, setBasicInfo] = useState<Iinfo>(
    {
      code: '',
      name: '',
      sex: '',
      politics: '',
      faculty: '',
      class: '',
      room: '',
      job: ''
    }
  )

  return (
    <>
      <List
        header={<ParentListHeader title="📋 基本信息" extra={`测评总分：${totalScore}`} />}
        style={{
          '--font-size': 'var(--font-size-big)'
        }}
      >
        <List.Item extra={basicInfo.code}>
          学号
        </List.Item>
        <List.Item extra={basicInfo.name}>
          姓名
        </List.Item>
        <List.Item extra={basicInfo.sex}>
          性别
        </List.Item>
        <List.Item extra={basicInfo.politics}>
          政治面貌
        </List.Item>
        <List.Item extra={basicInfo.faculty}>
          学院
        </List.Item>
        <List.Item extra={basicInfo.class}>
          班级
        </List.Item>
        <List.Item extra={basicInfo.room}>
          寝室号
        </List.Item>
        <List.Item extra={basicInfo.job}>
          担任职务
        </List.Item>
      </List>
    </>
  )
}
