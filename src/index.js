var rp = require("request-promise");
let apiKey = null;

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function(txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }
setApiKey = api_key => {
  apiKey = api_key;
};

getTrainNoInformation = (train_No, callback) => {
  rp(
    `http://indianrailapi.com/api/v2/TrainInformation/apikey/${apiKey}/TrainNumber/${train_No}/`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

//-------------TrainBtwStation-----------//
getTrainBtwStation = (start, end, callback) => {
  rp(
    `http://indianrailapi.com/api/v2/TrainBetweenStation/apikey/${apikey}/From/${start}/To/${end}`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

//-----------getLiveTrainStatus----------//
getLiveTrainStatus = (train_No, date, callback) => {
  rp(
    `http://indianrailapi.com/api/v2/livetrainstatus/apikey/${apiKey}/trainnumber/${train_No}/date/${date}/`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

//--------TrainSchedule----------//
getTrainSchedule = (train_No, callback) => {
  rp(
    `http://indianrailapi.com/api/v2/TrainSchedule/apikey/${apiKey}/TrainNumber/${train_No}/`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

//----------Train Fare-------//
getTrainFare = (train_No, start, end, quota, callback) => {
  rp(
    `http://indianrailapi.com/api/v2/TrainFare/apikey/${apiKey}/TrainNumber/${train_No}/From/${start}/To/${end}/Quota/${quota}`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

//---------Seat Availability------//
getSeatAvailability = (train_No, start, end, date, clas, callback) => {
  rp(
    `https://indianrailapi.com/api/v2/SeatAvailability/apikey/${apiKey}/TrainNumber/${train_No}/From/${start}/To/${end}/Date/${date}/Quota/GN/Class/${clas}`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

//---------Coach Position --------//

getCoachPosition = (train_No, callback) => {
  rp(
    `http://indianrailapi.com/api/v2/CoachPosition/apikey/${apiKey}/TrainNumber/${train_No}/`
  )
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

module.exports = {
  getTrainNoInformation,
  setApiKey,
  getTrainBtwStation,
  getLiveTrainStatus,
  getTrainSchedule,
  getTrainFare,
  getSeatAvailability,
  getCoachPosition
};
