var recipes = {eggs: '3'}

function updateObjectWithKeyAndValue(object, key, value) {
  return object
  return object.assign({}, object, {[key]: value})
}
