import request from '../services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchMembers () {
  return request({
    url: '/members/',
    method: 'GET',
    params: {
      page: 1,
      limit: 20,
      offset: 0,
      active: true,
      division: 'Software'
    }
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchDivisions (query) {
  return request({
    url: '/divisions/',
    method: 'GET',
    params: {
      page: 1,
      limit: 20,
      offset: 0,
      active: true
    }
  })
}
