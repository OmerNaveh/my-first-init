import moment from 'moment';
moment().format();

function timeToNow(dateArr){
    console.log(moment())
    console.log(moment(dateArr).toNow());
}
timeToNow([2019,10,18]);