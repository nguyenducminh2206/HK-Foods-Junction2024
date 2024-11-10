# Define the tolerance table as a dictionary with separate units for each range
tolerance_table = {
    (5, 50): {"type": "percentage", "value": 9},
    (50, 100): {"type": "absolute", "value": 4.5},
    (100, 200): {"type": "percentage", "value": 4.5},
    (200, 300): {"type": "absolute", "value": 9},
    (300, 500): {"type": "percentage", "value": 3},
    (500, 1000): {"type": "absolute", "value": 15},
    (1000, 10000): {"type": "percentage", "value": 1.5}
}

# Function to get tolerance based on target weight
def get_tolerance(target_weight):
    for (low, high), tolerance_info in tolerance_table.items():
        if low <= target_weight <= high:
            return tolerance_info
    return None  # Return None if out of range

# Function to monitor consecutive deviations
def monitor_weights(target_weight):
    tolerance_info = get_tolerance(target_weight)
    if tolerance_info is None:
        print("Error: Target weight out of supported range.")
        return

    consecutive_exceeds = 0  # Counter for consecutive deviations

    while True:
        # Get the product weight input
        input_value = input("Enter product weight (or type 'quit' to exit): ")
        if input_value.lower() == "quit":
            print("Exiting the program.")
            break

        try:
            weight = float(input_value)
        except ValueError:
            print("Please enter a valid number or 'quit' to exit.")
            continue
        
        # Calculate deviation based on tolerance type
        if tolerance_info["type"] == "percentage":
            # Use percentage deviation
            allowable_deviation = tolerance_info["value"]
            deviation_percentage = abs((weight - target_weight) / target_weight) * 100
            exceeds_tolerance = deviation_percentage > allowable_deviation
            deviation_message = f"{deviation_percentage:.2f}%"
        else:
            # Use absolute deviation
            allowable_deviation = tolerance_info["value"]
            deviation_amount = abs(weight - target_weight)
            exceeds_tolerance = deviation_amount > allowable_deviation
            deviation_message = f"{deviation_amount:.2f} grams"

        # Check if this weight exceeds the tolerance
        if exceeds_tolerance:
            consecutive_exceeds += 1
            print(f"Warning: Product weight {weight} exceeds tolerance with deviation of {deviation_message}")
        else:
            # Reset the counter if the product is within tolerance
            consecutive_exceeds = 0
            print(f"Product weight {weight} is within tolerance.")

        # Check if there are 5 consecutive exceeds
        if consecutive_exceeds >= 5:
            print("Error: 5 consecutive products exceed the tolerance!")
            

# Example usage
target_weight = float(input("Enter target weight in grams: "))
monitor_weights(target_weight)
