/*この関数をスケジューラーで回して接続を維持する。*/
function doRetain() {
  var json = {
    'userid':'',
    'channelid':'',
    'message':'',
  };
  sendGlitch(GLITCH_URL, json);
}

function sendGlitch(uri, json) {
  var params = {
    'contentType' : 'application/json; charset=utf-8',
    'method' : 'post',
    'payload' : json,
    'headers' : json,
    'muteHttpExceptions': true
  };

  response = UrlFetchApp.fetch(uri, params);
}