
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"uni-numbox { display: -webkit-inline-box; display: -webkit-inline-flex; display: inline-flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; height: ",[0,70],"; position: relative; }\n.",[1],"uni-numbox::after { content: \x27\x27; position: absolute; -webkit-transform-origin: center; transform-origin: center; box-sizing: border-box; pointer-events: none; top: -50%; left: -50%; right: -50%; bottom: -50%; border: 1px solid #c8c7cc; -webkit-transform: scale(.5); transform: scale(.5); }\n.",[1],"uni-numbox-minus, .",[1],"uni-numbox-plus { margin: 0; background-color: #f9f9f9; width: ",[0,80],"; height: 100%; line-height: ",[0,70],"; text-align: center; color: #555555; position: relative; }\n.",[1],"uni-numbox-minus { border-right: none; border-top-left-radius: ",[0,6],"; border-bottom-left-radius: ",[0,6],"; }\n.",[1],"uni-numbox-plus { border-left: none; border-top-right-radius: ",[0,6],"; border-bottom-right-radius: ",[0,6],"; }\n.",[1],"uni-numbox-value { position: relative; background-color: #ffffff; width: ",[0,80],"; height: 100%; text-align: center; }\n.",[1],"uni-numbox-value::after { content: \x27\x27; position: absolute; -webkit-transform-origin: center; transform-origin: center; box-sizing: border-box; pointer-events: none; top: -50%; left: -50%; right: -50%; bottom: -50%; border-style: solid; border-color: #cccccc; border-left-width: 1px; border-right-width: 1px; border-top-width: 0; border-bottom-width: 0; -webkit-transform: scale(.5); transform: scale(.5); }\n.",[1],"uni-numbox-disabled { color: #c0c0c0; }\n",],undefined,{path:"./pages/template/number-box/number-box.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/number-box/number-box.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      