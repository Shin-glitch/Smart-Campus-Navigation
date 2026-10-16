// =============================================
// CAMPUS GRAPH
// =============================================

const campusGraph = {

    "Main Gate": {
        "Academic Block": 300,
        "Parking": 250,
        "Hostel": 500
    },

    "Academic Block": {
        "Main Gate": 300,
        "Library": 200,
        "Computer Lab": 350,
        "Admin Block": 250
    },

    "Library": {
        "Academic Block": 200,
        "Canteen": 150,
        "Auditorium": 300
    },

    "Hostel": {
        "Main Gate": 500,
        "Canteen": 200,
        "Sports Complex": 400
    },

    "Canteen": {
        "Library": 150,
        "Hostel": 200,
        "Sports Complex": 250,
        "Admin Block": 300
    },

    "Admin Block": {
        "Academic Block": 250,
        "Canteen": 300,
        "Computer Lab": 200
    },

    "Sports Complex": {
        "Hostel": 400,
        "Canteen": 250,
        "Auditorium": 300
    },

    "Computer Lab": {
        "Academic Block": 350,
        "Admin Block": 200,
        "Auditorium": 250
    },

    "Auditorium": {
        "Library": 300,
        "Computer Lab": 250,
        "Sports Complex": 300,
        "Parking": 350
    },

    "Parking": {
        "Main Gate": 250,
        "Auditorium": 350
    }
};


const locations = Object.keys(campusGraph);


// =============================================
// GRAPH NODE POSITIONS
// =============================================

const positions = {

    "Main Gate": {
        x: 40,
        y: 250
    },

    "Academic Block": {
        x: 220,
        y: 80
    },

    "Library": {
        x: 450,
        y: 60
    },

    "Hostel": {
        x: 220,
        y: 420
    },

    "Canteen": {
        x: 450,
        y: 270
    },

    "Admin Block": {
        x: 680,
        y: 80
    },

    "Sports Complex": {
        x: 680,
        y: 420
    },

    "Computer Lab": {
        x: 900,
        y: 80
    },

    "Auditorium": {
        x: 900,
        y: 290
    },

    "Parking": {
        x: 40,
        y: 500
    }
};


// =============================================
// DIJKSTRA'S ALGORITHM
// =============================================

function dijkstra(graph, start, end) {

    const distances = {};

    const previous = {};

    const unvisited = new Set(
        Object.keys(graph)
    );


    for (const node of Object.keys(graph)) {

        distances[node] = Infinity;

        previous[node] = null;

    }


    distances[start] = 0;


    while (unvisited.size > 0) {

        let current = null;

        let smallestDistance = Infinity;


        // Find unvisited node with smallest distance

        for (const node of unvisited) {

            if (distances[node] < smallestDistance) {

                smallestDistance =
                    distances[node];

                current = node;

            }

        }


        if (current === null) {
            break;
        }


        if (current === end) {
            break;
        }


        unvisited.delete(current);


        // Relax edges

        for (const neighbor in graph[current]) {

            const weight =
                graph[current][neighbor];


            const newDistance =
                distances[current] + weight;


            if (
                newDistance <
                distances[neighbor]
            ) {

                distances[neighbor] =
                    newDistance;

                previous[neighbor] =
                    current;

            }

        }

    }


    if (distances[end] === Infinity) {

        return {
            path: null,
            distance: Infinity
        };

    }


    // Reconstruct path

    const path = [];

    let current = end;


    while (current !== null) {

        path.push(current);

        current = previous[current];

    }


    path.reverse();


    return {
        path: path,
        distance: distances[end]
    };
}


// =============================================
// BFS
// =============================================

function bfs(graph, start, end) {

    const queue = [start];

    let queueIndex = 0;

    const visited = new Set([start]);

    const previous = {};


    for (const node of Object.keys(graph)) {

        previous[node] = null;

    }


    while (queueIndex < queue.length) {

        const current =
            queue[queueIndex++];


        if (current === end) {
            break;
        }


        for (const neighbor in graph[current]) {

            if (!visited.has(neighbor)) {

                visited.add(neighbor);

                previous[neighbor] =
                    current;

                queue.push(neighbor);

            }

        }

    }


    if (!visited.has(end)) {

        return null;

    }


    // Reconstruct path

    const path = [];

    let current = end;


    while (current !== null) {

        path.push(current);

        current = previous[current];

    }


    path.reverse();


    return path;
}


// =============================================
// GENERATE RANDOM CONNECTED GRAPH
// =============================================

function generateTestGraph(numberOfVertices) {

    const graph = {};


    for (let i = 0; i < numberOfVertices; i++) {

        graph[i] = {};

    }


    // First create a connected chain

    for (
        let i = 0;
        i < numberOfVertices - 1;
        i++
    ) {

        const weight =
            Math.floor(Math.random() * 100) + 1;


        graph[i][i + 1] = weight;

        graph[i + 1][i] = weight;

    }


    // Add additional edges

    const extraEdges =
        numberOfVertices * 2;


    for (
        let i = 0;
        i < extraEdges;
        i++
    ) {

        const u =
            Math.floor(
                Math.random() *
                numberOfVertices
            );


        const v =
            Math.floor(
                Math.random() *
                numberOfVertices
            );


        if (u === v) {
            continue;
        }


        const weight =
            Math.floor(Math.random() * 100) + 1;


        graph[u][v] = weight;

        graph[v][u] = weight;

    }


    return graph;
}


// =============================================
// PERFORMANCE ANALYSIS
// =============================================

function runPerformanceAnalysis() {

    const graphSizes =
        [10, 50, 100, 500, 1000];


    const results = [];


    for (const size of graphSizes) {

        const graph =
            generateTestGraph(size);


        const startNode = 0;

        const endNode = size - 1;


        // -----------------------------
        // DIJKSTRA
        // -----------------------------

        const dijkstraStart =
            performance.now();


        dijkstra(
            graph,
            startNode,
            endNode
        );


        const dijkstraTime =
            (
                performance.now() -
                dijkstraStart
            ) / 1000;


        // -----------------------------
        // BFS
        // -----------------------------

        const bfsStart =
            performance.now();


        bfs(
            graph,
            startNode,
            endNode
        );


        const bfsTime =
            (
                performance.now() -
                bfsStart
            ) / 1000;


        results.push({

            vertices: size,

            dijkstra:
                dijkstraTime,

            bfs:
                bfsTime

        });

    }


    return results;
}


// =============================================
// POPULATE DROPDOWNS
// =============================================

function populateSelect(selectElement) {

    locations.forEach(location => {

        const option =
            document.createElement("option");


        option.value = location;

        option.textContent = location;


        selectElement.appendChild(option);

    });

}


const sourceSelect =
    document.getElementById("source");


const destinationSelect =
    document.getElementById("destination");


const compareSource =
    document.getElementById("compareSource");


const compareDestination =
    document.getElementById("compareDestination");


populateSelect(sourceSelect);

populateSelect(destinationSelect);

populateSelect(compareSource);

populateSelect(compareDestination);


// Default values

destinationSelect.value =
    "Library";


compareDestination.value =
    "Library";


// =============================================
// DRAW CAMPUS GRAPH
// =============================================

function drawGraph(path = []) {

    const graphContainer =
        document.getElementById("graph");


    graphContainer.innerHTML = "";


    const pathEdges = new Set();


    // Store route edges

    for (
        let i = 0;
        i < path.length - 1;
        i++
    ) {

        const a = path[i];

        const b = path[i + 1];


        pathEdges.add(`${a}|${b}`);

        pathEdges.add(`${b}|${a}`);

    }


    const drawnEdges = new Set();


    // =========================================
    // DRAW EDGES
    // =========================================

    for (const source in campusGraph) {

        for (
            const destination in campusGraph[source]
        ) {

            const edgeId =
                [source, destination]
                    .sort()
                    .join("|");


            // Prevent duplicate undirected edges

            if (drawnEdges.has(edgeId)) {
                continue;
            }


            drawnEdges.add(edgeId);


            const start =
                positions[source];


            const end =
                positions[destination];


            const x1 =
                start.x + 62;


            const y1 =
                start.y + 24;


            const x2 =
                end.x + 62;


            const y2 =
                end.y + 24;


            const dx =
                x2 - x1;


            const dy =
                y2 - y1;


            const length =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            const angle =
                Math.atan2(dy, dx) *
                (180 / Math.PI);


            const edge =
                document.createElement("div");


            edge.className = "edge";


            if (
                pathEdges.has(
                    `${source}|${destination}`
                )
            ) {

                edge.classList.add(
                    "path-edge"
                );

            }


            edge.style.width =
                `${length}px`;


            edge.style.left =
                `${x1}px`;


            edge.style.top =
                `${y1}px`;


            edge.style.transform =
                `rotate(${angle}deg)`;


            graphContainer.appendChild(edge);


            // Edge distance label

            const label =
                document.createElement("div");


            label.className =
                "edge-label";


            label.textContent =
                `${campusGraph[source][destination]} m`;


            label.style.left =
                `${(x1 + x2) / 2}px`;


            label.style.top =
                `${(y1 + y2) / 2}px`;


            graphContainer.appendChild(label);

        }

    }


    // =========================================
    // DRAW NODES
    // =========================================

    for (const location of locations) {

        const node =
            document.createElement("div");


        node.className = "node";


        if (path.includes(location)) {

            node.classList.add(
                "path-node"
            );

        }


        node.textContent = location;


        node.style.left =
            `${positions[location].x}px`;


        node.style.top =
            `${positions[location].y}px`;


        graphContainer.appendChild(node);

    }

}


// =============================================
// NAVIGATION RESULT
// =============================================

function showNavigationResult(
    title,
    path,
    distance,
    algorithm
) {

    const result =
        document.getElementById(
            "navigationResult"
        );


    const route =
        document.getElementById(
            "navigationRoute"
        );


    const distanceElement =
        document.getElementById(
            "navigationDistance"
        );


    const edges =
        document.getElementById(
            "navigationEdges"
        );


    const algorithmElement =
        document.getElementById(
            "navigationAlgorithm"
        );


    document.getElementById(
        "navigationTitle"
    ).textContent = title;


    if (!path) {

        route.textContent =
            "No route found.";


        distanceElement.textContent =
            "-";


        edges.textContent =
            "-";


        algorithmElement.textContent =
            algorithm;


        result.classList.remove(
            "hidden"
        );


        drawGraph([]);


        return;

    }


    route.textContent =
        path.join(" → ");


    distanceElement.textContent =
        distance === null
            ? "-"
            : `${distance} m`;


    edges.textContent =
        path.length - 1;


    algorithmElement.textContent =
        algorithm;


    result.classList.remove(
        "hidden"
    );


    drawGraph(path);
}


// =============================================
// DIJKSTRA BUTTON
// =============================================

document
    .getElementById("findDijkstra")
    .addEventListener(
        "click",
        () => {

            const source =
                sourceSelect.value;


            const destination =
                destinationSelect.value;


            const result =
                dijkstra(
                    campusGraph,
                    source,
                    destination
                );


            showNavigationResult(
                "Dijkstra Shortest Route",
                result.path,
                result.distance,
                "Dijkstra's Algorithm"
            );

        }
    );


// =============================================
// BFS BUTTON
// =============================================

document
    .getElementById("findBFS")
    .addEventListener(
        "click",
        () => {

            const source =
                sourceSelect.value;


            const destination =
                destinationSelect.value;


            const path =
                bfs(
                    campusGraph,
                    source,
                    destination
                );


            showNavigationResult(
                "BFS Route",
                path,
                null,
                "Breadth-First Search (BFS)"
            );

        }
    );


// =============================================
// ALGORITHM COMPARISON
// =============================================

document
    .getElementById("compareButton")
    .addEventListener(
        "click",
        () => {

            const source =
                compareSource.value;


            const destination =
                compareDestination.value;


            // -----------------------------
            // DIJKSTRA
            // -----------------------------

            const dijkstraStart =
                performance.now();


            const dijkstraResult =
                dijkstra(
                    campusGraph,
                    source,
                    destination
                );


            const dijkstraTime =
                (
                    performance.now() -
                    dijkstraStart
                ) / 1000;


            // -----------------------------
            // BFS
            // -----------------------------

            const bfsStart =
                performance.now();


            const bfsResult =
                bfs(
                    campusGraph,
                    source,
                    destination
                );


            const bfsTime =
                (
                    performance.now() -
                    bfsStart
                ) / 1000;


            // -----------------------------
            // DISPLAY DIJKSTRA
            // -----------------------------

            document.getElementById(
                "dijkstraRoute"
            ).textContent =
                dijkstraResult.path
                    ? dijkstraResult.path.join(" → ")
                    : "No route found";


            document.getElementById(
                "dijkstraDistance"
            ).textContent =
                dijkstraResult.path
                    ? `${dijkstraResult.distance} m`
                    : "-";


            document.getElementById(
                "dijkstraTime"
            ).textContent =
                `${dijkstraTime.toFixed(8)} seconds`;


            // -----------------------------
            // DISPLAY BFS
            // -----------------------------

            document.getElementById(
                "bfsRoute"
            ).textContent =
                bfsResult
                    ? bfsResult.join(" → ")
                    : "No route found";


            document.getElementById(
                "bfsEdges"
            ).textContent =
                bfsResult
                    ? bfsResult.length - 1
                    : "-";


            document.getElementById(
                "bfsTime"
            ).textContent =
                `${bfsTime.toFixed(8)} seconds`;


            document
                .getElementById(
                    "comparisonResult"
                )
                .classList.remove("hidden");

        }
    );


// =============================================
// PERFORMANCE BUTTON
// =============================================

document
    .getElementById("runPerformance")
    .addEventListener(
        "click",
        () => {

            const results =
                runPerformanceAnalysis();


            const table =
                document.getElementById(
                    "performanceTable"
                );


            table.innerHTML = "";


            results.forEach(result => {

                const row =
                    document.createElement("tr");


                row.innerHTML = `

                    <td>
                        ${result.vertices}
                    </td>

                    <td>
                        ${result.dijkstra.toFixed(8)}
                    </td>

                    <td>
                        ${result.bfs.toFixed(8)}
                    </td>

                `;


                table.appendChild(row);

            });


            document
                .getElementById(
                    "performanceResult"
                )
                .classList.remove("hidden");

        }
    );


// =============================================
// TAB SWITCHING
// =============================================

const tabs =
    document.querySelectorAll(".tab");


const sections =
    document.querySelectorAll(".section");


tabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            const target =
                tab.dataset.section;


            // Remove active tab

            tabs.forEach(t => {

                t.classList.remove(
                    "active"
                );

            });


            tab.classList.add("active");


            // Hide all sections

            sections.forEach(section => {

                section.classList.remove(
                    "active-section"
                );

            });


            // Show selected section

            document
                .getElementById(target)
                .classList.add(
                    "active-section"
                );

        }
    );

});


// =============================================
// INITIAL GRAPH
// =============================================

drawGraph();