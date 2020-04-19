function doPost(e) {
  var params = JSON.parse(e.postData.getDataAsString());  // ※
  var message = params.message;  // => "AAA"が取れる
  var userId = params.userId;  // => "AAA"が取れる

  var res = receiveDiscordValue(message, userId);

  return ContentService.createTextOutput(JSON.stringify(res, null, 2))
  .setMimeType(ContentService.MimeType.JSON);

}

function doGet(e) {
  var message = '<@!12345678>おは';
  var userId = '1234';
  var res = receiveDiscordValue(message, userId);

  return ContentService.createTextOutput(JSON.stringify(res, null, 2))
  .setMimeType(ContentService.MimeType.JSON);
}

// discordからのvalueを受け取ってリプライ用メッセージを返す
function receiveDiscordValue(message, userId) {
  var resMsg = null;

  if(message.indexOf(' ') != -1){
    var values = message.split(' ');
  } else if(message.indexOf('　') != -1) {
    var values = message.split('　');
  } else {
    var values = message.split('>');
    Logger.log(values);
    values[0] = values[0] + '>';
  }

  // []でくくったコマンドを判定
  if(values[0].match(/^\[(?=.*\])/i)){
    var fastValue = values[0].split(']')[1];
    var order = values[0].split(']')[0].substring(1);

    /* ここらへんにGASに書き込んだりコマンドを実行したりする処理を追加*/
    

    
  }
  // 命令判定(glitchで返すもの以外)
  else if(values[0].indexOf('<@!'+BOT_CLIENT+'>') != -1 || values[0].indexOf('<@'+BOT_CLIENT+'>') != -1){
    var fastValue = values[1];
    
    if (fastValue == 'help'){
      resMsg = 'ヘルプメッセージを設定';
    }
  }

  resMsg = findRow(fastValue, userId);
  
  if (resMsg == null) {
    resMsg = "[ERROR:]" + fastValue + '^' + values;
  }

  return resMsg;
}


//function findRow(text, idol, judg){
function findRow(text, userId){
  var rows = SS.getDataRange().getValues(); //受け取ったシートのデータを二次元配列に取得
  var userIdConf = '<@!' + userId + '> ';
  var resMessage = '';
  
  var array = [];
  if(!isEmpty(text)){
    for(var i=1;i<rows.length;i++){
      if(text.indexOf(rows[i][0])!== -1){
        array.push(rows[i][1]);
      }
    }
  }

  if(!isEmpty(array)){
    var random = Math.floor( Math.random() * array.length );
    resMessage = array[random];
    if(resMessage.indexOf('/user')!== -1){
        resMessage = resMessage.replace('/user', userIdConf);
    }
  } else {
    //デフォルトメッセージ
    resMessage = '';
  }

  return resMessage;
}

function isEmpty(val){

    if ( !val ) {//null or undefined or ''(空文字) or 0 or false

        if ( val !== 0 && val !== false ) {
            return true;
        }

    }else if( typeof val == "object"){//array or object

        return Object.keys(val).length === 0;

    }

    return false;//値は空ではない
}