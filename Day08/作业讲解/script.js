 // 当页面加载完之后再出发window.onload事件
window.onload = function(){
    // 声明变量的语法：var 变量名 = 变量值;

    // 获取label元素对象，并赋值给变量oRemeber
    var oRemeber = document.getElementById('J_remeber');

    // 获取div元素对象，并赋值给变量oTips
    var oTips = document.getElementById('J_tips');

    // 给label元素绑定鼠标移入事件
    oRemeber.onmouseover = function(){
        // 显示提示框
        oTips.style.display = 'block';
    }

    // 给label元素绑定鼠标移出事件
    oRemeber.onmouseout = function(){
        // 隐藏提示框
        oTips.style.display = 'none';
    }
}