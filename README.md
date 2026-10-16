\# Smart Campus Navigation Using Graph Algorithms



A Design and Analysis of Algorithms (DAA) project that demonstrates graph-based campus navigation using \*\*Dijkstra's Shortest Path Algorithm\*\* and \*\*Breadth-First Search (BFS)\*\*.



\## Project Overview



The campus is represented as a \*\*weighted undirected graph\*\*:



\- \*\*Vertices\*\* represent campus locations.

\- \*\*Edges\*\* represent walking paths between locations.

\- \*\*Edge weights\*\* represent walking distances in meters.



The project implements two graph traversal algorithms:



1\. \*\*Dijkstra's Algorithm\*\* — finds the minimum-distance route between two locations.

2\. \*\*Breadth-First Search (BFS)\*\* — finds a route with the minimum number of edges.



The project also compares the algorithms and performs experimental performance analysis on graphs of different sizes.



\## Campus Locations



The graph contains the following locations:



\- Main Gate

\- Academic Block

\- Library

\- Hostel

\- Canteen

\- Admin Block

\- Sports Complex

\- Computer Lab

\- Auditorium

\- Parking



\## Features



\### 1. Shortest Path Navigation



Users can select a source and destination and calculate a route using:



\- Dijkstra's Algorithm

\- BFS



The frontend also visually highlights the selected route on the campus graph.



\### 2. Algorithm Comparison



The project compares Dijkstra and BFS based on:



\- Route generated

\- Route distance

\- Number of edges

\- Execution time



Dijkstra considers edge weights when selecting the route, whereas BFS considers only the number of edges.



\### 3. Performance Analysis



The algorithms are tested on randomly generated connected graphs with increasing numbers of vertices:



```text

10

50

100

500

1000

```



The execution time of both algorithms is displayed in a table.



\### 4. Complexity Analysis



\#### Dijkstra's Algorithm



Using a priority queue / binary heap:



```text

O((V + E) log V)

```



\#### Breadth-First Search



Using an adjacency list:



```text

O(V + E)

```



Where:



\- `V` = number of vertices

\- `E` = number of edges



\## Project Structure



```text

Smart-Campus-Navigation/

│

├── algorithms/

│   ├── \_\_init\_\_.py

│   ├── bfs.py

│   └── dijkstra.py

│

├── analysis/

│   ├── \_\_init\_\_.py

│   └── performance.py

│

├── graph/

│   ├── \_\_init\_\_.py

│   └── campus\_graph.py

│

├── frontend/

│   ├── index.html

│   ├── style.css

│   └── script.js

│

├── main.py

├── .gitignore

└── README.md

```



\## Technologies Used



\- \*\*Python\*\* — algorithmic/terminal implementation

\- \*\*HTML\*\* — frontend structure

\- \*\*CSS\*\* — frontend styling

\- \*\*JavaScript\*\* — frontend algorithms and visualization

\- \*\*Git \& GitHub\*\* — version control



\## How to Run



\### Python Version



From the project root:



```bash

python main.py

```



The terminal interface provides options for:



\- Finding a route using Dijkstra

\- Finding a route using BFS

\- Comparing the algorithms

\- Running performance analysis



\### Frontend Version



Open:



```text

frontend/index.html

```



in a web browser.



The frontend provides three sections:



\- \*\*Navigation\*\*

\- \*\*Algorithm Comparison\*\*

\- \*\*Performance Analysis\*\*



\## Dijkstra vs BFS



| Feature | Dijkstra | BFS |

|---|---|---|

| Considers edge weights | Yes | No |

| Finds minimum-distance route | Yes | No |

| Finds minimum-hop route | Not specifically | Yes |

| Suitable for weighted graphs | Yes | No |

| Time Complexity | O((V + E) log V) | O(V + E) |



For this project, Dijkstra is the appropriate algorithm when the goal is to find the shortest physical walking distance.



\## Project Objective



The objective of this project is to demonstrate how graph algorithms can be applied to a real-world campus navigation problem while analyzing their \*\*correctness, performance, and computational complexity\*\*.

