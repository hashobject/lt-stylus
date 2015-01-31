if(!lt.util.load.provided_QMARK_('lt.plugins.stylus')) {
goog.provide('lt.plugins.stylus');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');

lt.plugins.stylus.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.stylus.stylus_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.stylus","on-eval","lt.plugins.stylus/on-eval",1115625019),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.stylus.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null,new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));

lt.plugins.stylus.__BEH__eval_on_save = (function __BEH__eval_on_save(editor){if(cljs.core.truth_((function (){var and__5787__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));if(cljs.core.truth_(and__5787__auto__))
{return cljs.core.not.call(null,lt.objs.clients.placeholder_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))));
} else
{return and__5787__auto__;
}
})()))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"eval","eval",1017029646));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.stylus","eval-on-save","lt.plugins.stylus/eval-on-save",2087538411),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.stylus.__BEH__eval_on_save,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));

lt.plugins.stylus.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7224 = event;var map__7224__$1 = ((cljs.core.seq_QMARK_.call(null,map__7224))?cljs.core.apply.call(null,cljs.core.hash_map,map__7224):map__7224);var origin = cljs.core.get.call(null,map__7224__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7224__$1,new cljs.core.Keyword(null,"info","info",1017141280));return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.styl","editor.eval.styl",3156793207),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),new cljs.core.Keyword(null,"editor.eval.styl","editor.eval.styl",3156793207),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.stylus","eval!","lt.plugins.stylus/eval!",2871184754),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.stylus.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.stylus","stylus-lang","lt.plugins.stylus/stylus-lang",4377453182),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.stylus","eval!","lt.plugins.stylus/eval!",2871184754)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.plugins.stylus.stylus_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.stylus","stylus-lang","lt.plugins.stylus/stylus-lang",4377453182));

}

//# sourceMappingURL=