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
module.exports = { getTrain, setApiKey };
