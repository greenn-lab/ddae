import calendar from './calendar'

export const MODE_DAILY = 'daily'
export const MODE_YEARLY = 'yearly'

export const DEFAULT_OPTIONS = {
  container: document.body,
  inline: null,
  mode: MODE_DAILY,
  filter: {
    days: null
  },
  name: {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec']
  },

}

//
Date && Date.prototype &&
(Date.picker = calendar)

export default calendar
