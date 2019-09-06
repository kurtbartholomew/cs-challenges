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

};

GraphM.prototype.printAMatrix = function(){

};

GraphM.prototype.checkForExistence = function(graphNode1Value,graphNode2Value) {

};

GraphM.prototype.addNode = function(graphNodeValue){

};

GraphM.prototype.addEdge = function(graphNode1Value,graphNode2Value,weight){

};

GraphM.prototype.removeEdge = function(graphNode1Value,graphNode2Value){

};

GraphM.prototype.removeNode = function(graphNodeValue){

};

GraphM.prototype.checkAdjacency = function(graphNode1Value,graphNode2Value){

};

GraphM.prototype.findAdjacentNodes = function(graphNodeValue){

};

