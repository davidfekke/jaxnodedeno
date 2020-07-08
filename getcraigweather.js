
// URL for weather at craig airport
const crgwx = 'http://avwx.herokuapp.com/metar/kcrg';

const result = await fetch(crgwx);
const json = await result.json();

for (let report of json.reports) {
    console.log(report.flight_category);
    for (let sky of report.sky_condition) {
        console.log(`${sky.sky_cover} at ${sky.cloud_base_ft_agl} feet.`);
    }    
}
