export const strParser = (str) => {
  return eval('({obj:[' + str + ']})')
}
