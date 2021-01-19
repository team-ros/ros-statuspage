import { observable } from "mobx";

class SelectionStore {
    @observable selection: string | null = null
}

export const selectionStore = new SelectionStore()