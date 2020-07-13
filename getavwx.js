const { args } = Deno;

// URL for weather defaults to craig airport
const defaultAirport = 'kcrg';
const airport = (args !== null && args.length === 1) ? args[0] : defaultAirport;  
const wx_url = `http://avwx.herokuapp.com/metar/${airport}`;

const result = await fetch(wx_url);
const json = await result.json();


json.reports.forEach(report => {
    console.log(`observation_time: ${report.observation_time}`);
    console.log(`temp: ${report.temp_c} (Celcius)`);
    console.log(`dewpoint: ${report.dewpoint_c} (Celcius)`);
    console.log(`wind: ${report.wind_dir_degrees} at ${report.wind_speed_kt} knots`);
    console.log(`visibility: ${report.visibility_statute_mi}`);
    console.log(`altimeter: ${report.altim_in_hg.toFixed(2)}`);
    console.log(`flight category: ${report.flight_category}`);
    if (report.sky_condition) { //  && report.sky_condition.length > 0
        if (Array.isArray(report.sky_condition)) {
            report.sky_condition.forEach(sky => {
                if ('cloud_base_ft_agl' in sky) {
                    console.log(`sky cover: ${sky.sky_cover} at ${sky.cloud_base_ft_agl} feet.`);
                } else {
                    console.log(`sky cover: ${sky.sky_cover}`);
                }       
            });
        } else {
            if ('cloud_base_ft_agl' in report.sky_condition) {
                console.log(`sky cover: ${report.sky_condition.sky_cover} at ${report.sky_condition.cloud_base_ft_agl} feet.`);
            } else {
                console.log(`sky cover: ${report.sky_condition.sky_cover}`);
            }
        }
    }
});
