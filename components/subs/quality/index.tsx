import React, { useState } from "react";
import { List, Button } from "antd-mobile";
import mod from './quality.module.scss'
import { Input } from "antd-mobile";
import { Card } from "antd-mobile";
import { Empty } from "antd-mobile";

const ParentListHeader = (props: any) => {

  return (
    <div className={mod['list-parent-header']}>
      <span>{props.title}</span>
      <span>得分：{props.score}</span>
    </div>
  )
}

const SubListHeader = (props: any) => {

  return (
    <div className={mod['list-sub-header']}>
      <span>{props.title}</span>
      <Button color="primary" size='mini'>添加</Button>
    </div>
  )
}


export default function Quality() {
  const [score, setScore] = useState(0)

  return (
    <>
      <List header={
        <ParentListHeader title='A.基本素质' score={score} />
      }>
        <div className={mod['list-wrapper']}>
          <List header={<SubListHeader title="A1.思想道德素质（满分 40分）" />}>

            <Empty description="待添加"/>
          </List>
        </div>

        <div className={mod['list-wrapper']}>
          <List header={<SubListHeader title="A1.思想道德素质（满分 40分）" />}>

            <Empty description="待添加"/>
          </List>
        </div>

        <div className={mod['list-wrapper']}>
          <List header={<SubListHeader title="A3.身心素质（满分 20分）" />}>
            
            <Empty description="待添加"/>
          </List>
        </div>
      </List>

    </>
  )
}
