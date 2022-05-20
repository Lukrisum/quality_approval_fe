import { atom } from "jotai"; 
import { Iissue } from "../interfaces/interfaces";

// function fuckNext(){
//   if(typeof window !== 'undefined') return JSON.parse(localStorage.getItem('A1')||'[]')
//   return []
// }

export const testAtom = atom<Array<Iissue>>([])
// export const testAtom = atom<Array<Iissue>>(fuckNext()||[])