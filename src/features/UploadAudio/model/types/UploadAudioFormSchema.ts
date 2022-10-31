export interface UploadAudioFormSchema {
  name: string
  audio?: UploadAudioFile

  audioIsLoaded?: boolean
  isloading: boolean
  error?: string
}

export interface UploadAudioFile {
  name: string
  blob: Blob
}
