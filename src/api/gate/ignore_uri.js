import fetch from 'utils/fetch'
export function page(query) {
  return fetch({
    url: '/api/admin/ignoreUri/page',
    method: 'get',
    params: query
  })
}

export function getGateList(obj){
  return fetch({
    url: 'api/admin/ignoreUri/all',
    method: 'get',
    data: obj
  })
}

export function delObj(id) {
  return fetch({
    url: '/api/admin/ignoreUri/' + id,
    method: 'delete'
  })
}

export function addObj(obj) {
  return fetch({
    url: '/api/admin/ignoreUri/',
    method: 'post',
    data: obj
  })
}

export function putObj(id, obj) {
  return fetch({
    url: '/api/admin/ignoreUri/' + id,
    method: 'put',
    data: obj
  })
}

export function getObj(id) {
  return fetch({
    url: '/api/admin/ignoreUri/' + id,
    method: 'get'
  })
}
