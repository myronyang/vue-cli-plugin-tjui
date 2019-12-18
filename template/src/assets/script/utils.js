/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 存储Cookie
 */
export const setCookie = (name, value, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toGMTString();
  document.cookie = name + '=' + value + '; ' + expires;
}

/**
 * 获取Cookie
 */
export const getCookie = name => {
  name = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      console.log(c.substring(name.length, c.length));

      return c.substring(name.length, c.length);
    }
  }
  return '';
}

/**
 * 删除Cookie
 */
export const delCookie = name => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null)
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
}

/**
 * 获取系统信息
 */
export const getSystem ={
  isAndroid() {
    const u = navigator.userAgent
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  },
  isIOS() {
    const u = navigator.userAgent
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
}

/**
 * 获取url参数
 */
export const getQueryStr = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const result = window.location.search.substr(1).match(reg)
  if (result != null) {
    return unescape(result[2])
  }
  return null
}

/**
 * 时间戳转换
 */
export const formatDate = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  const time = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in time) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (time[k]) : (('00' + time[k]).substr(('' + time[k]).length)))
    }
  }
  return fmt
} 