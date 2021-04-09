/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
           sym.i = sym.i ? (sym.i - 1) : 2;
           (sym.i > 0) ? sym.play( 0 ) : sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ClickTag}", "click", function(sym, e) {
         window.openAndTrack('default', 'http://glenviewmitsubishi.com/')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /* *********************************
         ** Standard HTML5 Template v1.0-1 **
         ********************************* */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-9765158");