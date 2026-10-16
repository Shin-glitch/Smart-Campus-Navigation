from collections import deque


# =============================================
# BREADTH-FIRST SEARCH
# =============================================

def bfs(graph, start, end):

    queue = deque([start])

    visited = {start}

    previous = {
        location: None
        for location in graph
    }

    while queue:

        current = queue.popleft()

        # Destination reached
        if current == end:
            break

        # Visit neighbors
        for neighbor in graph[current]:

            if neighbor not in visited:

                visited.add(neighbor)

                previous[neighbor] = current

                queue.append(neighbor)

    # Destination was not reached
    if end not in visited:
        return None

    # Reconstruct path
    path = []

    current = end

    while current is not None:

        path.append(current)

        current = previous[current]

    path.reverse()

    return path