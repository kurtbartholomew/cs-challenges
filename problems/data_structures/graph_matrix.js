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
    Example (using the graph above): [[ '','K','S','A','T','N'],
                                      ['K', 0 , 0 , 1 , 0 , 1 ],
                                      ['S', 0 , 0 , 1 , 1 , 0 ],
                                      ['A', 1 , 1 , 0 , 0 , 1 ],
                                      ['T', 0 , 1 , 0 , 0 , 0 ],
                                      ['N', 1 , 0 , 1 , 0 , 0 ]]

  Notice that the matrix is mirrored. In a directed graph, edges
  (connections between nodes) are specified to travel in one direction.
  This leads to an ingoing and outgoing list on each graph node or
  a non-symmetrical adjacency matrix.
  
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

function Graph(){
  this.nodes = [];
}

function GraphNode(dataValue){
  this.data = dataValue || null;
  this.edges = [];
}

Graph.prototype.searchForNode = function(nodeValue){
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].data === nodeValue) {
      return this.nodes[i];
    }
  }
  return null;
};

Graph.prototype.checkForExistence = function(graphNode1Value,graphNode2Value) {
  if(graphNode1Value === graphNode2Value) { throw new Error("Cannot use same node"); }
  var node1 = this.searchForNode(graphNode1Value);
  if(node1 === null) { throw new Error("The " + graphNode1Value + " node does not exist"); }
  var node2 = this.searchForNode(graphNode2Value);
  if(node2 === null){ throw new Error("The " + graphNode2Value + " node does not exist"); }
  return [node1,node2];
};

Graph.prototype.addNode = function(graphNodeValue){
  if(this.searchForNode(graphNodeValue) !== null) { throw new Error("Node already exists"); }
  this.nodes.push(new GraphNode(graphNodeValue));
};

Graph.prototype.addEdge = function(graphNode1Value,graphNode2Value){
  var verifiedNodes = this.checkForExistence(graphNode1Value,graphNode2Value);

  if(verifiedNodes[0].edges.indexOf(graphNode2Value) > -1 &&
     verifiedNodes[1].edges.indexOf(graphNode1Value) > -1)
  {
    throw new Error("This edge already exists");
  }
  verifiedNodes[0].edges.push(graphNode2Value);
  verifiedNodes[1].edges.push(graphNode1Value);
};

Graph.prototype.removeEdge = function(graphNode1Value,graphNode2Value){
  var verifiedNodes = this.checkForExistence(graphNode1Value,graphNode2Value);

  var edgeIndex1 = verifiedNodes[0].edges.indexOf(graphNode2Value);
  if(edgeIndex1 === -1) { throw new Error("Edge does not exist"); }
  var edgeIndex2 = verifiedNodes[1].edges.indexOf(graphNode1Value);
  if(edgeIndex2 === -1) { throw new Error("Edge does not exist"); }
  verifiedNodes[0].edges.splice(edgeIndex1,1);
  verifiedNodes[1].edges.splice(edgeIndex2,1);
};

Graph.prototype.removeNode = function(graphNodeValue){
  var node = this.searchForNode(graphNodeValue);
  if(node === null) { throw new Error("Node doesn't exist"); }
  var that = this;
  node.edges.forEach(function(connectedNodeValue){
    var connected = that.searchForNode(connectedNodeValue);
    connected.edges.splice(connected.edges.indexOf(graphNodeValue),1);
  });
  var index = this.nodes.indexOf(node);
  return this.nodes.splice(index,1)[0];
};

Graph.prototype.checkAdjacency = function(graphNode1Value,graphNode2Value){
  var verifiedNodes = this.checkForExistence(graphNode1Value,graphNode2Value);

  return (verifiedNodes[0].edges.indexOf(graphNode2Value) > -1 &&
          verifiedNodes[1].edges.indexOf(graphNode1Value) > -1);
};

Graph.prototype.findAdjacentNodes = function(graphNodeValue){
  return this.searchForNode(graphNodeValue).edges;
};

