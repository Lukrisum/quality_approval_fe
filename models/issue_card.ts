import { Atom, atom } from 'jotai'

interface IIssue {
  score: number
  context: string
}

export const scoreAtom = atom(0.0)
export const contextAtom = atom('')
export const idAtom = atom('')

export const issueATOM = atom<Array<IIssue>>([])

// // atoms of a issue
// export const scoreAtom = atom(0.0)
// export const contextAtom = atom('');export const idAtom = atom('')

// // atom of issueList
// const issueATOM = atom<Array<IIssue>>([])

// // current issue
// const currentIssue = atom<IIssue | null>(null)

// //
// export const selectIssueAtom = atom(
//   (get) => get(currentIssue),
//   (get, set, issueAtom: Atom<IIssue>) => {
//     const { score, context } = get(issueAtom)
//     set(scoreAtom, score)
//     set(contextAtom, context)
//   }
// )

// // 仅更新atom，创建列表的新项
// export const createItemAtom = atom(null, (get, set) => {
//   const score = get(scoreAtom);
//   const context = get(contextAtom);

//   // todo
//   if (score && context) {
//     const itemAtom = atom({ score, context });
//     set(issueATOM, (prev): any => [...prev, itemAtom]);
//     set(scoreAtom, 0.0);
//     set(contextAtom, "");
//   }
// });

// //
// export const updateItemAtom = atom(null, (get, set) => {
//   const score = get(scoreAtom);
//   const context = get(contextAtom);
//   const current = get(selectIssueAtom);
//   if (score && context && current) {
//     set(current, { score, context });
//   }
// });

// // 仅更新atom，删除列表中选中的单项atom
// export const deleteItemAtom = atom(null, (get, set) => {
//   const current = get(selectIssueAtom);
//   if (current) {
//     set(issueATOM, (prev) => prev.filter((item) => item !== current));
//   }
// });
