import React from 'react'
import Info from '../../subs/info'
import Quality from '../../subs/quality'
import Innovation from '../../subs/innovation'
import Score from '../../subs/score'
import Submit from '../../subs/submit'

export default function Index() {
  return (
    <>
      {/* 基本信息 */}
      <Info />

      {/* 基本素质（扣分事项） */}
      <Quality />

      {/* 课程成绩 */}
      <Score />

      {/* 实践与创新素质（加分事项） */}
      <Innovation />

      {/* 暂存 or 提交 */}
      <Submit />
    </>
  )
}
