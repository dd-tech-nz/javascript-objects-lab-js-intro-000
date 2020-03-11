var recipes = {eggs: '3'}

function updateObjectWithKeyAndValue(object, key, value) {
  return object, Object.assign({}, object, {[key] : value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  return delete newObj[key]
}

