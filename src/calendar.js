import {drawDates, drawYears} from "./draws";
import events from "./events";

import './sass/default.scss'

const contexts = new Map()
const element = {}

let options = {}

export const on = () => {
  element.scenery.classList.add('ddae__scenery--active')

  if ('daily' === options.mode) {
    drawDates(element, options)
  } else {
    drawYears(element, options)
  }
}

const off = () => {
  element.scenery.classList.remove('ddae__scenery--active')
}

export const mode = () => {
  if ('daily' === options.mode) {
    options.mode = 'yearly'
    element.root.classList.add('ddae--yearly')
  } else {
    options.mode = 'daily'
    element.root.classList.remove('ddae--yearly')
  }

  on()
}

const initialize = (context, _options) => {
  if (!contexts.has(context)) {
    contexts.set(context, Object.assign({
      mode: 'daily',
      name: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec']
      }
    }, _options))
  }

  options = contexts.get(context)

  structuring()
}

export const structuring = () => {
  if (document.querySelector('.ddae')) {
    return
  }

  element.root = document.createElement('figure')

  element.root.classList.add('ddae')
  element.root.innerHTML = [
    `<header>
      <div class="ddae__year-month"></div>
      <button class="ddae__btn-prev"></button>
      <button class="ddae__btn-next"></button>
    </header>
    <ul class="ddae__days">`,
    Array(7).fill('').map(() => '<li class="ddae__day-name"></li>').join(''),
    Array(31).fill('').map(() => '<li class="ddae__day"></li>').join(''),
    `</ul>
    <ul class="ddae__years">`,
    Array(24).fill('').map(() => '<li class="ddae__year"></li>').join(''),
    `</ul>`
  ].join('')

  element.scenery = document.createElement('div')
  element.scenery.classList.add('ddae__scenery')
  element.scenery.appendChild(element.root)

  element.yearMonth = element.root.querySelector('.ddae__year-month')
  element.button = {
    prev: element.root.querySelector('.ddae__btn-prev'),
    next: element.root.querySelector('.ddae__btn-next')
  }
  element.days = element.root.querySelector('.ddae__days')
  element.dayCells = element.days.querySelectorAll('.ddae__day')
  element.years = element.root.querySelector('.ddae__years')
  element.yearCells = element.years.querySelectorAll('.ddae__year')

  document.body.appendChild(element.scenery)

  events(element, options)
}

const ready = (context) => {
  const {x, y} = context.getBoundingClientRect();
  element.root.style.marginLeft = `${x}px`
  element.root.style.marginTop = `${y}px`

  element.days.querySelectorAll('.ddae__day-name')
  .forEach((cell, i) =>
      cell.innerHTML = options.name.days[i])

  options.currently = new Date()
  options.firstYear = options.currently.getFullYear()
}

export default function (context, _options = {}) {
  initialize(context, _options)

  ready(context)

  return {
    on,
    off
  }
}
