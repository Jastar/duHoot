var _0xedd1=["\x73\x6C\x6F\x77","\x66\x61\x64\x65\x49\x6E","\x68\x65\x61\x64\x65\x72\x20\x69\x6E\x70\x75\x74\x23\x73\x65\x61\x72\x63\x68","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x68\x65\x61\x64\x65\x72\x20\x62\x75\x74\x74\x6F\x6E\x5B\x74\x79\x70\x65\x3D\x27\x73\x75\x62\x6D\x69\x74\x27\x5D","\x66\x61\x64\x65\x4F\x75\x74","\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65","\x68\x65\x61\x64\x65\x72\x20\x66\x6F\x72\x6D","\x72\x65\x61\x64\x79"];$(document)[_0xedd1[8]](function(){$(_0xedd1[4])[_0xedd1[3]](function(){$(_0xedd1[2])[_0xedd1[1]](_0xedd1[0])});$(_0xedd1[7])[_0xedd1[6]](function(){$(_0xedd1[2])[_0xedd1[5]](_0xedd1[0])})})
var _0x6a73=["\x76\x61\x6C\x75\x65","\x63\x6F\x75\x6E\x74\x72\x79\x7A","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x44\x75\x62\x61\x69","\x68\x72\x65\x66","\x6D\x61\x70\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x6E\x2E\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x2E\x6F\x72\x67\x2F\x77\x69\x6B\x69\x2F\x44\x75\x62\x61\x69","\x4B\x72\x61\x6B\x6F\x76","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x6E\x2E\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x2E\x6F\x72\x67\x2F\x77\x69\x6B\x69\x2F\x4B\x72\x61\x6B\x25\x43\x33\x25\x42\x33\x77","\x4D\x65\x78\x69\x63\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x6E\x2E\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x2E\x6F\x72\x67\x2F\x77\x69\x6B\x69\x2F\x4D\x65\x78\x69\x63\x6F","\x43\x61\x6E\x61\x64\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x6E\x2E\x77\x69\x6B\x69\x70\x65\x64\x69\x61\x2E\x6F\x72\x67\x2F\x77\x69\x6B\x69\x2F\x43\x61\x6E\x61\x64\x61"];function vals(_0xd832x2){var _0xd832x2=document[_0x6a73[2]](_0x6a73[1])[_0x6a73[0]];if(_0xd832x2=== _0x6a73[3]){document[_0x6a73[2]](_0x6a73[5])[_0x6a73[4]]= _0x6a73[6]}else {if(_0xd832x2=== _0x6a73[7]){document[_0x6a73[2]](_0x6a73[5])[_0x6a73[4]]= _0x6a73[8]}else {if(_0xd832x2=== _0x6a73[9]){document[_0x6a73[2]](_0x6a73[5])[_0x6a73[4]]= _0x6a73[10]}else {if(_0xd832x2=== _0x6a73[11]){document[_0x6a73[2]](_0x6a73[5])[_0x6a73[4]]= _0x6a73[12]}}}}}

$(document).ready(function(){
    $("section#filter ul.filter button#home").click(function(){
        $("section#posts div.wrapper1, div.wrapper4, div.wrapper5, div.wrapper7, div.wrapper10, div.wrapper12 ").toggleClass("shadow");
    });

    $("section#filter ul.filter button#music").click(function(){
        $("section#posts div.wrapper2, div.wrapper6, div.wrapper8, div.wrapper11, div.wrapper13").toggleClass("shadow");
    });

    $("section#filter ul.filter button#bus").click(function(){
        $("section#posts div.wrapper3, div.wrapper9").toggleClass("shadow");
    });

    $("header button#menu").click(function(){
    	$("header ul#navigationMD").slideToggle("slow");
    })
});

