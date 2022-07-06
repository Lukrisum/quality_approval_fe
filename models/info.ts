import { atom } from 'jotai'

export namespace INFOATOM {
  export const studentIdAtom = atom('')
  export const nameAtom = atom('')
  export const sexAtom = atom('')
  export const politicsAtom = atom('')
  export const facultyAtom = atom('')
  export const classNumberAtom = atom('')
  export const dormitoryNumberAtom = atom('')
  export const jobAtom = atom('')
}

export const infoAtom = atom(null, (get, set, update) => {
  set(infoAtom, update)
})
