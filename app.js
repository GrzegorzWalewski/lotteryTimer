var lotteryDate = new Date(2021, 3, 26, 16,52);
var timerInterval;
function updateTimer(lotteryDate)
{
    var now = new Date();
    var  diffTime = lotteryDate - now;
    if(diffTime <= 0)
    {
        clearInterval(timerInterval);
        return true;
    }
// Days
    var  diffDays = Math.floor( diffTime / (1000 * 60 * 60 * 24));
    diffTime -= diffDays * 86400000;
// Hours
    var  diffHours = (Math.floor( diffTime / (1000 * 60 * 60)));
    diffTime -= diffHours * 3600000;
// Minutes
    var  diffMinutes = (Math.floor( diffTime / (1000 * 60)));
    diffTime -= diffMinutes * 60000;
// Seconds
    var  diffSeconds = Math.floor( diffTime / (1000));
    if(diffDays == 0)
    {
        // Update timer text
        $('#time_name_1').text("hours");
        $('#time_name_2').text("minutes");
        $('#time_name_3').text("seconds");
        // Update timer
        $('#time_1').text(diffHours);
        $('#time_2').text(diffMinutes);
        $('#time_3').text(diffSeconds);
    }
    else
    {
        // Update timer text
        $('#time_name_1').text("days");
        $('#time_name_2').text("hours");
        $('#time_name_3').text("minutes");
        // Update timer
        $('#time_1').text(diffDays);
        $('#time_2').text(diffHours);
        $('#time_3').text(diffMinutes);
    }
}
// Run interval on document ready
$( document ).ready(function() {
    timerInterval = setInterval("updateTimer(lotteryDate)", 1000);
});