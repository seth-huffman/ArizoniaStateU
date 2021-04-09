/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                tag: 'img',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'LIGHT',
                type: 'image',
                rect: ['27px', '559px','35px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LIGHT.png",'0px','0px']
            },
            {
                id: 'CTA',
                type: 'image',
                rect: ['-22px', '530px','204px','85px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CTA.png",'0px','0px']
            },
            {
                id: 'Car4',
                type: 'image',
                rect: ['-597px', '191px','880px','382px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car4.png",'0px','0px']
            },
            {
                id: 'Info4',
                type: 'image',
                rect: ['18px', '126px','121px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info4.png",'0px','0px']
            },
            {
                id: 'Car4F',
                type: 'image',
                rect: ['-472px', '411px','116px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car4F.png",'0px','0px']
            },
            {
                id: 'Header4',
                type: 'image',
                rect: ['0px', '6px','160px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header4.png",'0px','0px']
            },
            {
                id: 'Car4B',
                type: 'image',
                rect: ['34px', '421px','111px','110px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car4B.png",'0px','0px']
            },
            {
                id: 'Car3',
                type: 'image',
                rect: ['-612px', '214px','803px','375px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car3.png",'0px','0px']
            },
            {
                id: 'Car3B',
                type: 'image',
                rect: ['-532px', '432px','119px','116px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car3B.png",'0px','0px']
            },
            {
                id: 'Info3',
                type: 'image',
                rect: ['18px', '139px','121px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info3.png",'0px','0px']
            },
            {
                id: 'Car3F',
                type: 'image',
                rect: ['-36px', '432px','117px','116px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car3F.png",'0px','0px']
            },
            {
                id: 'Header3',
                type: 'image',
                rect: ['1px', '-1px','160px','142px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header3.png",'0px','0px']
            },
            {
                id: 'Info2',
                type: 'image',
                rect: ['16px', '148px','119px','207px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info2.png",'0px','0px']
            },
            {
                id: 'Car2',
                type: 'image',
                rect: ['-592px', '204px','821px','366px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car2.png",'0px','0px']
            },
            {
                id: 'Car2B',
                type: 'image',
                rect: ['-480px', '436px','106px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car2B.png",'0px','0px']
            },
            {
                id: 'Header2',
                type: 'image',
                rect: ['0px', '5px','160px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header2.png",'0px','0px']
            },
            {
                id: 'Car2F',
                type: 'image',
                rect: ['7px', '444px','117px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car2F.png",'0px','0px'],
                transform: [[],[],[],[],['54%','47%']]
            },
            {
                id: 'Info1',
                type: 'image',
                rect: ['21px', '139px','119px','206px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info1.png",'0px','0px']
            },
            {
                id: 'Car1',
                type: 'image',
                rect: ['-642px', '204px','870px','366px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car1.png",'0px','0px']
            },
            {
                id: 'Car1B',
                type: 'image',
                rect: ['-504px', '426px','102px','98px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car1B.png",'0px','0px'],
                transform: [[],[],[],[],['55%','55%']]
            },
            {
                id: 'Car1F',
                type: 'image',
                rect: ['12px', '426px','107px','105px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car1F.png",'0px','0px'],
                transform: [[],[],[],[],['54%','53%']]
            },
            {
                id: 'Header1',
                type: 'image',
                rect: ['0px', '4px','160px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Header1.png",'0px','0px']
            },
            {
                id: 'ClickTag',
                type: 'rect',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_CTA}": [
                ["style", "top", '530px'],
                ["style", "opacity", '0'],
                ["style", "left", '-22px']
            ],
            "${_Car4B}": [
                ["style", "top", '421px'],
                ["style", "left", '-246px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Car4F}": [
                ["style", "top", '411px'],
                ["style", "left", '-752px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Info4}": [
                ["style", "top", '126px'],
                ["style", "opacity", '0'],
                ["style", "left", '18px']
            ],
            "${_Car4}": [
                ["style", "left", '-877px'],
                ["style", "top", '191px']
            ],
            "${_Car3}": [
                ["style", "left", '-892px'],
                ["style", "top", '214px']
            ],
            "${_ClickTag}": [
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_Header3}": [
                ["style", "top", '-1px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_Car1B}": [
                ["style", "top", '426px'],
                ["style", "-webkit-transform-origin", [55,55], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55,55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-784px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Car3B}": [
                ["style", "top", '432px'],
                ["style", "-webkit-transform-origin", [55,46], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-812px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Info3}": [
                ["style", "top", '139px'],
                ["style", "opacity", '0'],
                ["style", "left", '18px']
            ],
            "${_Car2B}": [
                ["style", "top", '436px'],
                ["style", "left", '-760px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Header2}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Car1F}": [
                ["style", "top", '426px'],
                ["style", "-webkit-transform-origin", [54,53], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [54,53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [54,53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [54,53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [54,53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-268px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Info2}": [
                ["style", "top", '148px'],
                ["style", "opacity", '0'],
                ["style", "left", '16px']
            ],
            "${_Car1}": [
                ["style", "left", '-922px'],
                ["style", "top", '204px']
            ],
            "${_LIGHT}": [
                ["style", "top", '559px'],
                ["style", "opacity", '1'],
                ["style", "left", '27px']
            ],
            "${_bg}": [
                ["style", "height", 'auto'],
                ["style", "width", 'auto']
            ],
            "${_Car2}": [
                ["style", "left", '-872px'],
                ["style", "top", '204px']
            ],
            "${_Header4}": [
                ["style", "top", '6px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Car3F}": [
                ["style", "top", '432px'],
                ["style", "-webkit-transform-origin", [55,46], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55,46],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-316px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,236,236,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "width", '160px']
            ],
            "${_Info1}": [
                ["style", "top", '139px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px']
            ],
            "${_Car2F}": [
                ["style", "top", '444px'],
                ["style", "-webkit-transform-origin", [54,47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [54,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [54,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [54,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [54,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-273px'],
                ["transform", "rotateZ", '-179deg']
            ],
            "${_Header1}": [
                ["style", "top", '4px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid115", tween: [ "style", "${_Car3F}", "-webkit-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid128", tween: [ "style", "${_Car3F}", "-moz-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid129", tween: [ "style", "${_Car3F}", "-ms-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid130", tween: [ "style", "${_Car3F}", "msTransformOrigin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid131", tween: [ "style", "${_Car3F}", "-o-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid14", tween: [ "style", "${_Car1B}", "left", '-504px', { fromValue: '-784px'}], position: 500, duration: 1000, easing: "easeOutSine" },
                { id: "eid75", tween: [ "style", "${_Car1B}", "left", '312px', { fromValue: '-504px'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid26", tween: [ "style", "${_Car4B}", "left", '34px', { fromValue: '-246px'}], position: 9500, duration: 1000, easing: "easeOutSine" },
                { id: "eid42", tween: [ "style", "${_Header1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutSine" },
                { id: "eid78", tween: [ "style", "${_Header1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 500, easing: "easeOutSine" },
                { id: "eid24", tween: [ "style", "${_Car2B}", "left", '-480px', { fromValue: '-760px'}], position: 3500, duration: 1000, easing: "easeOutSine" },
                { id: "eid82", tween: [ "style", "${_Car2B}", "left", '324px', { fromValue: '-480px'}], position: 5500, duration: 1000, easing: "easeOutSine" },
                { id: "eid50", tween: [ "style", "${_Header4}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1000, easing: "easeOutSine" },
                { id: "eid70", tween: [ "transform", "${_Car4B}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 9500, duration: 1000, easing: "easeOutSine" },
                { id: "eid40", tween: [ "style", "${_Info1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1000, easing: "easeOutSine" },
                { id: "eid79", tween: [ "style", "${_Info1}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 500, easing: "easeOutSine" },
                { id: "eid60", tween: [ "transform", "${_Car1B}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 500, duration: 1000, easing: "easeOutSine" },
                { id: "eid80", tween: [ "transform", "${_Car1B}", "rotateZ", '172deg', { fromValue: '0deg'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid62", tween: [ "transform", "${_Car4F}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 9500, duration: 1000, easing: "easeOutSine" },
                { id: "eid64", tween: [ "transform", "${_Car3F}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 6500, duration: 1000, easing: "easeOutSine" },
                { id: "eid105", tween: [ "transform", "${_Car3F}", "rotateZ", '159deg', { fromValue: '0deg'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid48", tween: [ "style", "${_Header3}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1000, easing: "easeOutSine" },
                { id: "eid91", tween: [ "style", "${_Header3}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 500, easing: "easeOutSine" },
                { id: "eid68", tween: [ "transform", "${_Car2B}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 3500, duration: 1000, easing: "easeOutSine" },
                { id: "eid88", tween: [ "transform", "${_Car2B}", "rotateZ", '99deg', { fromValue: '0deg'}], position: 5500, duration: 1000, easing: "easeOutSine" },
                { id: "eid54", tween: [ "style", "${_Info3}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 1000, easing: "easeOutSine" },
                { id: "eid92", tween: [ "style", "${_Info3}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 500, easing: "easeOutSine" },
                { id: "eid16", tween: [ "style", "${_Car1}", "left", '-642px', { fromValue: '-922px'}], position: 500, duration: 1000, easing: "easeOutSine" },
                { id: "eid76", tween: [ "style", "${_Car1}", "left", '174px', { fromValue: '-642px'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid46", tween: [ "style", "${_Info2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 1000, easing: "easeOutSine" },
                { id: "eid90", tween: [ "style", "${_Info2}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 500, easing: "easeOutSine" },
                { id: "eid34", tween: [ "style", "${_Car3F}", "left", '-36px', { fromValue: '-316px'}], position: 6500, duration: 1000, easing: "easeOutSine" },
                { id: "eid101", tween: [ "style", "${_Car3F}", "left", '797px', { fromValue: '-36px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid18", tween: [ "style", "${_Car1F}", "left", '12px', { fromValue: '-268px'}], position: 500, duration: 1000, easing: "easeOutSine" },
                { id: "eid77", tween: [ "style", "${_Car1F}", "left", '828px', { fromValue: '12px'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid118", tween: [ "style", "${_LIGHT}", "left", '48px', { fromValue: '27px'}], position: 2750, duration: 67, easing: "easeOutSine" },
                { id: "eid121", tween: [ "style", "${_LIGHT}", "left", '68px', { fromValue: '48px'}], position: 5682, duration: 108, easing: "easeOutSine" },
                { id: "eid125", tween: [ "style", "${_LIGHT}", "left", '90px', { fromValue: '68px'}], position: 8703, duration: 93, easing: "easeOutSine" },
                { id: "eid117", tween: [ "style", "${_LIGHT}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 250, easing: "easeOutSine" },
                { id: "eid119", tween: [ "style", "${_LIGHT}", "opacity", '1', { fromValue: '0'}], position: 2817, duration: 183, easing: "easeOutSine" },
                { id: "eid120", tween: [ "style", "${_LIGHT}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 182, easing: "easeOutSine" },
                { id: "eid122", tween: [ "style", "${_LIGHT}", "opacity", '1', { fromValue: '0'}], position: 5790, duration: 210, easing: "easeOutSine" },
                { id: "eid123", tween: [ "style", "${_LIGHT}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 203, easing: "easeOutSine" },
                { id: "eid127", tween: [ "style", "${_LIGHT}", "opacity", '1', { fromValue: '0'}], position: 8796, duration: 204, easing: "easeOutSine" },
                { id: "eid116", tween: [ "style", "${_Car3B}", "-webkit-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid132", tween: [ "style", "${_Car3B}", "-moz-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid133", tween: [ "style", "${_Car3B}", "-ms-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid134", tween: [ "style", "${_Car3B}", "msTransformOrigin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid135", tween: [ "style", "${_Car3B}", "-o-transform-origin", [55,46], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55,46]}], position: 8500, duration: 0, easing: "easeOutSine" },
                { id: "eid104", tween: [ "style", "${_Car3}", "top", '212px', { fromValue: '214px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid30", tween: [ "style", "${_Car4}", "left", '-597px', { fromValue: '-877px'}], position: 9500, duration: 1000, easing: "easeOutSine" },
                { id: "eid102", tween: [ "style", "${_Car3F}", "top", '430px', { fromValue: '432px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid38", tween: [ "style", "${_CTA}", "opacity", '1', { fromValue: '0'}], position: 11959, duration: 1000, easing: "easeOutSine" },
                { id: "eid52", tween: [ "style", "${_Header2}", "opacity", '1', { fromValue: '0'}], position: 3041, duration: 1000, easing: "easeOutSine" },
                { id: "eid89", tween: [ "style", "${_Header2}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 500, easing: "easeOutSine" },
                { id: "eid44", tween: [ "style", "${_Info4}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 1000, easing: "easeOutSine" },
                { id: "eid22", tween: [ "style", "${_Car2F}", "left", '7px', { fromValue: '-273px'}], position: 3500, duration: 1000, easing: "easeOutSine" },
                { id: "eid83", tween: [ "style", "${_Car2F}", "left", '811px', { fromValue: '7px'}], position: 5500, duration: 1000, easing: "easeOutSine" },
                { id: "eid20", tween: [ "style", "${_Car3B}", "left", '-532px', { fromValue: '-812px'}], position: 6500, duration: 1000, easing: "easeOutSine" },
                { id: "eid99", tween: [ "style", "${_Car3B}", "left", '301px', { fromValue: '-532px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid100", tween: [ "style", "${_Car3B}", "top", '430px', { fromValue: '432px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid72", tween: [ "transform", "${_Car1F}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 500, duration: 1000, easing: "easeOutSine" },
                { id: "eid81", tween: [ "transform", "${_Car1F}", "rotateZ", '172deg', { fromValue: '0deg'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid28", tween: [ "style", "${_Car4F}", "left", '-472px', { fromValue: '-752px'}], position: 9500, duration: 1000, easing: "easeOutSine" },
                { id: "eid74", tween: [ "transform", "${_Car2F}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 3500, duration: 1000, easing: "easeOutSine" },
                { id: "eid87", tween: [ "transform", "${_Car2F}", "rotateZ", '99deg', { fromValue: '0deg'}], position: 5500, duration: 1000, easing: "easeOutSine" },
                { id: "eid32", tween: [ "style", "${_Car3}", "left", '-612px', { fromValue: '-892px'}], position: 6500, duration: 1000, easing: "easeOutSine" },
                { id: "eid103", tween: [ "style", "${_Car3}", "left", '221px', { fromValue: '-612px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid36", tween: [ "style", "${_Car2}", "left", '-592px', { fromValue: '-872px'}], position: 3500, duration: 1000, easing: "easeOutSine" },
                { id: "eid84", tween: [ "style", "${_Car2}", "left", '212px', { fromValue: '-592px'}], position: 5500, duration: 1000, easing: "easeOutSine" },
                { id: "eid66", tween: [ "transform", "${_Car3B}", "rotateZ", '0deg', { fromValue: '-179deg'}], position: 6500, duration: 1000, easing: "easeOutSine" },
                { id: "eid106", tween: [ "transform", "${_Car3B}", "rotateZ", '159deg', { fromValue: '0deg'}], position: 8500, duration: 1000, easing: "easeOutSine" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9765158");
