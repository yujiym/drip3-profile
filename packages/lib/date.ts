import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const unixToFromNow = (unixtime: number): string => dayjs.unix(unixtime).fromNow()
