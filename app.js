function calendar() {
var manthName = document.querySelector("#month-name")
var dayName = document.querySelector("#day-name")
var dayNumber = document.querySelector("#day-number")
var year = document.querySelector("#year")

var date =new Date();
var month = date.getDate()
manthName.innerHTML = date.toLocaleString("en",{
    month:"long"
})
 dayName.innerHTML = date.toLocaleString ("en",{
    weekday:"long"
 })

 dayNumber.innerHTML = date.getDate()
 year.innerHTML = date.getFullYear()
}
calendar()