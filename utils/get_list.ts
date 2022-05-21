import {
  qulityIssueListA1,
  qulityIssueListA2,
  qulityIssueListA3
} from "../model/quality";
import {
  innovationIssueListC1,
  innovationIssueListC2,
  innovationIssueListC3
} from "../model/innovation";
import { useAtom } from "jotai";
import { Iissue } from "../interfaces/interfaces";

export default function useGetList(id: string):[Array<Iissue>,any] {

  const [listA1, setListA1] = useAtom(qulityIssueListA1)
  const [listA2, setListA2] = useAtom(qulityIssueListA2)
  const [listA3, setListA3] = useAtom(qulityIssueListA3)
  const [listC1, setListC1] = useAtom(innovationIssueListC1)
  const [listC2, setListC2] = useAtom(innovationIssueListC2)
  const [listC3, setListC3] = useAtom(innovationIssueListC3)

  const selectList = (): any => {
    const list = eval(`list${id}`)
    const setList = eval('setList'+`${id}`)
    return [list,setList]
  }

  return selectList()
}
