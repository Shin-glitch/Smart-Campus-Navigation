from graph.campus_graph import campus_graph

from algorithms.dijkstra import dijkstra
from algorithms.bfs import bfs

from analysis.performance import performance_analysis


# =============================================
# DISPLAY CAMPUS LOCATIONS
# =============================================

def display_locations():

    print("\nCampus Locations:")
    print("-" * 30)

    for i, location in enumerate(campus_graph.keys(), start=1):

        print(f"{i}. {location}")


# =============================================
# DISPLAY CAMPUS GRAPH
# =============================================

def display_graph():

    print("\nCampus Graph:")
    print("-" * 40)

    for location, connections in campus_graph.items():

        print(f"\n{location}")

        for destination, distance in connections.items():

            print(
                f"  -> {destination}: {distance} m"
            )


# =============================================
# FIND SHORTEST ROUTE
# =============================================

def find_shortest_route():

    print("\nFind Shortest Route")
    print("-" * 30)

    display_locations()

    source = input("\nEnter source location: ")

    destination = input(
        "Enter destination location: "
    )

    if (
        source not in campus_graph
        or destination not in campus_graph
    ):

        print("\nInvalid location.")

        print(
            "Please choose from the available "
            "campus locations."
        )

        return

    if source == destination:

        print(
            "\nSource and destination are the same."
        )

        print("Total Distance: 0 m")

        return

    path, distance = dijkstra(
        campus_graph,
        source,
        destination
    )

    if path is None:

        print(
            "\nNo route exists between "
            "these locations."
        )

        return

    print("\nShortest Route:")

    print(" -> ".join(path))

    print(
        f"\nTotal Distance: {distance} m"
    )


# =============================================
# COMPARE DIJKSTRA AND BFS
# =============================================

def compare_algorithms():

    print("\nCompare Algorithms")
    print("-" * 30)

    display_locations()

    source = input("\nEnter source location: ")

    destination = input(
        "Enter destination location: "
    )

    if (
        source not in campus_graph
        or destination not in campus_graph
    ):

        print("\nInvalid location.")

        print(
            "Please choose from the available "
            "campus locations."
        )

        return

    if source == destination:

        print(
            "\nSource and destination are the same."
        )

        return

    # -----------------------------------------
    # Dijkstra
    # -----------------------------------------

    import time

    start_time = time.perf_counter()

    dijkstra_path, dijkstra_distance = dijkstra(
        campus_graph,
        source,
        destination
    )

    dijkstra_time = (
        time.perf_counter() - start_time
    )

    # -----------------------------------------
    # BFS
    # -----------------------------------------

    start_time = time.perf_counter()

    bfs_path = bfs(
        campus_graph,
        source,
        destination
    )

    bfs_time = (
        time.perf_counter() - start_time
    )

    # -----------------------------------------
    # Dijkstra result
    # -----------------------------------------

    print("\n" + "=" * 45)
    print("DIJKSTRA'S ALGORITHM")
    print("=" * 45)

    if dijkstra_path:

        print("Route:")

        print(
            " -> ".join(dijkstra_path)
        )

        print(
            f"Distance: "
            f"{dijkstra_distance} m"
        )

        print(
            f"Execution Time: "
            f"{dijkstra_time:.8f} seconds"
        )

    else:

        print("No route found.")

    # -----------------------------------------
    # BFS result
    # -----------------------------------------

    print("\n" + "=" * 45)
    print("BREADTH-FIRST SEARCH (BFS)")
    print("=" * 45)

    if bfs_path:

        print("Route:")

        print(
            " -> ".join(bfs_path)
        )

        print(
            f"Number of edges: "
            f"{len(bfs_path) - 1}"
        )

        print(
            f"Execution Time: "
            f"{bfs_time:.8f} seconds"
        )

    else:

        print("No route found.")

    # -----------------------------------------
    # Comparison
    # -----------------------------------------

    print("\n" + "=" * 45)
    print("COMPARISON")
    print("=" * 45)

    print(
        "Dijkstra considers the distance "
        "of each path."
    )

    print(
        "BFS considers only the number "
        "of edges."
    )

    print(
        f"\nDijkstra time: "
        f"{dijkstra_time:.8f} seconds"
    )

    print(
        f"BFS time:      "
        f"{bfs_time:.8f} seconds"
    )


# =============================================
# MAIN PROGRAM
# =============================================

def main():

    while True:

        print("\n" + "=" * 45)

        print(
            "       SMART CAMPUS NAVIGATION"
        )

        print("=" * 45)

        print(
            "1. View Campus Locations"
        )

        print(
            "2. View Campus Graph"
        )

        print(
            "3. Find Shortest Route"
        )

        print(
            "4. Compare Algorithms"
        )

        print(
            "5. Performance / Complexity Analysis"
        )

        print(
            "6. Exit"
        )

        choice = input(
            "\nEnter your choice: "
        )

        if choice == "1":

            display_locations()

        elif choice == "2":

            display_graph()

        elif choice == "3":

            find_shortest_route()

        elif choice == "4":

            compare_algorithms()

        elif choice == "5":

            performance_analysis()

        elif choice == "6":

            print(
                "\nExiting Smart Campus Navigation..."
            )

            break

        else:

            print(
                "\nInvalid choice. "
                "Please try again."
            )


# =============================================
# PROGRAM ENTRY POINT
# =============================================

if __name__ == "__main__":

    main()