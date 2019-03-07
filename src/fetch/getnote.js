import fetch from './_';

export default ({ page, size, order, note, furl }) =>
  fetch(
    `/app/v1/getnote/${page}/${size}/${order}?note=${encodeURIComponent(
      note || ''
    )}&furl=${encodeURIComponent(furl || '')}`
  );
