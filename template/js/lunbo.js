(function(win,doc){
            function change(){
                doc.documentElement.style.fontSize=doc.documentElement.clientWidth*20/320+'px';
            }
            change();

            win.addEventListener('resize',change,false);
        })(window,document);

        document.addEventListener('DOMContentLoaded',function(){
            var oBox=document.getElementById('box6');
            var oUl=oBox.getElementsByTagName('ul')[0];
            var aLi=oUl.children;

            var iNow=1;
            var x=-iNow*aLi[0].offsetWidth;//偏移量
            var bFlag=true;

            oUl.addEventListener('touchstart',function(ev){
                alert(1);
                if(!bFlag){
                    return;
                }
                bFlag=!bFlag;

                var downX=ev.targetTouches[0].pageX;
                var disX=downX-x;

                function move(ev){
                    x=ev.targetTouches[0].pageX-disX;

                    oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
                }

                function end(ev){
                    oUl.style.WebkitTransition='.5s all ease';
                    var upX=ev.changedTouches[0].pageX;
                    if(Math.abs(upX-downX)>100){
                        //下一张
                        if((upX-downX)>0){
                            //显示左面
                            iNow--;
                        }else{
                            //显示右边
                            iNow++;

                        }

                    }
                    x=-iNow*aLi[0].offsetWidth;
                    oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';

                }
                function tEnd(){
                    oUl.removeEventListener('touchmove',move,false);
                    oUl.removeEventListener('touchend',end,false);
                    oUl.removeEventListener('transitionend',tEnd,false);
                    oUl.style.WebkitTransition='none';

                    if(iNow==aLi.length-1){
                        iNow=1;
                        x=-iNow*aLi[0].offsetWidth;
                        oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
                    }
                    if(iNow==0){
                        iNow=aLi.length-2;
                        x=-iNow*aLi[0].offsetWidth;
                        oUl.style.WebkitTransform='translate3d('+x+'px,0,0)';
                    }

                    bFlag=!bFlag;
                }

                oUl.addEventListener('touchmove',move,false);
                oUl.addEventListener('touchend',end,false);
                oUl.addEventListener('transitionend',tEnd,false);

                ev.preventDefault();
            },false)



        },false)