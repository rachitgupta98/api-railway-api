# api-railway-api

_An API with various functionalities for indian railways_

## Installation

npm install api-railway-api

## Usage

```js
const railway = require("api-railway-api");
```

- set API key (Don't Forget to Add)

```js
railway.setApikey("<API key>");
```

- Train route information

Get train’s route information like the list of stoppages,their locations etc.

```js
railway.getTrainRoute("<train number>", function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return station name, station code, schedule arrival, schedule departure.
  }
});
```

- Trains between stations

Get all trains(numbers) running between a source station and destination.

```js
railway.getTrainBtwStation("<source>", "<destination>", function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```

- Check PNR Status

Get the current PNR Status.

```js
railway.getPnrStatus("pnrNo", function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```

## Next Update will have given features....

### liveTrainStatus, seatAvailability etc.
