import { AudioModel } from "./audioModel"

export interface AudioSchema {
  list: AudioModel[]

  isLoading: boolean
  isInitial: boolean
}
