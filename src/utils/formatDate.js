export default (date) => {
    const formatter = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'short', year: 'numeric' });

    return formatter.format(new Date(date));
}