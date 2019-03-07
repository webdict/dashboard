import fetch from './_';

export default word => fetch(`/app/v1/deflag/${encodeURIComponent(word)}`);
