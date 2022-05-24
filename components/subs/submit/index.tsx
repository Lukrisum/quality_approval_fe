import { Button, Space } from "antd-mobile";
import React from "react";
import mod from "./submit.module.scss"

export default function Submit() {

  const handelPop = () => {

  }

  return (
    <div className={mod["submit-wrapper"]}>
      <Space
        justify="center"
        block
      >
        <Button
          style={{
            '--border-color': 'rgb(49,160,254)',
            'width': 'var(--button-size-big)'
          }}
          onClick={handelPop}
        >
          暂 存
        </Button>

        <Button
          color="primary"
          style={{
            'width': 'var(--button-size-big)'
          }}
        >
          提 交
        </Button>

      </Space>
    </div>
  )
}
