import moment from 'moment';
moment().format();

function timeToNow(dateArr){
    return moment(dateArr).toNow();
}
// timeToNow([2019,10,18]);

function timeFromAToB(date1,date2){
    const momenent1 = moment(date1);
    const moment2 = moment(date2);
    return momenent1.from(moment2);
}