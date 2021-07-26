export default class Calendar {

  context: HTMLElement

  backyard?: HTMLDivElement

  startDayOfWeek: number

  currently: Currently = this.getCurrently()


  constructor(context: Element | null, options: Options = {}) {
    if (null === context) {
      throw new Error('calendar context is required!')
    }

    this.context = context as HTMLElement
    this.startDayOfWeek = options.startDayOfWeek || 0

    this.structure()
    this.addEvents()
  }

  addEvents() {
  }

  private getCurrently(date?: Date): Currently {
    const today = date || new Date()

    return {
      control: 'day',
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate()
    }
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
