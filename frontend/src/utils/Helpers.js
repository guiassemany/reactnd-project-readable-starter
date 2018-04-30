export function makeid() {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < 18; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

export function formatDate(timestamp) {
    // Unixtimestamp
    var unixtimestamp = timestamp
    // Months array
    var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp)

    // Year
    var year = date.getFullYear()

    // Month
    var month = months_arr[date.getMonth()]

    // Day
    var day = date.getDate()

    // Hours
    var hours = date.getHours()

    // Minutes
    var minutes = "0" + date.getMinutes()

    // Seconds
    var seconds = "0" + date.getSeconds()

    // Display date time in MM-dd-yyyy h:m:s format
    return month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

}
