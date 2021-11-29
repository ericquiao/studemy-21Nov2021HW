// (function counter(){
//     console.log("Start");
//     setTimeout(function(){console.log("1s passed"); 
//             setTimeout(function(){console.log("another 2s passed");
//                 setTimeout(function(){console.log("End");
//                 }, 2000)
//             }, 2000)
//         },1000
//     );
// })()

(function counter(){
    console.log("Start");
    setTimeout(function(){console.log("1s passed");
        setTimeout(function(){console.log("2s passed");
            setTimeout(function(){console.log("end");
        },2000)
        },2000)
    },1000)
    
})()


