import {DateTime} from 'luxon'

const DEFAULT_FORMAT = 'dd/LL/yyyy'

export default function(date, format = DEFAULT_FORMAT) {
  return DateTime.fromJSDate(date).toFormat(format)
}
