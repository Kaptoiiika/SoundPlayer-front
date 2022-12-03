export type QueryParams = Record<string, string | undefined>

export const getQueryParams = (params: QueryParams): string => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value)
    } else {
      searchParams.delete(name)
    }
  })

  return `?${searchParams.toString()}`
}

export const addQueryParams = (params: QueryParams) => {
  window.history.replaceState(null, "", getQueryParams(params))
}
