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

var lruCache = function(size){
  if(!size) { throw new Error('You must initialize the cache with a size.'); }
  this.limit = size;
  this.storage = new DoublyLinkedList();
  this.list = {};
};

lruCache.prototype.set = function(name,data){
  var newLLNode = new DoublyLinkedListNode(data);
  newLLNode.name = name;
  this.list[name] = newLLNode;
  this.storage.addToTail(newLLNode);
  if(this.storage.size() >= this.limit){
    delete this.list[this.storage.removeFromHead().name];
  }
};

lruCache.prototype.get = function(name){
  currentNode = this.list[name];
  if(currentNode) {
    if(currentNode.previous){ currentNode.previous.next = currentNode.next; }
    this.storage.addToTail(currentNode);
    currentNode.next = null;
    return currentNode;
  } else {
    return null;
  }
};