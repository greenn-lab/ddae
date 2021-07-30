import {changeMode, close, defineContext, open} from './calendar'

export default function (context) {
  const {
    inline,
    scenery,
    root
  } = context

  !inline && document.addEventListener('keyup', e => {
    if (/Esc|Escape/.test(e.key)) {
      close()
    }
  })

  !inline && scenery.addEventListener('click', () => {
    close()
  })

  root.addEventListener('click', e => {
    e.stopPropagation()

    inline && defineContext(context.target)

    const classes = e.target.classList;

    if (classes.contains('ddae__year')) {
      context.now.setFullYear(Number(e.target.textContent))
      console.log('year', context.now, context)

      changeMode()
    } else if (classes.contains('ddae__day')) {
      context.now.setDate(Number(e.target.textContent))
      console.log('year', context.now, context)
    } else if (classes.contains('ddae__title')) {
      changeMode()
    } else if (classes.contains('ddae__btn-prev')) {
      open(-1)
    } else if (classes.contains('ddae__btn-next')) {
      open(1)
    }
  })

}
