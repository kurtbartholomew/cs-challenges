/*
  Construct the data structure known as a Graph.
  This is a structure made of Nodes. These nodes can be connected to other
  nodes or they can be solitary. As trees are a subset of graphs, graph nodes
  contain a data attribute.

  However, unlike trees, a graph must keep track of it's overall nodes and
  how they are connected. This can typically be done one of two ways:

  - Each graph node contains a list of all adjacent (connected) nodes
    Example Graph: { 
                    'K' : 'A','N'
                    'S' : 'A','T'
                    'A' : 'K','N','S'
                    'T' : 'S'
                    'N' : 'K','A'
                   }
    Example Graph Node List for 'A': ['K','N','S']

  - The Graph itself holds an adjacency matrix
    Example (using the graph above): [[ 0 , 0 , 1 , 0 , 1 ],
                                      [ 0 , 0 , 1 , 1 , 0 ],
                                      [ 1 , 1 , 0 , 0 , 1 ],
                                      [ 0 , 1 , 0 , 0 , 0 ],
                                      [ 1 , 0 , 1 , 0 , 0 ]]

  Notice that the matrix is mirrored. In a directed graph, edges
  (connections between nodes) are specified to travel in one direction.
  This leads to listing outgoing nodes on an adjacency list on each graph node 
  or a non-symmetrical adjacency matrix.
  
  Strength of Adjacency List: Fast for adding nodes
  Weakness of Adjacency List: Slow for removing edges or nodes (must find all refs)
  Strength of Adjacency Matrix: Fast for adding / removing edges
  Weakness of Adjacency Matrix: Slow for adding / removing nodes (matrix reshape)

  For the implementation below, use the format in which the graph uses a matrix
  to keep track of these edges. The graph should be capable of being directed
  or undirected.

  Fill out the methods below to:
   - instantiate a graph
   - add a node
   - remove a node
   - add an edge
   - remove an edge
   - check if nodes are adjacent
   - display all adjacent nodes of a node

  Note: Please instantiate in pseudoclassical style

  Example:
    var graphy = new Graph();
    graphy.addNode('Z')
    graphy.addNode('Y')
    graphy.addNode('X')
    graphy.addNode('X')             // Error: Node already exists
    graphy.addNode('W')
    graphy.addNode('V')
    graphy.addNode('U')
    graphy.checkAdjacency('V','Z')  // false
    graphy.addEdge('W','Z')
    graphy.addEdge('U','V')
    graphy.addEdge('U','V')         // Error: Edge already exists
    graphy.addEdge('X','Y')
    graphy.addEdge('V','Z')
    graphy.checkAdjacency('V','Z')  // true
    graphy.addEdge('U','X')
    graphy.addEdge('X','W')
    graphy.removeEdge('W','Z')      
    graphy.removeEdge('W','Z')      // Error: Edge does not exist
    graphy.addEdge('U','Z')
    graphy.addEdge('V','X')
    graphy.findAdjacentNodes('X')   // ['Y','U','W','V']
    graphy.removeNode('Y')          
    graphy.findAdjacentNodes('X')   // ['U','W','V']
    graphy.removeNode('Y')          // Error: Node does not exist

*/

function GraphM(directed){
  this.nodes = [];
  this.edges = [];
  this.directed = false;
  if(directed === 'D') { this.directed = true; }
}

function GraphNodeM(dataValue){
  this.data = dataValue || null;
}

GraphM.prototype.searchForNode = function(nodeValue){
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].data === nodeValue) {
      return i;
    }
  }
  return null;
};

GraphM.prototype.printAMatrix = function(){
  var header = '';
  this.nodes.forEach(function(node){ header += ' ' + node.data; });
  console.log(header);
  var that = this;
  this.edges.forEach(function(row,index){
    var rowText = that.nodes[index].data  + ' ';
    row.forEach(function(columnVal){
      rowText+= ' ' + columnVal;
    });
    console.log(rowText);
  });
};

GraphM.prototype.checkForExistence = function(graphNode1Value,graphNode2Value) {
  if(graphNode1Value === graphNode2Value) { throw new Error("Cannot use same node"); }
  var nodeIndex1 = this.searchForNode(graphNode1Value);
  if(nodeIndex1 === null) { throw new Error("The " + graphNode1Value + " node does not exist"); }
  var nodeIndex2 = this.searchForNode(graphNode2Value);
  if(nodeIndex2 === null){ throw new Error("The " + graphNode2Value + " node does not exist"); }
  return [nodeIndex1,nodeIndex2];
};

GraphM.prototype.addNode = function(graphNodeValue){
  if(this.searchForNode(graphNodeValue) !== null) { throw new Error("Node already exists"); }
  this.nodes.push(new GraphNodeM(graphNodeValue));
  this.edges.forEach(function(row){ row.push(0); });
  this.edges.push([]);
  for(var i = 0; i < this.edges.length; i++) { this.edges[this.edges.length-1].push(0); }
};

GraphM.prototype.addEdge = function(graphNode1Value,graphNode2Value,weight){
  var indices = this.checkForExistence(graphNode1Value,graphNode2Value);

  if(this.edges[indices[0]][indices[1]] > 0)
  {
    throw new Error("This edge already exists");
  }

  var weightD = 1;
  if(weight !== undefined && weight.constructor === Number) { weightD = weight; } 
  
  this.edges[indices[0]][indices[1]] = weightD;
  if(!this.directed){ this.edges[indices[1]][indices[0]] = weightD; }

};

GraphM.prototype.removeEdge = function(graphNode1Value,graphNode2Value){
  var indices = this.checkForExistence(graphNode1Value,graphNode2Value);

  if(this.edges[indices[0]][indices[1]] === 0) { 
    throw new Error("Edge does not exist"); 
  } else {
    this.edges[indices[0]][indices[1]] = 0;
  }
  if(!this.directed && this.edges[indices[1]][indices[0]] === 0) {
   throw new Error("Edge does not exist"); 
  } else if(!this.directed && this.edges[indices[1]][indices[0]]) {
    this.edges[indices[1]][indices[0]] = 0;
  }

};

GraphM.prototype.removeNode = function(graphNodeValue){
  var index = this.searchForNode(graphNodeValue);
  if(index === null) { throw new Error("Node doesn't exist"); }
  this.edges.splice(index,1);
  var that = this;
  this.edges.forEach(function(row){
    row.splice(index,1);
  });
  return this.nodes.splice(index,1)[0];
};

GraphM.prototype.checkAdjacency = function(graphNode1Value,graphNode2Value){
  var indices = this.checkForExistence(graphNode1Value,graphNode2Value);

  if(!this.directed){ 
    return (this.edges[indices[1]][indices[0]] > 0 &&
           this.edges[indices[0]][indices[1]] > 0);
  } else {
    return this.edges[indices[1]][indices[0]] > 0;
  }

  return (verifiedNodes[0].edges.indexOf(graphNode2Value) > -1 &&
          verifiedNodes[1].edges.indexOf(graphNode1Value) > -1);
};

GraphM.prototype.findAdjacentNodes = function(graphNodeValue){
  var adjacentNodes = [];
  var mainIndex = this.searchForNode(graphNodeValue);
  var that = this;
  this.edges[mainIndex].forEach(function(columnElement,index){
    if(index !== mainIndex && columnElement > 0){
      adjacentNodes.push(that.nodes[index].data);
    }
  });
  return adjacentNodes;
};

