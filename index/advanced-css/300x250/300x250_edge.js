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
                id: 'Info4',
                type: 'image',
                rect: ['0', '0','300px','250px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info4.jpg",'0px','0px']
            },
            {
                id: 'Info3',
                type: 'image',
                rect: ['0', '0','300px','250px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Info3.jpg",'0px','0px']
            },
            {
                id: 'Info2',
                type: 'image',
                rect: ['0', '0','300px','250px','auto', 'auto'],
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
                id: 'CTA',
                type: 'image',
                rect: ['1px', '182px','234px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"CTA.png",'0px','0px']
            },
            {
                id: 'Car4',
                type: 'image',
                rect: ['-869px', '-48px','880px','382px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car4.png",'0px','0px']
            },
            {
                id: 'Car3',
                type: 'image',
                rect: ['-869px', '-48px','803px','375px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car3.png",'0px','0px']
            },
            {
                id: 'Car2',
                type: 'image',
                rect: ['-869px', '-48px','821px','366px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Car2.png",'0px','0px']
            },
            {
                id: 'Car1',
                type: 'image',
                rect: ['-869px', '-48px','870px','366px','auto', 'auto'],
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
            "${_CTA}": [
                ["style", "top", '182px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_Info3}": [
                ["style", "opacity", '0']
            ],
            "${_ClickTag}": [
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_Car4}": [
                ["style", "left", '-869px'],
                ["style", "top", '-48px']
            ],
            "${_Car3}": [
                ["style", "left", '-869px'],
                ["style", "top", '-48px']
            ],
            "${_Car2}": [
                ["style", "left", '-869px'],
                ["style", "top", '-48px']
            ],
            "${_Info4}": [
                ["style", "opacity", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(236,236,236,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '250px'],
                ["style", "width", '300px']
            ],
            "${_Info2}": [
                ["style", "opacity", '0']
            ],
            "${_bg}": [
                ["style", "height", 'auto'],
                ["style", "opacity", '0'],
                ["style", "width", 'auto']
            ],
            "${_Car1}": [
                ["style", "left", '-869px'],
                ["style", "top", '-48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_Car4}", "left", '317px', { fromValue: '-869px'}], position: 7500, duration: 1000, easing: "easeOutSine" },
                { id: "eid12", tween: [ "style", "${_bg}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutSine" },
                { id: "eid11", tween: [ "style", "${_bg}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 750, easing: "easeOutSine" },
                { id: "eid13", tween: [ "style", "${_Info3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutSine" },
                { id: "eid9", tween: [ "style", "${_Info3}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 750 },
                { id: "eid6", tween: [ "style", "${_Car1}", "left", '317px', { fromValue: '-869px'}], position: 0, duration: 1000, easing: "easeOutSine" },
                { id: "eid5", tween: [ "style", "${_Car3}", "left", '317px', { fromValue: '-869px'}], position: 5000, duration: 1000, easing: "easeOutSine" },
                { id: "eid14", tween: [ "style", "${_Info2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutSine" },
                { id: "eid10", tween: [ "style", "${_Info2}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 750, easing: "easeOutSine" },
                { id: "eid18", tween: [ "style", "${_CTA}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 1000, easing: "easeOutSine" },
                { id: "eid7", tween: [ "style", "${_Car2}", "left", '317px', { fromValue: '-869px'}], position: 2500, duration: 1000, easing: "easeOutSine" },
                { id: "eid16", tween: [ "style", "${_Info4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutSine" }            ]
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
