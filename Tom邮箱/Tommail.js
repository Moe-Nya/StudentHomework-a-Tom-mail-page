window.onload = init;

function init()
{
    //邮箱用户名
    document.getElementById("user").onfocus = UserName;
    document.getElementById("user").onblur = UserName;
    document.getElementById("pasw").onfocus = PawOne;
    document.getElementById("pasw").onblur = PawOne;
    document.getElementById("pasw2").onfocus = PawOne;
    document.getElementById("pasw2").onblur = PawOne;
    document.getElementById("phone").onfocus = Phone;
    document.getElementById("phone").onblur = Phone;
}

function UserName()  //邮箱用户名
{
    var spn = document.getElementById("spnmail");  //文字反馈
    var str = document.getElementById("user").value;
    var firstword = /^[a-zA-Z]/;
    var allword = /[^a-zA-Z0-9,_-]/;
    if(str == 0)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="不能为空";
        return false;
    }
    else if(str.length < 6 || str.length >18)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="用户名须在6-18字符之间";
        return false;
    }
    else if(firstword.test(str) == false)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="开头必须是字母";
        return false;
    }
    else if(allword.test(str) == true)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="包含非法字符";
        return false;
    }
    else
    {
        spn.style.backgroundImage="url(img/right.jpg)";
        spn.innerHTML="可以注册";
        return true;
    }
}

function PawOne()
{
    var spn = document.getElementById("spnspw");
    var str = document.getElementById("pasw").value;
    var allword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;

    var spn2 = document.getElementById("spnspw2");
    var str2 = document.getElementById("pasw2").value;

    if(str == 0)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="不能为空";
        return false;
    }
    else if(str.length < 6 || str.length >18)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="用户名须在6-18字符之间";
        return false;
    }
    else if(allword.test(str) == false)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="用数字+字母组合";
        return false;
    }
    else
    {
        spn.style.backgroundImage="url(img/right.jpg)";
        spn.innerHTML="可以注册";
        if(str2 != str)
        {
        spn2.style.backgroundImage="url(img/onError.gif)";
        spn2.innerHTML="与第一次密码需要相同";
        return false;
        }
        else
        {
            spn2.style.backgroundImage="url(img/right.jpg)";
            spn2.innerHTML="可以注册";
            return true;
        }
    }
}

function Phone()
{
    var spn = document.getElementById("spnsphone");
    var str = document.getElementById("phone").value;
    var numhead = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;

    if(str == 0)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="不能为空";
        return false;
    }
    else if(numhead.test(str) == false)
    {
        spn.style.backgroundImage="url(img/onError.gif)";
        spn.innerHTML="请输入正确的手机号";
        return false;
    }
    else
    {
        $.ajax({
            type: "get",
            url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+str,  //tel为你输入的号码
            dataType: "jsonp",
            jsonp: "callback",
            success: function(data){
            var diqu = data.province;//地区
            var yunying = data.catName; //运营商  
            spn.style.backgroundImage="url(img/right.jpg)";
            spn.innerHTML = "地区:" + diqu + "  运营商:" + yunying;
            },
        })
    }
}