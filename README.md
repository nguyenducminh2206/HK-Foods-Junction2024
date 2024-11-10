# Food Production Management Tool

This web application is designed to optimize and monitor the food production chain at HKFoods. The system focuses on resolving communication challenges, improving inclusivity and quality control, enhancing real-time monitoring, and increasing sustainability. By ensuring resources are used efficiently and products meet target weight requirements, the system prevents both underweight and overweight products, thus maintaining consumer trust and profitability. The application is based on the idea of backpropagation of neural network when every time the information goes through each layer, they will be sent back to previous stage immediately.

### Accessing the front-end App

The app is deployed and can be accessed via [this link](https://wondrous-elf-555a64.netlify.app/).

## Features

- **Log In/Sign Up**: User can sign up and log in as a manager or an employee using their staff ID.
- **Touch Screen Device**: Each production stage has a touch screen displaying the software so that on-site employees can upate and be informed about real-time changes.
   - Send message: Each message contains a batch/id number, issues, priority of issues, which stages the messages will be sent to, and an optional choice to add more description.
   - Notifications: Containing notification pieces from other stages and from automated alert system to current stage. The notification message will be displayed in details as a pop-up when being clicked. They can be resolved when the information is received and the issues are fixed. 
- **For Mangager**:
   - Notifications: Real-time notifications from all stages.
   - Product History: Tracking product profile and status.
   - Data monitoring: Real-time processed data given by the algorithms can alert issues happening in the production process
      - Before-After Cooking: Identifying the batches in which weight loss is larger than the threshold. This feature uses ```data/system.py``` and ```data/functions.py```.
      - Before-After Storage: Using the data about weights and date in out of storae to create the weight loss per day. If the weight loss is higher than allowed than the system would automatically send an alert to all production stages. This feature uses ```data/storage.py```.
      - Final Package: Calculating each final package deviation to the target weight. If 5 consecutive packages have over-limit deviation then the system would automatically send an alert to all production stages. This feature uses ```data/final_packaging.py```.
- **For Employee**:
   - Training Materials about the new software system and issue tags in the touch screen device to reduce risks.
   - Work Status: Scheduling and keeping track of daily work.
   - Language: Employee can choose their preferred language for training.

## File Structure

- **data/**: Contains the core data processing files required for the application.
  - **HKFoods_Hackathon_data.xlsx**
  - **final_packaging.py**
  - **functions.py**
  - **requirements.txt**
  - **storage.py**
  - **system.py**

- **food-production-management-app/**: Front-end.


## Installation
1. Clone the repository: 
```
   git clone https://github.com/nguyenducminh2206/HK-Foods-Junction2024
   cd food-production-management-app
```
2. Install dependencies
```
  npm install
```
3. Start the application
```
  npm run dev
```
4. Access the app locally at http://localhost:5173

## Requirements

To run this project, you'll need:

- **Node.js** and **npm**: For package management and running the development environment.
- Python 3.x
- Required libraries (listed in `requirements.txt`)

Install the required libraries using:

```
pip install -r requirements.txts
```

