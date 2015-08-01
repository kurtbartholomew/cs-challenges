/*
  A park ride has two entrances (Red and Blue). Passengers board the
  ride on a first-come first-serve basis. Park employees can choose
  to board passengers from a specific entrance queue or the person that
  queued first in either. Build out the data structure below to support
  these methods as well as a way to keep track of time for comparison.
  (Use a linked list to construct the queue.)

  Example:
    var parkyQueue = new parkRideQueue();
    parkyQueue.enqueue("Red","Jim")
    parkyQueue.enqueue("Red","Sara")
    parkyQueue.enqueue("Blue","Manny")
    parkyQueue.enqueue("Red","Jenna")
    parkyQueue.dequeueEither()            // "Jim"
    parkyQueue.dequeueBlue()              // "Manny"
    parkyQueue.dequeueEither()            // "Sara"
    parkyQueue.dequeueBlue()              // null
*/

var parkRideQueue = function(){
  this.redQueue = new LinkedList();
  this.blueQueue = new LinkedList();
  this.passengerCount = 0;
};

parkRideQueue.prototype.enqueue = function(entranceType,name){
  if(entranceType.constructor !== String && name.constructor !== String ) {
    throw Error('Please use strings for the entrance type and name');
  }
  this.passengerCount++;
  if(entranceType === 'Red'){
    this.redQueue.addToTail(name);
    this.redQueue.tail.enterTime = this.passengerCount;
  }
  if(entranceType === 'Blue'){
    this.blueQueue.addToTail(name);
    this.blueQueue.tail.enterTime = this.passengerCount;
  }
};

parkRideQueue.prototype.dequeueEither = function(){
  if(this.redQueue.head === null && this.blueQueue.head === null){
    return null;
  }
  if(this.redQueue.head === null) { return this.dequeueBlue(); }
  if(this.blueQueue.head === null) { return this.dequeueRed(); }
  return this.redQueue.head.enterTime <= this.blueQueue.head.enterTime ?
         this.dequeueRed() : this.dequeueBlue();
};

parkRideQueue.prototype.dequeueRed = function(){
  if(this.redQueue.head === null){ return null; }
  return this.redQueue.removeFromHead();
};

parkRideQueue.prototype.dequeueBlue = function(){
  if(this.blueQueue.head === null){ return null; }
  return this.blueQueue.removeFromHead();
};