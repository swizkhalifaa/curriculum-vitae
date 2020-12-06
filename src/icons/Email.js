import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';


class Email extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faEnvelope} size="s" color="hotpink"/>
        )
    }
  }
  
  export default Email; 