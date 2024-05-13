export const isGoodPassword = value => {
    const regex = /(?=.*[a-z])(?=.*[A-Z].{6,12})(?=.*\d)/;
    return regex.test(value);
};