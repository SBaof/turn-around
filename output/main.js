/**
 * @function onload
 * @file main.js
 * @author sanbaofeng
 * @date 2016/8/11
 */
window.onload = function () {
    var oTurn = document.getElementById('turn');
    oTurn.onclick = function () {
        var strCls = oTurn.className;
        var str = /photo-front/;
        if (str.test(strCls)) {
            strCls = strCls.replace(/photo-front/, 'photo-back');
        }
        else {
            strCls = strCls.replace(/photo-back/, 'photo-front');
        }
        return oTurn.className = strCls;
    };
};
