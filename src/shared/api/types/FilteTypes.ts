export interface FileRespounce {
  id: number
  url: string
  name?: string
  alternativeText?: string
  width?: number
  height?: number
  hash?: string
  ext?: string
  mime?: string
  size?: number
  previewUrl?: string
  provider?: string
  createdAt?: string
  updatedAt?: string
  // ??
  caption?: any
  formats?: any
  provider_metadata?: any
}
