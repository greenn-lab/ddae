import {ControlUnit, Options} from '../@types/types'

import './sass/default.scss'


export default class Calendar {

  context: HTMLElement

  startDayOfWeek: number

  backyard?: HTMLDivElement

  currentUnit: ControlUnit = 'month'

  constructor(context: HTMLElement, options: Options = {}) {
    this.context = context
    this.startDayOfWeek = options.startDayOfWeek || 0

    this.structure()
    this.addEvents()
  }

  addEvents() {

  }

  private structure(): HTMLDivElement {
    this.backyard = document.querySelector('.tae__backyard') as HTMLDivElement
    if (!this.backyard) {
      this.backyard = document.createElement('div')
      document.body.appendChild(this.backyard)
    }

    const root: HTMLDivElement = document.createElement('div')

    root.innerHTML = ['<figure class="tae">',
      `<header>
        <div class="tae__year-month"/>
        <button class="tae__prev"></button>
        <button class="tae__next"></button>
      </header>
      <ul class="tae__days>"`,
      Array(7).fill('').map(() => '<li class="tae__day-name"></li>').join(''),
      Array(31).fill('').map(() => '<li class="tae__day"></li>').join(''),
      `</ul>
      <ul class="tae__years">`,
      Array(24).fill('').map(() => '<li class="tae__year"></li>').join(''),
      `</ul>
      </figure>`].join('')

    this.context.append(root)

    return root;
  }

}
