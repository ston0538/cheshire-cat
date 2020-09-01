// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1473){
var map__1474 = p__1473;
var map__1474__$1 = (((((!((map__1474 == null))))?(((((map__1474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1474):map__1474);
var m = map__1474__$1;
var n = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1476_1508 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1477_1509 = null;
var count__1478_1510 = (0);
var i__1479_1511 = (0);
while(true){
if((i__1479_1511 < count__1478_1510)){
var f_1512 = cljs.core._nth.call(null,chunk__1477_1509,i__1479_1511);
cljs.core.println.call(null,"  ",f_1512);


var G__1513 = seq__1476_1508;
var G__1514 = chunk__1477_1509;
var G__1515 = count__1478_1510;
var G__1516 = (i__1479_1511 + (1));
seq__1476_1508 = G__1513;
chunk__1477_1509 = G__1514;
count__1478_1510 = G__1515;
i__1479_1511 = G__1516;
continue;
} else {
var temp__5720__auto___1517 = cljs.core.seq.call(null,seq__1476_1508);
if(temp__5720__auto___1517){
var seq__1476_1518__$1 = temp__5720__auto___1517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1476_1518__$1)){
var c__4556__auto___1519 = cljs.core.chunk_first.call(null,seq__1476_1518__$1);
var G__1520 = cljs.core.chunk_rest.call(null,seq__1476_1518__$1);
var G__1521 = c__4556__auto___1519;
var G__1522 = cljs.core.count.call(null,c__4556__auto___1519);
var G__1523 = (0);
seq__1476_1508 = G__1520;
chunk__1477_1509 = G__1521;
count__1478_1510 = G__1522;
i__1479_1511 = G__1523;
continue;
} else {
var f_1524 = cljs.core.first.call(null,seq__1476_1518__$1);
cljs.core.println.call(null,"  ",f_1524);


var G__1525 = cljs.core.next.call(null,seq__1476_1518__$1);
var G__1526 = null;
var G__1527 = (0);
var G__1528 = (0);
seq__1476_1508 = G__1525;
chunk__1477_1509 = G__1526;
count__1478_1510 = G__1527;
i__1479_1511 = G__1528;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1529 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1529);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1529)))?cljs.core.second.call(null,arglists_1529):arglists_1529));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1480_1530 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1481_1531 = null;
var count__1482_1532 = (0);
var i__1483_1533 = (0);
while(true){
if((i__1483_1533 < count__1482_1532)){
var vec__1494_1534 = cljs.core._nth.call(null,chunk__1481_1531,i__1483_1533);
var name_1535 = cljs.core.nth.call(null,vec__1494_1534,(0),null);
var map__1497_1536 = cljs.core.nth.call(null,vec__1494_1534,(1),null);
var map__1497_1537__$1 = (((((!((map__1497_1536 == null))))?(((((map__1497_1536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1497_1536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1497_1536):map__1497_1536);
var doc_1538 = cljs.core.get.call(null,map__1497_1537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1539 = cljs.core.get.call(null,map__1497_1537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1535);

cljs.core.println.call(null," ",arglists_1539);

if(cljs.core.truth_(doc_1538)){
cljs.core.println.call(null," ",doc_1538);
} else {
}


var G__1540 = seq__1480_1530;
var G__1541 = chunk__1481_1531;
var G__1542 = count__1482_1532;
var G__1543 = (i__1483_1533 + (1));
seq__1480_1530 = G__1540;
chunk__1481_1531 = G__1541;
count__1482_1532 = G__1542;
i__1483_1533 = G__1543;
continue;
} else {
var temp__5720__auto___1544 = cljs.core.seq.call(null,seq__1480_1530);
if(temp__5720__auto___1544){
var seq__1480_1545__$1 = temp__5720__auto___1544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1480_1545__$1)){
var c__4556__auto___1546 = cljs.core.chunk_first.call(null,seq__1480_1545__$1);
var G__1547 = cljs.core.chunk_rest.call(null,seq__1480_1545__$1);
var G__1548 = c__4556__auto___1546;
var G__1549 = cljs.core.count.call(null,c__4556__auto___1546);
var G__1550 = (0);
seq__1480_1530 = G__1547;
chunk__1481_1531 = G__1548;
count__1482_1532 = G__1549;
i__1483_1533 = G__1550;
continue;
} else {
var vec__1499_1551 = cljs.core.first.call(null,seq__1480_1545__$1);
var name_1552 = cljs.core.nth.call(null,vec__1499_1551,(0),null);
var map__1502_1553 = cljs.core.nth.call(null,vec__1499_1551,(1),null);
var map__1502_1554__$1 = (((((!((map__1502_1553 == null))))?(((((map__1502_1553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1502_1553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1502_1553):map__1502_1553);
var doc_1555 = cljs.core.get.call(null,map__1502_1554__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1556 = cljs.core.get.call(null,map__1502_1554__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1552);

cljs.core.println.call(null," ",arglists_1556);

if(cljs.core.truth_(doc_1555)){
cljs.core.println.call(null," ",doc_1555);
} else {
}


var G__1557 = cljs.core.next.call(null,seq__1480_1545__$1);
var G__1558 = null;
var G__1559 = (0);
var G__1560 = (0);
seq__1480_1530 = G__1557;
chunk__1481_1531 = G__1558;
count__1482_1532 = G__1559;
i__1483_1533 = G__1560;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__1504 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1505 = null;
var count__1506 = (0);
var i__1507 = (0);
while(true){
if((i__1507 < count__1506)){
var role = cljs.core._nth.call(null,chunk__1505,i__1507);
var temp__5720__auto___1561__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1561__$1)){
var spec_1562 = temp__5720__auto___1561__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1562));
} else {
}


var G__1563 = seq__1504;
var G__1564 = chunk__1505;
var G__1565 = count__1506;
var G__1566 = (i__1507 + (1));
seq__1504 = G__1563;
chunk__1505 = G__1564;
count__1506 = G__1565;
i__1507 = G__1566;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__1504);
if(temp__5720__auto____$1){
var seq__1504__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1504__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__1504__$1);
var G__1567 = cljs.core.chunk_rest.call(null,seq__1504__$1);
var G__1568 = c__4556__auto__;
var G__1569 = cljs.core.count.call(null,c__4556__auto__);
var G__1570 = (0);
seq__1504 = G__1567;
chunk__1505 = G__1568;
count__1506 = G__1569;
i__1507 = G__1570;
continue;
} else {
var role = cljs.core.first.call(null,seq__1504__$1);
var temp__5720__auto___1571__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1571__$2)){
var spec_1572 = temp__5720__auto___1571__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1572));
} else {
}


var G__1573 = cljs.core.next.call(null,seq__1504__$1);
var G__1574 = null;
var G__1575 = (0);
var G__1576 = (0);
seq__1504 = G__1573;
chunk__1505 = G__1574;
count__1506 = G__1575;
i__1507 = G__1576;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1577 = cljs.core.conj.call(null,via,t);
var G__1578 = cljs.core.ex_cause.call(null,t);
via = G__1577;
t = G__1578;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1581 = datafied_throwable;
var map__1581__$1 = (((((!((map__1581 == null))))?(((((map__1581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1581):map__1581);
var via = cljs.core.get.call(null,map__1581__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1581__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1581__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1582 = cljs.core.last.call(null,via);
var map__1582__$1 = (((((!((map__1582 == null))))?(((((map__1582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1582):map__1582);
var type = cljs.core.get.call(null,map__1582__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1582__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1582__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1583 = data;
var map__1583__$1 = (((((!((map__1583 == null))))?(((((map__1583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1583):map__1583);
var problems = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1584 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1584__$1 = (((((!((map__1584 == null))))?(((((map__1584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1584):map__1584);
var top_data = map__1584__$1;
var source = cljs.core.get.call(null,map__1584__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1589 = phase;
var G__1589__$1 = (((G__1589 instanceof cljs.core.Keyword))?G__1589.fqn:null);
switch (G__1589__$1) {
case "read-source":
var map__1590 = data;
var map__1590__$1 = (((((!((map__1590 == null))))?(((((map__1590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1590):map__1590);
var line = cljs.core.get.call(null,map__1590__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1590__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1592 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1592__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1592,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1592);
var G__1592__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1592__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1592__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1592__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1592__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1593 = top_data;
var G__1593__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1593,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1593);
var G__1593__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1593__$1);
var G__1593__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1593__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1593__$2);
var G__1593__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1593__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1593__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1593__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1593__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1594 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1594,(0),null);
var method = cljs.core.nth.call(null,vec__1594,(1),null);
var file = cljs.core.nth.call(null,vec__1594,(2),null);
var line = cljs.core.nth.call(null,vec__1594,(3),null);
var G__1597 = top_data;
var G__1597__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1597,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1597);
var G__1597__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1597__$1);
var G__1597__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__1597__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1597__$2);
var G__1597__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1597__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1597__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1597__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1597__$4;
}

break;
case "execution":
var vec__1598 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1598,(0),null);
var method = cljs.core.nth.call(null,vec__1598,(1),null);
var file = cljs.core.nth.call(null,vec__1598,(2),null);
var line = cljs.core.nth.call(null,vec__1598,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1580_SHARP_){
var or__4126__auto__ = (p1__1580_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1580_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__1601 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1601__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1601,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1601);
var G__1601__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1601__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1601__$1);
var G__1601__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1601__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1601__$2);
var G__1601__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1601__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1601__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1601__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1601__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1589__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1605){
var map__1606 = p__1605;
var map__1606__$1 = (((((!((map__1606 == null))))?(((((map__1606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1606):map__1606);
var triage_data = map__1606__$1;
var phase = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1606__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1608 = phase;
var G__1608__$1 = (((G__1608 instanceof cljs.core.Keyword))?G__1608.fqn:null);
switch (G__1608__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1609_1618 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1610_1619 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1611_1620 = true;
var _STAR_print_fn_STAR__temp_val__1612_1621 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1611_1620);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1612_1621);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1603_SHARP_){
return cljs.core.dissoc.call(null,p1__1603_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1610_1619);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1609_1618);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1613_1622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1614_1623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1615_1624 = true;
var _STAR_print_fn_STAR__temp_val__1616_1625 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1615_1624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1616_1625);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1604_SHARP_){
return cljs.core.dissoc.call(null,p1__1604_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1614_1623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1613_1622);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1608__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
