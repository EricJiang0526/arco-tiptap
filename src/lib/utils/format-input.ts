export const formatMenuInput = (menuInput: String | Array<String>) => {
  let list: Array<String> = []
  if (Array.isArray(menuInput)) {
    list = menuInput
  } else if (typeof menuInput === 'string') {
    list = menuInput.split(' ')
  }

  return list.map((item) => item.trim()).filter((item) => item)
}
