import React from 'react';

import { Button } from 'reactstrap';

const button = (props) => {
  return (
      <a href='../public/documents/Curriculo_LucasAndreBesen.pdf' target="_blank">
            <button type="button" id="fontes" class="btn btn-outline-light btn-lg btn-block">{props.nome}</button>
      </a>

  );

}

export default button;