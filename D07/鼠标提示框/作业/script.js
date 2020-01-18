window.onload = function()
{
    var oRember = document.getElementById('J_rember');

    var oTips = document.getElementById('J_tips');

    oRember.onmouseout = function(){
    oTips.style.display = 'none';
    }

    oRember.onmouseover = function(){
    oTips.style.display = 'block';
    }
}
