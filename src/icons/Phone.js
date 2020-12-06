import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';


class Phone extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faPhone} size="s" color="hotpink"/>
        )
    }
  }
  
  export default Phone; 