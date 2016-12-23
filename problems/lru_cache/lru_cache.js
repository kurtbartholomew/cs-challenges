/*
  Create a least recently used cache. The cache should hold references to
  the objects that it stores with a key value pair. The cache has a size
  limit and once the limit is reached, the least used object is removed from
  the cache.

  Example:  var cachey = new lruCache(4)
            cachey.set('data1',data1)
            cachey.set('data2',data1) 
            cachey.set('data3',data1) 
            cachey.set('data4',data1)
            cachey.get('data1')         // data1
            cachey.set('data5',data5)
            cachey.get('data2')         // null

*/

(function(CSC){

CSC.lruCache = function(size){
  
};

CSC.lruCache.prototype.set = function(name,data){
  
};

CSC.lruCache.prototype.get = function(name){
  
};

})(CSC);
