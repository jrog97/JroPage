   document.getElementById('container').onchange = function(){
       var Pro = document.getElementById('Processors');
       var Moth = document.getElementById('Motherboards');
       var Mem = document.getElementById('Memory');
       var Store = document.getElementById('Storage');
       var Adi = document.getElementById('AdiFeatures');
      
       function getSelectedOption(Pro) {
        var opt;
        for ( var i = 0, len = Pro.options.length; i < len; i++ ) {
            opt = Pro.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    function getSelectedOption(Mem) {
        var opt;
        for ( var i = 0, len = Mem.options.length; i < len; i++ ) {
            opt = Mem.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    function getSelectedOption(Moth) {
        var opt;
        for ( var i = 0, len = Moth.options.length; i < len; i++ ) {
            opt = Moth.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }
    function getSelectedOption(Store) {
        var opt;
        for ( var i = 0, len = Store.options.length; i < len; i++ ) {
            opt = Store.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }
    function getSelectedOption(Adi) {
        var opt;
        for ( var i = 0, len = Adi.options.length; i < len; i++ ) {
            opt = Adi.options[i];
            if ( opt.selected === true ) {
                break;
            
            }
           
        }
        return opt;
    
    }
  
   var  opt = Number(getSelectedOption(Pro).value);
     var opt1 = Number(getSelectedOption(Moth).value);
    var opt2 = Number(getSelectedOption(Mem).value);
     var opt3 = Number(getSelectedOption(Store).value);
    var opt4 = Number(getSelectedOption(Adi).value);


   

    var Sub = opt + opt1 + opt2 + opt3 + opt4 + 0;
    var IVU = (Sub*.115);
    var Totalof =  (opt + opt1 + opt2 + opt3 + opt4) + (Sub*.115);
    var sFix = Sub.toFixed(2);
    var iFix =  IVU.toFixed(2);
    var tFix = Totalof.toFixed(2);
     
    document.getElementById('subt').value="$" + Sub.toFixed(2);
    document.getElementById('Iv').value="$" + IVU.toFixed(2);
    document.getElementById('Tot').value="$" + Totalof.toFixed(2); 

    window.sessionStorage.setItem("su",sFix);
    window.sessionStorage.setItem("tax",iFix);
    window.sessionStorage.setItem("to",tFix);
   

    
    
var Proc = getSelectedOption(Pro).text;
var Mother =  getSelectedOption(Moth).text;
var Str = getSelectedOption(Store).text;
var Adit = getSelectedOption(Adi).text;
var Memo = getSelectedOption(Mem).text;

window.sessionStorage.setItem("Pr",Proc);
window.sessionStorage.setItem("Mo",Mother);
window.sessionStorage.setItem("St",Str);
window.sessionStorage.setItem("Ad",Adit);
window.sessionStorage.setItem("Me",Memo);



   
   
 }