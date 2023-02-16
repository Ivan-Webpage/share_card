// 使用者回傳文字
function sendMessages(word) {
    liff.sendMessages([
        {
            type: 'text',
            text: word
        }
    ])
}

// 關閉liff畫面
function turnOff() {
    liff.closeWindow();
}


// 使用者分享
function share_BusinessCard() {
    let params = new URLSearchParams(location.search);
    let card = params.get('card')
    var mydata = JSON.parse("json/"+card);
    liff.shareTargetPicker([
        {
            type: "flex",
            altText: "card",
            contents: mydata
        }
    ]).catch(function (res) {
        alert("執行失敗，您是否有登入Line且授權呢？")
    })

    turnOff();
}