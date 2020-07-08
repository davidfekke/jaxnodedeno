
// URL for weather at craig airport
const crgwx = 'http://avwx.herokuapp.com/metar/kcrg';

const result = await fetch(crgwx);
const json = await result.json();

json.reports.forEach(report => {
    //console.log(report);
    console.log(`observation_time: ${report.observation_time}`);
    console.log(`temp_c: ${report.temp_c}`);
    console.log(`dewpoint: ${report.dewpoint_c}`);
    console.log(`wind: ${report.wind_dir_degrees} at ${report.wind_speed_kt} knots`);
    console.log(`visibility: ${report.visibility_statute_mi}`);
    console.log(`altimeter: ${report.altim_in_hg}`);
    console.log(report.flight_category);
    report.sky_condition.forEach(sky => {
        console.log(`${sky.sky_cover} at ${sky.cloud_base_ft_agl} feet.`);
    });
});
