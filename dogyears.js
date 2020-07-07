
function calculateDogYears(originalDogAge, weight) {

    var focalLength = 413.1781;
    var startAge = 25.48807;
    var startIncOffset = -2.35626;
    var eqCorrection = 134.9106;
    var ageIncOff = 2.369763;
    var startAgeOffset = 585.2361;
    var cutOffYear = 3;
    var cutOffMonths = cutOffYear * 12;

    if (weight < 5) {
        weight = 5;
    }

    var dogAge = originalDogAge;

    if (originalDogAge < cutOffYear) {
        dogAge = cutOffYear;
    }

    var zb = (weight + startAgeOffset) * (weight + startAgeOffset) / (eqCorrection * focalLength);
    var winc = zb + startIncOffset;

    var humanAge = winc * (dogAge - ageIncOff) + startAge;

    if (originalDogAge < 3) {
        var humanAgeAt3 = humanAge;
        var underThreeFl = humanAgeAt3 * humanAgeAt3 / (4 * cutOffMonths);
        var dogAgeInMonths = originalDogAge * 12;
        humanAge = Math.sqrt(4 * dogAgeInMonths * underThreeFl);
    }
    return humanAge;
}

export default calculateDogYears;
