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
                id: 'Info5',
                type: 'image',
                rect: ['0', '0','728px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info5.jpg",'0px','0px']
            },
            {
                id: 'Info4',
                type: 'image',
                rect: ['0', '0','728px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info4.jpg",'0px','0px']
            },
            {
                id: 'Info3',
                type: 'image',
                rect: ['0', '0','728px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info3.jpg",'0px','0px']
            },
            {
                id: 'Info2',
                type: 'image',
                rect: ['0', '0','728px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info2.jpg",'0px','0px']
            },
            {
                id: 'bg',
                type: 'image',
                tag: 'img',
                rect: ['0', '0','auto','auto','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'Car4',
                type: 'image',
                rect: ['-225px', '-51px','562px','266px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car4.png",'0px','0px']
            },
            {
                id: 'Car3',
                type: 'image',
                rect: ['-243px', '-46px','522px','240px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car3.png",'0px','0px']
            },
            {
                id: 'Car2',
                type: 'image',
                rect: ['-242px', '-62px','519px','248px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car2.png",'0px','0px']
            },
            {
                id: 'Car1',
                type: 'image',
                rect: ['-315px', '-46px','558px','271px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car1.png",'0px','0px']
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
            "${_Info3}": [
                ["style", "opacity", '1']
            ],
            "${_ClickTag}": [
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_Car4}": [
                ["style", "left", '-565px'],
                ["style", "top", '-51px']
            ],
            "${_Car3}": [
                ["style", "left", '-583px'],
                ["style", "top", '-46px']
            ],
            "${_Car2}": [
                ["style", "left", '-582px'],
                ["style", "top", '-62px']
            ],
            "${_Info4}": [
                ["style", "opacity", '1']
            ],
            "${_Info5}": [
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,236,236,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '90px'],
                ["style", "width", '728px']
            ],
            "${_bg}": [
                ["style", "height", 'auto'],
                ["style", "opacity", '1'],
                ["style", "width", 'auto']
            ],
            "${_Info2}": [
                ["style", "opacity", '1']
            ],
            "${_Car1}": [
                ["style", "left", '-655px'],
                ["style", "top", '-46px']
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
                { id: "eid12", tween: [ "style", "${_Car4}", "left", '-225px', { fromValue: '-565px'}], position: 9000, duration: 1000, easing: "easeOutSine" },
                { id: "eid15", tween: [ "style", "${_bg}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid23", tween: [ "style", "${_Info5}", "opacity", '1', { fromValue: '1'}], position: 11500, duration: 0, easing: "easeOutSine" },
                { id: "eid24", tween: [ "style", "${_Info5}", "opacity", '1', { fromValue: '1'}], position: 12500, duration: 0, easing: "easeOutSine" },
                { id: "eid16", tween: [ "style", "${_Info3}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid10", tween: [ "style", "${_Car1}", "left", '-315px', { fromValue: '-655px'}], position: 0, duration: 1000, easing: "easeOutSine" },
                { id: "eid20", tween: [ "style", "${_Car1}", "left", '743px', { fromValue: '-315px'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid6", tween: [ "style", "${_Car3}", "left", '-243px', { fromValue: '-583px'}], position: 6000, duration: 1000, easing: "easeOutSine" },
                { id: "eid18", tween: [ "style", "${_Car3}", "left", '815px', { fromValue: '-243px'}], position: 8500, duration: 1000, easing: "easeOutSine" },
                { id: "eid13", tween: [ "style", "${_Info2}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000, easing: "easeOutSine" },
                { id: "eid22", tween: [ "style", "${_Info4}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 1000, easing: "easeOutSine" },
                { id: "eid8", tween: [ "style", "${_Car2}", "left", '-242px', { fromValue: '-582px'}], position: 3000, duration: 1000, easing: "easeOutSine" },
                { id: "eid19", tween: [ "style", "${_Car2}", "left", '816px', { fromValue: '-242px'}], position: 5500, duration: 1000, easing: "easeOutSine" }            ]
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
