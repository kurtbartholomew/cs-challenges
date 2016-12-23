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

(function(CSC){

CSC.parkRideQueue = function(){
  
};

CSC.parkRideQueue.enqueue = function(entranceType,name){
  
};

CSC.parkRideQueue.dequeueEither = function(){
  
};

CSC.parkRideQueue.dequeueRed = function(){
  
};

CSC.parkRideQueue.dequeueBlue = function(){
  
};

})(CSC);
