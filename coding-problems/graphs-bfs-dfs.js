const adjacencyList = [[1, 3], [0], [3, 8], [0, 2, 4, 5], [3, 6], [3], [4, 7], [6], [2]];

/**
 * In Simple Questions, we will get either an Adjacency List or a Graph Structure.
 * If we get Graph then we have to convert this in adjacency list or matrix to proceed our algorithm.
 * Most of the cases, we get a theoretical / logical type question based on some values and we need to draw
 * a graph on provided values, logic and then covert that into an adjacency list.
 */

const traversalBFS = (graph) => {
  // BFS uses queue to proceed values and initial start with first element.
  const queue = [0];

  // Here we have taken a seen object. In this we will keep all the visited vertices so that
  // same vertex not visited twice.
  const seen = {};

  // This in an array to keep all traversed element.
  const values = [];

  while (queue.length) {
    const vertex = queue.shift(); // pop first vertex
    values.push(vertex); // push into final array
    seen[vertex] = true; // mark seen true of this vertex

    // Find all connections and visited them
    for (let connection of graph[vertex]) {
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return values;
};

console.log('traversalBFS(adjacencyList) :', traversalBFS(adjacencyList));

// ************************ DFS ********************************

const traversalDFS = (graph) => {
  const seen = {}; // keep track of visited vertex
  const values = []; // stored visited vertices

  // called below function 'dfs' recursively
  // 0 - is first vertex that we have chosen to start algorithm.
  dfs(graph, 0, values, seen);

  return values;
};

const dfs = (graph, vertex, values, seen) => {
  values.push(vertex);
  seen[vertex] = true;

  for (let connection of graph[vertex]) {
    if (!seen[connection]) {
      dfs(graph, connection, values, seen);
    }
  }
};

console.log('traversalDFS(adjacencyList) :', traversalDFS(adjacencyList));
