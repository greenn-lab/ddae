export const drawYears = ({yearCells}, options) => {
  yearCells.forEach((cell, i) => cell.innerHTML = options.firstYear + i)
}

export const drawDates = ({root, dayCells, yearMonth}, options) => {
  drawHeader(yearMonth, options)

  const {currently} = options
  const firstDate = new Date(currently.getFullYear(), currently.getMonth(), 1)

  console.log('drawDates', currently)

  dayCells[0]
      .style.marginLeft = `calc(100% / 7 * ${firstDate.getDay()})`

  const lastDateOfMonth = getLastDateOfMonth(firstDate)

  dayCells.forEach((cell, i) =>
      cell.innerHTML = lastDateOfMonth > i ? i + 1 : '')
}

const getLastDateOfMonth = (date) => {
  date.setMonth(date.getMonth() + 1);
  date.setDate(0)

  return date.getDate()
}

const drawHeader = (yearMonth, options) => {
  const {currently} = options

  yearMonth.innerHTML =
      `${currently.getFullYear()}. ${options.name.months[currently.getMonth()]}`
}
