import { FC } from 'react'
import { List, Input } from 'antd-mobile'
import { useAtom } from 'jotai'
import { WritableAtom } from 'jotai'

interface IInfoItemProps {
  title: string
  textAtom: WritableAtom<string, string>
  regex?: string
}

// todo ingredient regex
export const InfoItem: FC<IInfoItemProps> = props => {
  const { title = '', textAtom, regex = '' } = props

  const [text, setText] = useAtom(textAtom)

  return (
    <List.Item
      extra={
        <Input
          value={text}
          placeholder={`请输入${title}`}
          style={{
            '--text-align': 'right',
            '--font-size': 'var(--font-size-big)',
          }}
          onChange={val => {
            setText(val)
          }}
          clearable
        />
      }
    >
      {title}
    </List.Item>
  )
}
