export interface AudioModel {
  id: number

  name: string

  size: number

  fileName?: string

  peaks?: number[]

  duratation?: number

  authorId?: number
}

export interface AudioSchema {
  list: AudioModel[]
  
  isLoading: boolean
  isInitial: boolean
}
