## Fixed Data Table

>Note: This project was bootstrapped with [Create React App]<br>
>(https://github.com/facebookincubator/create-react-app).


This project displays a table with data coming from 2 separate APIs. Ads Name column is from "ads" API and the rest of the columns are from "ad_metrics" API. You will see Ads Name column locked and the other columns are scrollable under that.

## Getting Started

### 1. Mock Data

You need to create a file called `mock_data.js` in the project root with the mock data needed to populate the tables.<br>
Sample mock data sets look like this:
```
export const ads = {
  "ads": [
    {
      "id": 1,
      "remote_id": "123",
      "name": "123",
      "status": "ACTIVE"
    },
    {
      "id": 2,
      "remote_id": "456",
      "name": "456",
      "status": "ACTIVE"
    }
  ]
};

export const ad_metrics = {
 "column_names": [
      "impressions",
      "reach",
      "frequency",
      "cpm",
      "spend",
      "ctr",
      "cost_per_inline_link_click",
      "actions:goal",
      "actions:link_click",
      "cost_per_action_type:cost_per_goal",
      "actions:offsite_conversion"
    ],
 "rows": [
       {
        "remote_id": "456",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 456
      },
      {
        "remote_id": "123",
        "impressions": "123",
        "reach": 123,
        "frequency": 1.0413449389302,
        "cpm": 12.30131445905,
        "spend": 182.49,
        "ctr": 0.87630603303,
        "cost_per_inline_link_click": 3.0415,
        "actions:goal": 3,
        "actions:link_click": 60,
        "cost_per_action_type:cost_per_goal": 60.83,
        "actions:offsite_conversion": 123
      }
    ]

}
```


### 2. `npm install`

Make sure to run this command inside the project directory.<br>
Installs all the dependencies needed to run this app.

### 3. `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
If the port is not available, you will be prompted if you want to serve the app at the next available port i.e. 3001, etc.

### 4. `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### 5. `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!