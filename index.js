import { effect, toValue, effectScope } from "@vue/reactivity";

export function element(tagName, ...mods) {
    const el = document.createElement(tagName);
    const flatMods = mods.flat(Infinity);
    flatMods.forEach((mod) => {
    switch (true) {
        case mod instanceof HTMLElement:
        case mod instanceof Text:
        case mod instanceof Attr:
        case mod instanceof DocumentFragment:
            el.appendChild(mod);
            break;
        case typeof mod === 'function' && mod.name.startsWith('on'):
            el.addEventListener(mod.name.slice(2), mod);
            break;
        case typeof mod === 'function':

            break;
    }
  });

  return el;
}

export const e = element;

export function text(textValue) {
  const t = document.createTextNode('');
  effect(() => {
    t.nodeValue = toValue(textValue);
  });
  return t;
}

export const t = text;

export function attribute(attrName, attrValue) {
  const a = document.createAttribute(attrName);
  effect(() => {
    a.value = toValue(attrValue);
  });
  return a;
}

export const a = attribute;

export function fragment(...children) {
  const f = document.createDocumentFragment();
  f.append(...(children.flat(Infinity)));

  return f;
}

export const f = fragment;
