
const calculateDogYears = (originalDogAge: number, weight: number) => {
    
    const focalLength: number = 413.1781;
    const startAge: number = 25.48807;
    const startIncOffset: number = -2.35626;
    const eqCorrection: number = 134.9106;
    const ageIncOff: number = 2.369763;
    const startAgeOffset: number = 585.2361;
    const cutOffYear: number = 3;
    const cutOffMonths: number = cutOffYear * 12;

    if (weight < 5) {
        weight = 5;
    }

    let dogAge: number = originalDogAge;

    if (originalDogAge < cutOffYear) {
        dogAge = cutOffYear;
    }

    const zb: number = (weight + startAgeOffset) * (weight + startAgeOffset) / (eqCorrection * focalLength);
    const winc: number = zb + startIncOffset;

    let humanAge: number = winc * (dogAge - ageIncOff) + startAge;

    if (originalDogAge < 3) {
        const humanAgeAt3 = humanAge;
        const underThreeFl = humanAgeAt3 * humanAgeAt3 / (4 * cutOffMonths);
        const dogAgeInMonths = originalDogAge * 12;
        humanAge = Math.sqrt(4 * dogAgeInMonths * underThreeFl);
    }
    return humanAge;
}

export default calculateDogYears;
