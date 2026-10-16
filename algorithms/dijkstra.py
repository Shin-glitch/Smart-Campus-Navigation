import heapq


# =============================================
# DIJKSTRA'S SHORTEST PATH ALGORITHM
# =============================================

def dijkstra(graph, start, end):

    distances = {
        location: float("inf")
        for location in graph
    }

    previous = {
        location: None
        for location in graph
    }

    distances[start] = 0

    priority_queue = [(0, start)]

    while priority_queue:

        current_distance, current_location = heapq.heappop(
            priority_queue
        )

        # Ignore outdated entries
        if current_distance > distances[current_location]:
            continue

        # Destination reached
        if current_location == end:
            break

        # Check all neighboring locations
        for neighbor, weight in graph[current_location].items():

            new_distance = current_distance + weight

            # Found a shorter route
            if new_distance < distances[neighbor]:

                distances[neighbor] = new_distance

                previous[neighbor] = current_location

                heapq.heappush(
                    priority_queue,
                    (new_distance, neighbor)
                )

    # No route exists
    if distances[end] == float("inf"):
        return None, float("inf")

    # Reconstruct path
    path = []

    current = end

    while current is not None:

        path.append(current)

        current = previous[current]

    path.reverse()

    return path, distances[end]