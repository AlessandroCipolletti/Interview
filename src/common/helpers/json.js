
/**
 * Deeply copies a (json-like) object, and return a reference to the new copy
 *
 * @param {Object} obj
 * @returns
 */
export const deepCopy = (obj = {}) => JSON.parse(JSON.stringify(obj))


/**
 * Updates all json keys to respect camelCase rule
 *
 * @param {Object} json
 * @returns
 */
export const transformJsonKeysToCamelCase = (json = {}) => {
  if (Array.isArray(json)) {
    return json.map(transformJsonKeysToCamelCase)
  }

  if (json && typeof (json) === 'object') {
    Object.keys(json).forEach(key => {
      let newKey = key

      if (key.includes('-') || key.includes('_')) {
        newKey = stringToCamelCase(key)
        if (newKey !== key) {
          json[newKey] = deepCopy(json[key])
          delete json[key]
        }
      }

      if (json[newKey]) {
        if (Array.isArray(json[newKey])) {
          json[newKey] = json[newKey].map(transformJsonKeysToCamelCase)
        } else if (typeof (json[newKey]) === 'object') {
          json[newKey] = transformJsonKeysToCamelCase(json[newKey])
        }
      }
    })
  }

  return json
}

/**
 * Formats a kebab-case or snake_case string to respect the camelCase rule
 *
 * @param {String} string
 * @returns
 */
export const stringToCamelCase = (string = '') =>
  string.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  )


/**
 * Filters unwanted json keys
 *
 * @param {Object} json
 * @param {Array[string]} [keysToKeep]
 */
export const filterJsonKeys = (json, keysToKeep = []) => {
  Object.keys(json).forEach(key => {
    if (!keysToKeep.includes(key)) {
      delete json[key]
    }
  })

  return json
}


/**
 * Renames some json keys
 *
 * @param {Object} json
 * @param {Object} [keysToRename]
 */
export const renameJsonKeys = (json, keysToRename = {}) => {
  Object.keys(keysToRename).forEach(key => {
    if (typeof (json[key]) !== 'undefined') {
      json[keysToRename[key]] = deepCopy(json[key])
      delete json[key]
    }
  })

  return json
}


export const getHostFromUrl = (urlStr) => {
  let result = ''

  try {
    const url = new URL(urlStr)
    result = url.hostname
    result = result.replace(/^(www\.)/,'')
    result = result.substring(0, result.indexOf('.'))
  } catch (e) {} // eslint-disable-line

  return result
}

export const stringIsJson = (string) => {
  let result

  try {
    JSON.parse(string)
    result = true
  } catch (e) {
    result = false
  }

  return result
}
