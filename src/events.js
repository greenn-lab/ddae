import {mode, on} from "./calendar";

export default function (element, options) {
  const {
    scenery,
    root,
    yearMonth,
    button,
    yearCells,
    years
  } = element

  document.addEventListener('keyup', e => {
    if (/Esc|Escape/.test(e.key)) {
      scenery.classList.remove('ddae__scenery--active')
    }
  })

  scenery.addEventListener('click', () => {
    scenery.classList.remove('ddae__scenery--active')
  })

  root.addEventListener('click', e => {
    e.stopPropagation()
  })

  yearMonth.addEventListener('click', () => {
    options.firstYear = options.currently.getFullYear()
    mode()
  })

  button.prev.addEventListener('click', () => {
    if ('daily' === options.mode) {
      const {currently} = options
      const prevMonth = currently.getMonth() - 1

      currently.setMonth(prevMonth)
    } else {
      options.firstYear -= yearCells.length
    }

    on()
  })

  button.next.addEventListener('click', () => {
    if ('daily' === options.mode) {
      const {currently} = options
      const nextMonth = currently.getMonth() + 1

      currently.setMonth(nextMonth)
    } else {
      options.firstYear += yearCells.length
    }

    on()
  })

  years.addEventListener('click', e => {
    options.currently.setFullYear(Number(e.target.textContent))
    console.log(options.currently, e.target.textContent)
    mode()
  })
}
