import fetch from './_';

export default (rowid, info) =>
  fetch(
    `/app/v1/reinfo/${encodeURIComponent(rowid)}/${encodeURIComponent(info)}`
  );
