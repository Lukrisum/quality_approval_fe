import { atom } from 'jotai'
import { IIssue } from '../../interfaces/interfaces'

export namespace MORAL_QUALITY {
  export const scoreAtom = atom(0.0)
  export const contextAtom = atom('')
  export const idAtom = atom('')
  export const issueListAtom = atom<Array<IIssue>>([])
}
