# api-railway-api
[![NPM Downloads](https://img.shields.io/npm/dt/api-railway-api.svg?style=flat)](https://www.npmjs.com/package/api-railway-api?minimal=true)

New API that provide all the information related to Indian Trains.

## Installation

npm install api-railway-api --save

## Usage

```js
const railway = require("api-railway-api");
```

## - set API key (Don't Forget to Add)

```js
railway.setApikey("<API key>");
```

You can get the API Key by registering here https://indianrailapi.com/

## - Train_No information

Get the train information by entering Train number.

```js
railway.getTrainRoute(<train number>, function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return train information
  }
});
```

## - Trains between stations

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

## - Check Train Live Status

Get the current status of Train by entering Train_No and Date (yyyymmdd).

```js
railway.getLiveTrainStatus(<Train_No>,"yyyymmdd", function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```

## - Check Train Schedule

Get the full schedule of train from source to destination

```js
railway.getTrainSchedule(<Train_No>, function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```

## - Check Train Fare

Get the Fare of tickets between two station of all class (GN,SL,AC)

- Train_No: Train Number.
- source : Source Station Code.

* destination: Destination Station Code.
* quota : GN/CK

```js
railway.getTrainFare( <Train_No>,"<source>","<destination>","<quota>" function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```

## - Check Seat Availability

- Train_No : Train Number.
- source : Source Station Code.
- destination: Destination Station Code.
- date : Request Date in yyyyMMdd format.
- class : Class Code Like 1A/2A/3A/SL and so on.
- Quota : Currently available only for General(GN) Quata.

```js
railway.getSeatAvailability(<Train_No>,"<source>","<destination>","<date>","<class>", function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```

## - Check Coach Position

```js
railway.getCoachPosition(<Train_No>, function(err, res) {
  if (err) {
    //handling the error
  } else {
    //return the response object
  }
});
```
