import { INFOATOM } from '../../../models/info'
import { WritableAtom } from 'jotai'

export interface IInfoItem {
  title: string
  textAtom: WritableAtom<string, string>
  regex?: string
}

export const infoConfigData: Array<IInfoItem> = [
  {
    title: '学号',
    textAtom: INFOATOM.studentIdAtom,
  },
  {
    title: '姓名',
    textAtom: INFOATOM.nameAtom,
  },
  {
    title: '性别',
    textAtom: INFOATOM.sexAtom,
  },
  {
    title: '政治面貌',
    textAtom: INFOATOM.politicsAtom,
  },
  {
    title: '学院',
    textAtom: INFOATOM.facultyAtom,
  },
  {
    title: '班级',
    textAtom: INFOATOM.classNumberAtom,
  },
  {
    title: '寝室号',
    textAtom: INFOATOM.dormitoryNumberAtom,
  },
  {
    title: '担任职务',
    textAtom: INFOATOM.jobAtom,
  },
]
