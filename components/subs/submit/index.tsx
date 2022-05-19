import { Button, Space } from "antd-mobile";
import React from "react";
import mod from "./submit.module.scss"

export default function Submit() {
  return (
    <div className={mod["submit-wrapper"]}>
      <Space
        justify="center"
        style={{
          '--gap-horizontal': '1.3rem'
        }}
        block
      >
        <Button
          style={{
            '--border-color':'rgb(22,119,255)'
          }}
        >
          暂 存
        </Button>
        <Button color="primary">提 交</Button>
      </Space>
    </div>
  )
}
