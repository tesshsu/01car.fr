
export const transformValueToBoolean = (value) => {
    return value.toLowerCase() === "true" || value === 1 || value === '1' || value === true;
}



