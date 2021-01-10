let monthsArray = [
    'Ene', 'Feb', 'Mar', 'Abr',
    'May', 'Jun', 'Jul', 'Ago',
    'Sep', 'Oct', 'Nov', 'Dic'
];

export function parseDate (created_at) {
    let date = new Date(created_at);
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    return `${ currentDate } ${ monthsArray[currentMonth] } ${ currentYear }`;
}
