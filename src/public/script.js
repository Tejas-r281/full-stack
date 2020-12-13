$(function (params) {
    let kmBox= $('#km')
    let minBOx=$('#min')
    let calcBtn= $('#calfare')
    let fareDiv= $('#fare')

    calcBtn.click(function (params) {
        $.post('/calcfare',{
           km : kmBox.val(),
           min: minBOx.val()
        },function(data){
            fareDiv.text(data.fare)
        })
    })
})