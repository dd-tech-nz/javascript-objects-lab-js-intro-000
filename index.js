var recipes = {eggs: '3'}

function updateObjectWithKeyAndValue(object, key, value) {
  return object
  var newObj = object.assign({}, object, {[key]: value})
  return newObj
}