import {DEBUG} from '../common.js';
import {ErrorView} from './error.js';

export default function Profile({username, email, newEmail, _id, error}) {
  const state = {username, email, newEmail, _id, error};

  if ( error ) {
    return ErrorView({error});
  } else {
    return `
      <html lang=en stylist=aux_page>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width, initial-scale=1">
        <title>Capi.Click</title>
        <link rel=stylesheet href=/static/style.css>
        <script type=module>
          import {init} from '/${DEBUG.BUILD}/profile.js';

          self.loadData = ${JSON.stringify({state})};

          init();
        </script>
      </html>
    `
  }
}
