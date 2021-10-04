
import type {UnwrapRef} from 'vue'

export interface StoreState {
  msg: string,
  duanziList: any[],
}

export interface IStore {
  state: UnwrapRef<StoreState>,
  setMessage: Function,
  setDzList: Function,
}