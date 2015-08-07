/*
  Given a directed graph with nodes containing adjacency lists, find if there
  is a route between the two nodes provided.

  Example: {nodes:[{data:'A',edges:[]},
                   {data:'B',edges:['C']},
                   {data:'C',edges:[]},
                   {data:'D',edges:['B']},
                   {data:'E',edges:['F']},
                   {data:'F',edges:['D']}],
           }, 'F','C'
  Return: true (E->F->D->B->C)
  
  Example: {nodes:[{data:'A',edges:['F']},
                   {data:'B',edges:['C']},
                   {data:'C',edges:['F']},
                   {data:'D',edges:[]},
                   {data:'E',edges:['F']},
                   {data:'F',edges:['D']}],
           }, 'F','C'
  Return false

*/


var findConnectionExistence = function(graph,nodeValue1,nodeValue2){
  var startNode = graph.searchForNode(nodeValue1);
  var endNode = graph.searchForNode(nodeValue2);

  var bfsQueue = new Queue();

  bfsQueue.enqueue(startNode);

  while(!bfsQueue.isEmpty()){
    var currentNode = bfsQueue.dequeue();
    if(currentNode !== null){
      for(var i = 0; i < currentNode.edges.length; i++) {
        if(currentNode.visited === undefined){
          if(graph.searchForNode(currentNode.edges[i]) === endNode){ return true; }
        }
          bfsQueue.enqueue(graph.searchForNode(currentNode.edges[i]));
      }
      currentNode.visited = true;
    }
  }
  return false;
};