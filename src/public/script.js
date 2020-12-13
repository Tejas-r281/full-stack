

$(function (params) {
    let kmBox= $('#km')
    let minBOx=$('#min')
    let calcBtn= $('#calfare')
    let fareDiv= $('#fare')
    let starter= $('#starter')
    let startbtn=$('#startbtn')

    calcBtn.click(function (params) {
        $.post('/calcfare',{
           km : kmBox.val(),
           min: minBOx.val()
        },function(data){
            fareDiv.text(data.fare)
        })
    })

    
        $.post('/starter',{
            km:kmBox.val(),
            min: minBOx.val()
        },function(data){
            let inserttext="";
            inserttext +=`Initial price for riding will ${data.price},and intial starting kilometer will ${data.kilometer}`
            starter.text(inserttext)
        })
    })