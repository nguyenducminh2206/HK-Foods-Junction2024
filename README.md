# HKFoods Production Chain Management System

This project is designed to optimize and monitor the food production chain at HKFoods. The system focuses on resolving communication challenges, improving inclusivity and quality control, enhancing real-time monitoring, and increasing sustainability. By ensuring resources are used efficiently and products meet target weight requirements, the system prevents both underweight and overweight products, thus maintaining consumer trust and profitability.

## Table of Contents

- [Features](#features)
- [File Descriptions](#file-descriptions)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Food Production Factory Management Tool](#food-production-factory-management-tool)
- [Accessing the App](#accessing-the-app)
- [Requirement](#requirements)
- [Installations](#installation)
- [Usage](#usage)

## Features

- **Real-Time Monitoring**: Tracks production stages in real-time, ensuring product quality and compliance.
- **Quality Control**: Implements checks to ensure products are within target weight, avoiding discrepancies.
- **Efficient Communication**: Enhances production line communication, ensuring smooth workflow and quick issue resolution.
- **Sustainability Focus**: Optimizes resource usage, reducing waste and improving profitability.
- **Data Storage and Analysis**: Stores production data efficiently for further analysis and improvements.

## File Descriptions

- **`final_packaging.py`**: Manages the packaging process, ensuring products meet specific weight requirements and are properly labeled.
- **`functions.py`**: Contains utility functions used across the system, such as data validation, logging, and processing.
- **`HKFoods_Hackathon data.xlsx`**: Data file containing essential information on production, quality control metrics, and other relevant statistics.
- **`storage.py`**: Handles data storage, reading, and writing functionalities to manage production records efficiently.
- **`system.py`**: Orchestrates the system processes, including initializing modules, error handling, and monitoring overall system health.

## Installation
Clone this repository
```
git clone https://github.com/yourusername/HKFoods_Production_Chain.git
```
```
cd HKFoods_Production_Chain/data
```

## Requirements

To run this project, you'll need:

- Python 3.x
- Required libraries (listed in `requirements.txt`)

Install the required libraries using:

```
pip install -r requirements.txts
```

# Food Production Factory Management Tool

This web application is designed to streamline operations in a food production factory. It provides real-time notifications, enables better communication across assembly line stations, and helps reduce food waste by managing portions and weights accurately. Employees and managers can use this tool to track production stages, report issues, and optimize efficiency.

### Accessing the App

The app is deployed and can be accessed via [this link](https://wondrous-elf-555a64.netlify.app/).

### Requirements

To run the app locally, ensure you have the following installed:

- **Node.js** and **npm**: For package management and running the development environment.
- **MongoDB** (if using a local database): The app may require a MongoDB instance for data storage.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd food-production-factory-tool

2. Install dependencies
  ```bash
  npm install

3. Start the application
  ```bash
  npm run dev

4. Access the app locally at http://localhost:5173

### Usage

Employees: Use touch screens at each station to notify other stages of issues in real time. Track portion weights and adjust as needed.

Managers: View notifications from all stations, monitor production flow, and oversee waste reduction efforts.
