
setInterval(() => {

    // Getting time data from date object....
    let date = new Date();
    let hour = date.getHours();
    hour = (hour<10)? '0'+ hour : hour;
    let minute = date.getMinutes();
    minute = (minute<10)? '0'+ minute : minute;
    let sec = date.getSeconds();
    sec = (sec<10)? '0'+ sec : sec;
    let fulldate = date.toDateString();

    // Regular expressions for customising date string...

    const getGMT = /GMT.[0-9][0-9][0-9][0-9]/;
    const getArea = /\(.*?\)/;

    // Selection of some html elements....
    const d_time = eleID('d_time');
    const time_zone = eleID('time_zone');
    const mntpin = eleID('mnt');
    const secpin = eleID('sec');
    const hrpin = eleID('hr');
    const area = eleID('area');

    // Utility Functions.....
    let updateDigital = () => {
        let datestr = date.toTimeString();
        let GMT = datestr.match(getGMT);
        let areaname = datestr.match(getArea);
        d_time.innerHTML = hour + ':' + minute + ':' + sec;
        time_zone.innerHTML = fulldate + " " + GMT;
        area.innerHTML = areaname;
    }
    let updateAnalog = (minute, sec, hour) => {
        hour = (hour > 12) ? hour - 12 : hour;
        secpin.style.transform = `translate(-20%,-50%) rotate(${sec * 6 -90}deg)`;
        mntpin.style.transform = `translate(-20%,-50%) rotate(${minute * 6 - 90 + (sec * 6 - 90) * 6 / 360}deg)`;
        hrpin.style.transform = `translate(-20%,-50%) rotate(${hour * 30 - 90 + (minute * 6 - 90) * 30 / 360}deg)`;
    }
    function eleID(name){
        return document.getElementById(name);
    }


    //Updating the clocks....
    updateAnalog(minute, sec, hour);
    updateDigital();

});