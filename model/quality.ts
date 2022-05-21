import { atom } from "jotai"; 
import { Iissue } from "../interfaces/interfaces";

// function fuckNext(){
//   if(typeof window !== 'undefined') return JSON.parse(localStorage.getItem('A1')||'[]')
//   return []
// }

// export const qulityIssueList = new IssueList('A1')

export const qulityIssueListA1 = atom<Array<Iissue>>([])
export const qulityIssueListA2 = atom<Array<Iissue>>([])
export const qulityIssueListA3 = atom<Array<Iissue>>([])

// export const testAtom = atom<Array<Iissue>>(fuckNext()||[])

