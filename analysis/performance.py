import random
import time

from algorithms.dijkstra import dijkstra
from algorithms.bfs import bfs


# =============================================
# GENERATE TEST GRAPH
# =============================================

def generate_test_graph(number_of_vertices):

    graph = {
        i: {}
        for i in range(number_of_vertices)
    }

    # Create a connected backbone
    for i in range(number_of_vertices - 1):

        weight = random.randint(1, 100)

        graph[i][i + 1] = weight
        graph[i + 1][i] = weight

    # Add additional random edges
    extra_edges = number_of_vertices * 2

    for _ in range(extra_edges):

        u = random.randint(0, number_of_vertices - 1)
        v = random.randint(0, number_of_vertices - 1)

        if u == v:
            continue

        weight = random.randint(1, 100)

        graph[u][v] = weight
        graph[v][u] = weight

    return graph


# =============================================
# PERFORMANCE ANALYSIS
# =============================================

def performance_analysis():

    print("\nPerformance / Complexity Analysis")
    print("=" * 65)

    print(
        "\nTesting both algorithms on graphs of increasing size..."
    )

    print(
        "\n{:<15} {:<20} {:<20}".format(
            "Vertices",
            "Dijkstra (sec)",
            "BFS (sec)"
        )
    )

    print("-" * 65)

    graph_sizes = [10, 50, 100, 500, 1000]

    for size in graph_sizes:

        graph = generate_test_graph(size)

        start_node = 0
        end_node = size - 1

        # -------------------------------------
        # Dijkstra
        # -------------------------------------

        start_time = time.perf_counter()

        dijkstra(
            graph,
            start_node,
            end_node
        )

        dijkstra_time = time.perf_counter() - start_time

        # -------------------------------------
        # BFS
        # -------------------------------------

        start_time = time.perf_counter()

        bfs(
            graph,
            start_node,
            end_node
        )

        bfs_time = time.perf_counter() - start_time

        print(
            "{:<15} {:<20.8f} {:<20.8f}".format(
                size,
                dijkstra_time,
                bfs_time
            )
        )

    print("\nTheoretical Complexity:")
    print("-" * 65)

    print(
        "Dijkstra with binary heap: O((V + E) log V)"
    )

    print(
        "BFS:                       O(V + E)"
    )

    print(
        "\nThe experimental timings show how execution time"
    )

    print(
        "changes as the graph size increases."
    )