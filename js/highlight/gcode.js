(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[63],{354:function(e,n){e.exports=function(e){var n=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(/\(/,/\)/),e.inherit(e.C_NUMBER_MODE,{begin:"([-+]?([0-9]*\\.?[0-9]+\\.?))|"+e.C_NUMBER_RE}),e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",end:"([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{aliases:["nc"],case_insensitive:!0,lexemes:"[A-Z_][A-Z0-9_.]*",keywords:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",contains:[{className:"meta",begin:"\\%"},{className:"meta",begin:"([O])([0-9]+)"}].concat(n)}}}}]);
//# sourceMappingURL=gcode.js.map?v=23855206a6fb715ebe61