export const slugify = input => {
  let str = input;

  if (!str || typeof str !== 'string') {
    return '';
  }

  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const fromAccents = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const toAccents = 'aaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = fromAccents.length; i < l; i++) {
    str = str.replace(new RegExp(fromAccents.charAt(i), 'g'), toAccents.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-'); // remove invalid chars // collapse whitespace and replace by - // collapse dashes

  return str.replace(/^\-\//, '');
};
