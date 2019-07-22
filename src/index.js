var rp = require("request-promise");
let apiKey = null;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
setApiKey = api_key => {
  apiKey = api_key;
};

getTrainRoute = (train_No, callback) => {
  rp(`https://api.railwayapi.com/v2/route/train/${train_No}/apikey/${apiKey}/`)
    .then(res => {
      let stations = [];
      let data = res.split('"route":')[1];
      let data1 = data.split('"station":');
      for (let i = 1; i < data1.length; i++) {
        let name = data1[i].split('"name":')[1];
        let code = data1[i].split('"code":')[1];

        let scharr = data1[i].split('"scharr":')[1];
        let schdep = data1[i].split('"schdep":')[1];
        // console.log(name);
        let final_name = name.split('"')[1];
        let final_code = code.split('"')[1];
        // console.log(schdep);

        let final_scharr = scharr.split('"')[1];
        const final_schdep = schdep.split('"')[1];
        final_name = toTitleCase(final_name);
        final_name = final_name.trim();
        stations.push([final_name, final_code, final_scharr, final_schdep]);
      }
      callback(stations);
    })
    .catch(err => {
      callback(err);
    });
};

//
getTrainBtwStation = (start, end) => {
  rp(
    `https://api.railwayapi.com/v2/between/source/${start}/dest/${end}/apikey/${apiKey}/`
  )
    .then(res => {
      // for (let i = 1; i < data.length; i++) {
      //   let name = data[i].split('"name":')[1];
      //   console.log(name);
      // }
      let st = [];
      let name = res.split('"trains":')[1];
      // for (let i = 0; i < name.length; i++) {
      //   let d = name[i].split('"travel_time":')[0];
      //   console.log(d);
      // }
      callback(name);
    })
    .catch(err => {
      callback(err);
    });
};

getPnrStatus = (pnrNo, callback) => {
  rp(`http://api.railwayapi.com/v2/pnr-status/pnr/${pnrNo}/apikey/${apiKey}/`)
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};
module.exports = { getTrainRoute, setApiKey, getTrainBtwStation };
