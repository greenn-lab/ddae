export const drawYears = ({root, years, firstOfYears}) => {
  root.classList.add('ddae--yearly')
  years.forEach((cell, i) => cell.innerHTML = firstOfYears + i)
}

export const drawTitle = ({title, now, name: {months}}) => {
  title.innerHTML = `${now.getFullYear()}. ${months[now.getMonth()]}`
}

export const drawDates = ({root, days, now, name}) => {
  root.classList.remove('ddae--yearly')

  const firstDate = new Date(now.getFullYear(), now.getMonth(), 1)

  root.querySelectorAll('.ddae__day-name')
  .forEach((day, i) => day.textContent = name.days[i])

  days[0]
      .style.marginLeft = `calc(100% / 7 * ${firstDate.getDay()})`

  const lastDateOfMonth = getLastDateOfMonth(firstDate)

  days.forEach((cell, i) =>
      cell.innerHTML = lastDateOfMonth > i ? i + 1 : '')
}

const getLastDateOfMonth = (date) => {
  date.setMonth(date.getMonth() + 1);
  date.setDate(0)

  return date.getDate()
}
