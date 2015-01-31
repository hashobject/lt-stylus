(ns lt.plugins.stylus
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.editor :as ed]
            [lt.objs.files :as files]
            [lt.objs.clients :as clients]
            [lt.util.dom :refer [$ append]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(behavior ::on-eval
          :triggers #{:eval
                      :eval.one}
          :reaction (fn [editor]
                      (object/raise stylus-lang :eval! {:origin editor
                                                        :info (assoc (@editor :info)
                                                        :code (ed/->val (:ed @editor)))})))

(behavior ::eval-on-save
          :triggers #{:save}
          :reaction (fn [editor]
                      (when (and (-> @editor :client :default)
                                 (not (clients/placeholder? (-> @editor :client :default))))
                        (object/raise editor :eval))))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (clients/send (eval/get-client! {:command :editor.eval.styl
                                                         :origin origin
                                                         :info info})
                                      :editor.eval.styl
                                      info
                                      :only origin))))

(object/object* ::stylus-lang
                :tags #{}
                :behaviors [::eval!]
                :triggers #{:eval!})

(def stylus-lang (object/create ::stylus-lang))



