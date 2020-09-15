import { createHotContext as $createHotContext$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $createHotContext$(import.meta.url);import { html } from "/@npm/htm/preact";
import Sparkles from '../components/Demos/Sparkles/index.js'
import Nav from '../components/Nav/index.js'
import style from './style.module.css.js'

export default function Home() {
  return (
    html`<div className=${style.container}>
      <${Nav} page="Worklet Library" />
      <${Sparkles} />
      <${Sparkles} />
    </div>`
  );
}

import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
