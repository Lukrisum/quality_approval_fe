import React, { useState } from "react";
import { Card, Divider, List } from "antd-mobile";
import mod from "./info.module.scss";

const ListHeader = () => {
  return(
    <div>
      <span ></span>
      <span></span>
    </div>
  )
}

export default function Info() {

  //获取测评总分
  const [totalScore, setTotalscore] = useState(0)

  // 通过 mincu 获取基本信息（拿不到的自己填 
  const [basicInfo, setBasicInfo] = useState({

  })

  return (
    <>
      
      <List>

      </List>
    </>
  )
}

{/* <Card
        title={'📄 基本信息'}
        extra={
          <span style={{ color: 'red' }}>
            测评总分：{totalScore}
          </span>
        }
        className={mod['card-header']}
      >
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>学号</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>姓名</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>性别</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>政治面貌</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>学院</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>班级</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>寝室号</span>
          <span></span>
        </div>
        <Divider />
        <div className={mod['card-items']}>
          <span className={mod['card-items-title']}>担任职务</span>
          <span></span>
        </div>
      </Card> */}