This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Material UI](https://material-ui.com/) has been used for components.

[Express](https://expressjs.com/) is used for the backend.

Demo app can be found at [Monty Hall Problem](mhpnpk.herokuapp.com/)

Demo app server can be found at [Monty Hall Problem Server](https://mhpnpk-server.herokuapp.com) CORS has been enabled on server for convenience.

### Various Application Stages 


| Initial State | Waiting for simulation results | With simulation results |
|---------------|--------------------------------|-------------------------|
|       ![mhp_init](https://user-images.githubusercontent.com/7235671/95012250-14352e00-0672-11eb-9e9e-f5d858e957b8.png)        |               ![mhp_loading](https://user-images.githubusercontent.com/7235671/95012251-15665b00-0672-11eb-8704-33550aab7076.png)                 |             ![mhp_result](https://user-images.githubusercontent.com/7235671/95012252-15fef180-0672-11eb-915a-c880717ff3d7.png)            |


## Running on local

Ensure both the server and client are running as requried. 

### `yarn start`

Runs the client in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn server`

Runs the server in the development mode.<br />
Open [http://localhost:5000](http://localhost:3000/simulate) to test.<br />
Replace `https://mhpnpk-server.herokuapp.com/simulate` with `/simulate` in code if you need to test the server locally.
Also remember to add proxy in `package.json`
```
"proxy": "http://localhost:5000",
```

### `yarn test`

Runs the various tests in the interactive watch mode.<br />
