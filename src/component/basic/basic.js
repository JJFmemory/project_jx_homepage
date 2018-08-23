var jxCustomerService = {

    init: function (service) {//初始化

        if (!$("#MEIQIA-PANEL-HOLDER").length > 0) {


            function jfServiceSwitch(visibility) {
                if (visibility === 'visible') {
                    $('#MEIQIA-PANEL-HOLDER').removeClass('hide').addClass('show');
                    setTimeout(
                        function () {
                            $('#MEIQIA-PANEL-HOLDER').removeClass('show')
                        }
                        , 300)
                }

                else {
                    // --------------------------------------------------------------------------------------------------你可以根据自己的需求编写相应的代码
                    $('#MEIQIA-PANEL-HOLDER').addClass('hide');
                }
            }

            (function (m, ei, q, i, a, j, s) {
                m[i] = m[i] || function () {
                    (m[i].a = m[i].a || []).push(arguments)
                };
                j = ei.createElement(q);
                s = ei.getElementsByTagName(q)[0];
                j.async = true;
                j.charset = 'UTF-8';
                j.src = '//static.meiqia.com/dist/meiqia.js';
                s.parentNode.insertBefore(j, s);
            })(window, document, 'script', '_MEIQIA');
            _MEIQIA('entId', '108828');

            // ----------------------------------------------------------------------------------------------------------在这里开启手动模式（必须紧跟美洽的嵌入代码）
            _MEIQIA('manualInit');


            // ----------------------------------------------------------------------------------------------------------你可以自己的代码中选择合适的时机来调用手动初始化
            _MEIQIA('withoutBtn');                                                                                      //不使用插件按钮
            _MEIQIA('allSet', jfServiceSwitch);                                                                         //初始设置
            _MEIQIA('getPanelVisibility', jfServiceSwitch);                                                              //改变状态后设置
            _MEIQIA('init');                                                                                             //初始化


            //-----------------------------------------------------------------------------------------------------------用户信息导入
            _MEIQIA('metadata', service);
        }
    },
    click: function () { //导入使用
        _MEIQIA('showPanel')
    }
};
//嘉福客服模块结束
jxCustomerService.init(
    {//用户信息
        name: 'new首页访客',// 名字
        email: '',// 邮箱
        tel: '1',// 电话
        '公司名称': '',
        '员工编号': '',
    }
);

