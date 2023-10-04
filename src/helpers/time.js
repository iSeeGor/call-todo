export const twoDigitsTimeFormat = (time) => {
    return String(time).padStart(2, '0');
}

export const timeToTimestamp = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours( parseInt(hours, 10), parseInt(minutes, 10) );

    return date.getTime();
}

export const timeFromTimestamp = (timestamp) => {
    const date = new Date();
    const twoDigit = twoDigitsTimeFormat;

    date.setTime(timestamp)

    return twoDigit(date.getHours()) + ":" + twoDigit( date.getMinutes() );
}