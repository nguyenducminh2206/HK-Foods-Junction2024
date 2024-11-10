# The estimated drying weight loss is 1%/day. Thus, we speculated that the weight loss threshold should be 1.5%/day. 
# If the weight loss is greater than 1.5%/day, we will send an auto-generated notification to the production team 
# that there might be an issue with the process.
# To calculate the weight loss percentage, we will use the following formula: 
# (batch weight after storage - batch weight before storage) / (date_storage_out - date_storage_in) * 100.
# The date_storage_out and date_storage_in columns are in datetime format.
# If date_storage_out = date_storage_in, date_storage_out - date_storage_in == 1.
import datetime

def calculate_weight_loss(product_id, batch_id, weight_after, weight_before, date_out, date_in):
    days_stored = (date_in - date_out).days
    if date_out == date_in:
      days_stored = 1
    
    weight_loss_percentage = ((weight_before - weight_after) / weight_before) * 100 / days_stored
    
    if weight_loss_percentage > 1.5:
        notify_production_team(product_id, batch_id, weight_loss_percentage)
    
    return weight_loss_percentage

def notify_production_team(product_id, batch_id, weight_loss_percentage):
    print(f"Notification: Product {product_id}, Batch {batch_id}, {datetime.datetime.now().strftime('%m/%d/%Y %H:%M:%S')} has a weight loss of {weight_loss_percentage:.2f}% per day, which is above the threshold.")

if __name__ == "__main__":
    product_id = input("Enter product ID: ")
    batch_id = input("Enter batch ID: ")
    weight_before = float(input("Enter weight before storage (kg): "))
    weight_after = float(input("Enter weight after storage (kg): "))
    date_out_str = input("Enter storage out date (MM/DD/YYYY): ")
    date_in_str = input("Enter storage in date (MM/DD/YYYY): ")
    
    date_out = datetime.datetime.strptime(date_out_str, "%m/%d/%Y")
    date_in = datetime.datetime.strptime(date_in_str, "%m/%d/%Y")
    
    weight_loss_percentage = calculate_weight_loss(product_id, batch_id, weight_after, weight_before, date_out, date_in)
    print(f"Weight loss percentage: {weight_loss_percentage:.2f}%")

