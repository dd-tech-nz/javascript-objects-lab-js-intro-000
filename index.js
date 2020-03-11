var recipes = {eggs: '3'}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = object.assign({}, object, {[key]: value})
  return recipes
  return newObj
}
