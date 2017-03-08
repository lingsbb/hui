/**
 * 从浏览器下载文件 
 */
function downloadBrowser(){
	var os=getOSInfo();
	var isIE=getBrowserInfo();
	var browser=getBrowserInfoDetailed();
	var verinfo = (browser+"").replace(/[^0-9.]/ig,"");
	var v_info=parseFloat(verinfo);
	//alert("你的操作系统是:"+os+",你的浏览器是:"+v_info);
	//if(os=="Win7"){
		if(isIE=="IE"&&v_info<=8.0){
			//alert("您的浏览器是:"+browser+"。建议您使用谷歌或者火狐浏览器!");
			window.location.href="../public/browser_upgrade" ;
		}else{
			window.location.href="../public/eyt_index" ;
		}
	//}
	//alert("你的操作系统是："+os+"；你的浏览器是："+isIE);
}
/**
 * 获取浏览器一般信息
 */
function getBrowserInfo(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    } //判断是否IE浏览器
    else return "Other";
}
/**
 * 获取浏览器详细信息
 */
function getBrowserInfoDetailed(){
	var agent = navigator.userAgent.toLowerCase() ;

	var regStr_ie = /msie [\d.]+;/gi ;
	var regStr_ff = /firefox\/[\d.]+/gi
	var regStr_chrome = /chrome\/[\d.]+/gi ;
	var regStr_saf = /safari\/[\d.]+/gi ;
	//IE
	if(agent.indexOf("msie") > 0)
	{
	return agent.match(regStr_ie) ;
	}

	//firefox
	if(agent.indexOf("firefox") > 0)
	{
	return agent.match(regStr_ff) ;
	}
	
	//Safari
	if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
	{
	return agent.match(regStr_saf) ;
	}
	
	//Chrome
	if(agent.indexOf("chrome") > 0)
	{
	return agent.match(regStr_chrome) ;
	}

}
/**
 * 获取OS版本
 */
function getOSInfo(){
	 var sUserAgent = navigator.userAgent;
	 var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
	 var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");          if (isMac)
	 return "Mac";
	var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
	if (isUnix) return "Unix";
	var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
	if (isLinux) return "Linux";
	if (isWin) {
	var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
	if (isWin2K) return "Win2000";
	var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
	if (isWinXP) return "WinXP";
	var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
	if (isWin2003) return "Win2003";
	var isWin2003 = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
	if (isWin2003) return "WinVista";
	var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
	if (isWin2003) return "Win7";
	}
	return "other";
}
/**
 * 查询get请求的参数
 */
function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
/**
 * json对象变字符串
 */
function json2str(json) {
	var str = JSON.stringify(json);
	return str;
}
/**
 * 字符串变json对象
 */
function str2json(str) {
	try
	{
		var json = JSON.parse(str);
		return json;
	}
	catch(err)
	{
		// txt="此页面存在一个错误。\n\n"
		// txt+="错误描述: " + err.description + "\n\n"
		// txt+="点击OK继续。\n\n"
		// alert(txt)
	}
}
/**
 * 删除json对象
 */
function delJson(index, dataArray){
    var len=dataArray.length;
    for(var i=0;i<len;i=i+1){
        if(i==(index-1)){
            for(var j=i+1;j<len;j=j+1){
                
                dataArray[j-1]=dataArray[j];
            }
            dataArray.length--;
        }
    }
}
/**
 * 添加json对象
 */
function addJson(json, newJsonObj) {
	json.push(newJsonObj);
}

/**
 * /去除左右空格
 */
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHour=date.getHours();
    var strMinute=date.getMinutes();
    var strSecond=date.getSeconds();
    
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHour >= 0 && strHour <= 9) {
        strHour = "0" + strHour;
    }
    if (strMinute >= 0 && strMinute <= 9) {
        strMinute = "0" + strMinute;
    }
    if (strSecond >= 0 && strSecond <= 9) {
        strSecond = "0" + strSecond;
    }
        
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + strHour+ seperator2 + strMinute
            + seperator2 +strSecond;
    return currentdate;
}

function isRepeat(arr) {
	var hash = {};
	for(var i in arr) {
		if(hash[arr[i]])
			return true;
		hash[arr[i]] = true;
	}
	return false;
}

String.prototype.trim=function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

function get_uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; 
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); 
                                                        
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
