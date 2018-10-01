const getConfigVar = () => {
  // TODO
};

const sdk = _key => {
  const key = _key || getConfigVar('INTERCOM_KEY');

  if (key && typeof window !== 'undefined' && window.Intercom) {
    return window.Intercom;
  }
};

const show = key => {
  const Intercom = sdk(key);

  if (Intercom) {
    Intercom('show');
  }
};

const shutdown = key => {
  const Intercom = sdk(key);

  if (Intercom) {
    Intercom('shutdown');
  }
};

const script = _key => {
  const key = _key || getConfigVar('INTERCOM_KEY');

  if (key) {
    return `(function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', window.intercomSettings); } else { var d = document; var i = function () { i.c(arguments) }; i.q = []; i.c = function (args) { i.q.push(args) }; w.Intercom = i; function l() { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/${key}'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); } if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })()`;
  }

  return '';
};

export default {
  show,
  shutdown,
  script,
  sdk,
};
