# =============================================
# CAMPUS GRAPH
# =============================================

campus_graph = {
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
}