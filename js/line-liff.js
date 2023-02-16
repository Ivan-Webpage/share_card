
function getLiff(liffID, backURL) {
    liff.init({
        liffId: "1657826069-OmEnqNJY",
    }).then(function () {
        // 這邊開始寫使用其他功能
        if (liff.isLoggedIn()) { // 判斷是否有登入line
        } else {
            alert('請先登入Line！')
            liff.login({
                redirectUri: "https://ivan-webpage.github.io/share_card/" // 使用者登入後要去到哪個頁面
            });
        }
    }).catch(function (error) {
        console.log("掛掉了: " + error);
    });

};

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

// 檢查是否有登入
function checkLogin() {
    return liff.isLoggedIn();
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
}