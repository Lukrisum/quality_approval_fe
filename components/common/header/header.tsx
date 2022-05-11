import mod from "./header.module.scss"
import React, { useEffect, useState } from "react"
import { Row } from "antd"
import { Col } from "antd"
import Link from "next/link"

export default function Header({ children }: any) {

  const [light,setLight] = useState({
    indexFirst:true,
    indexSecond:false
  })

  useEffect(()=>{
    let newLightState:any = new Object
    if(window.location.pathname !== "/"){
      newLightState = {
        indexFirst:false,
        indexSecond:true
      }
      setLight(newLightState)
    }
  },[])

  return (
    <>
      <Row
        justify={"space-around"}
        className={mod.topNavList}
      >
        <Col span={10} className={light.indexFirst?mod.live:mod.dead}>
          <Link href="/">
            <a>
              首页
            </a>
          </Link>
        </Col>
        <Col span={10} className={light.indexSecond?mod.live:mod.dead}>
        <Link href="/pages/approval">
            <a>
              审批
            </a>
          </Link>
        </Col>
      </Row>
      {children}
    </>
  )
}
