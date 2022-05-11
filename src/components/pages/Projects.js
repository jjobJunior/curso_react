import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';

function Projects() {
  const location = useLocation();
  let message = location.state ? location.state.message : null;

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && (<Message type="success" msg={message} />
      )}
    </div>
  );
}
export default Projects;