var Q    = require('q');
var sharp   = require('sharp');

/**
 * convert.resize('./android-screen.png', 'platforms/android/res/(...)/screen.png', {
 *   width: 1000,
 *   height: 200
 * });
 */
exports.resize = function(path, dest, dimensions) {
  var deferred = Q.defer();
  sharp(path).resize(dimensions.width, dimensions.height).toFile(dest, function(err, data) {
    if(err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });

  return deferred.promise;
};
