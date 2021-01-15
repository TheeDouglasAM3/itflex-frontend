export const convertKevinToCelsius = (kevin: number): number => {
  const kelvinDifference = 273.15
  return Number((kevin - kelvinDifference).toFixed(0))
}
