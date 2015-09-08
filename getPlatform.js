//取得系统平台的类型、版本
function getPlatform() {
    var sUa = navigator.userAgent.toLowerCase();
    var platform = (function() {
        var aTmp1 = ["", ""], sName = "unkonw";
        if(sUa.indexOf("windows") > -1) { aTmp1 = sUa.match(/windows ([\d.]+)/); sName = "windows"; }
        if(sUa.indexOf("windows nt") > -1) { aTmp1 = sUa.match(/windows nt ([\d.]+)/); sName = "windows"; }
        if(sUa.indexOf("linux") > -1) { aTmp1 = sUa.match(/linux ([\d.]+)/); sName = "linux"; }
        if(sUa.indexOf("mac") > -1) { aTmp1 = sUa.match(/mac ([\d.]+)/); sName = "mac"; }
        if(sUa.indexOf("ipod") > -1) { aTmp1 = sUa.match(/ipod ([\d.]+)/); sName = "iPod"; }
        if(sUa.indexOf("ipad") > -1) { aTmp1 = sUa.match(/ipad ([\d.]+)/); sName = "iPad"; }
        if(sUa.indexOf("iphone") > -1) { aTmp1 = sUa.match(/iphone ([\d.]+)/); sName = "iPhone"; }
        if(sUa.indexOf("android") > -1) { aTmp1 = sUa.match(/android ([\d.]+)/); sName = "android"; }
        if((sUa.indexOf("iphone") > -1 && sUa.indexOf("micromessenger") > -1) ) { aTmp1 = sUa.match(/iphone ([\d.]+)/); sName = "iphone_weChat"; } //新增 微信内置浏览器判断
        if((sUa.indexOf("ipad") > -1 && sUa.indexOf("micromessenger") > -1) ) { aTmp1 = sUa.match(/ipad ([\d.]+)/); sName = "ipad_weChat"; } //新增 微信内置浏览器判断
        if(sUa.indexOf("android") > -1 && sUa.indexOf("micromessenger") > -1 ) { aTmp1 = sUa.match(/android ([\d.]+)/); sName = "android_weChat"; } //新增 微信内置浏览器判断
        return sName;
    })();
    return platform;
}
