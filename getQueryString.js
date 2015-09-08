function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = (window.location.search || window.location.hash).substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
}