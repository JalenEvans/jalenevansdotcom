export const formatTitle = (title: string): string => {
  let result = title.split('-')
  result = result.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1),
  )
  return result.join(' ')
}

export const dateFormatter = Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
