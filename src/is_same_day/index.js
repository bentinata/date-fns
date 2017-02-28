import startOfDay from '../start_of_day/index.js'

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
export default function isSameDay (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfDay = startOfDay(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}
