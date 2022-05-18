export default function useSyncState(init) {
  let state = init
  
  return [state, syncSetState]
}