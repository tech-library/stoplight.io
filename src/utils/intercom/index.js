import _ from 'lodash';

const getConfigVar = () => {
  // TODO
};

const parseQuery = () => {
  // TODO
};

const safeStringify = obj => {
  // TODO
  return JSON.stringify(obj);
};

const safeParse = str => {
  // TODO
  return JSON.parse(str);
};

const utmKeys = ['utm_campaign', 'utm_content', 'utm_medium', 'utm_source', 'utm_term'];

const sdk = _key => {
  const key = _key || getConfigVar('INTERCOM_KEY');

  if (key && typeof window !== 'undefined' && window.Intercom) {
    return window.Intercom;
  }
};

const init = (_key, { hideLauncher = true } = {}) => {
  const key = _key || getConfigVar('INTERCOM_KEY');
  const Intercom = sdk(key);

  if (Intercom) {
    const utm = localStorage.getItem('utm');

    if (!utm && window.location.search) {
      const utmParams = _.pick(parseQuery(window.location.search), utmKeys);

      if (!_.isEmpty(utmParams)) {
        localStorage.setItem(
          'utm',
          safeStringify({
            ...utmParams,
            referrer: document.referrer,
          })
        );
      }
    }

    Intercom('boot', {
      app_id: key,
      hide_default_launcher: hideLauncher,
    });
  }
};

const update = (userInfo, key, { hideLauncher = true } = {}) => {
  const Intercom = sdk(key);

  if (Intercom) {
    let utmParams = {};
    const utm = localStorage.getItem('utm');

    if (utm) {
      utmParams = _.pickBy(safeParse(utm));
      localStorage.removeItem('utm');
    }

    Intercom('update', {
      ...utmParams,
      ...userInfo,
      hide_default_launcher: hideLauncher,
    });
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
  init,
  update,
  show,
  shutdown,
  script,
  sdk,
};
