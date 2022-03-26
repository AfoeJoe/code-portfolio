export function classnames(...classes: (false | null | undefined | string)[]) {
  console.log('🚀 ~ file: utils.ts ~ line 2 ~ classnames ~ classes', classes);

  return classes.filter(Boolean).join(' ');
}

classnames('ff');

// // bug: fix race condition
