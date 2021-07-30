import {DEFAULT_OPTIONS, MODE_DAILY, MODE_YEARLY} from "./index";
import {drawDates, drawHeader, drawYears} from "./draws";
import events from "./events";

import './sass/default.scss'

// variables
const contexts = new Map()
let context = {}

// functions
export const open = (movement = 0) => {
  if (MODE_DAILY === context.mode) {
    openDates(movement)
  } else {
    openYears(movement)
  }


  context.scenery.classList.add('ddae__scenery--active')
}

export const close = () => {
  context.scenery.classList.remove('ddae__scenery--active')
}

export const changeMode = () => {
  context.mode = MODE_DAILY === context.mode ? MODE_YEARLY : MODE_DAILY
  open()
}

const openDates = (movement) => {
  context.now.setMonth(context.now.getMonth() + movement)
  drawDates(context)

  drawHeader(context)
}

const openYears = (movement) => {
  context.firstOfYears += context.years.length * movement
  drawYears(context)
}

export const defineContext = (target, options) => {
  if (!contexts.has(target)) {
    contexts.set(target, Object.assign({}, DEFAULT_OPTIONS, options))
  }

  context = contexts.get(target)
}

const createElements = () => {
  const root = document.createElement('figure')
  root.classList.add('ddae')
  root.innerHTML = [`
    <header>
      <div class="ddae__title"></div>
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

  const scenery = document.createElement('div')
  scenery.classList.add('ddae__scenery')
  context.inline && scenery.classList.add('ddae__scenery--inline')
  scenery.appendChild(root)

  context.container.appendChild(scenery)

  selectElements()

  events(context)
}

const defineElements = (target) => {
  if (!context.container.querySelector(':scope > .ddae')) {
    createElements()
  } else {
    selectElements()
  }

  const {x, y} = target.getBoundingClientRect();
  context.root.style.marginLeft = `${x}px`
  context.root.style.marginTop = `${y}px`
}

const selectElements = () => {
  context.scenery = context.container.querySelector(':scope > .ddae__scenery')
  context.root = context.scenery.querySelector('.ddae')
  context.title = context.scenery.querySelector('.ddae__title')
  context.days = context.scenery.querySelectorAll('.ddae__day')
  context.years = context.scenery.querySelectorAll('.ddae__year')
}

export default (target, options = {}) => {
  defineContext(target, options)
  defineElements(target)

  context.target = target
  context.now = new Date()
  context.firstOfYears = context.now.getFullYear()
      - context.now.getFullYear() % context.years.length

  open()

  return {
    open,
    close,
    context
  }
}
