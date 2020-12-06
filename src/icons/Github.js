import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { Component } from 'react';


class Github extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faGithub} size="ss" color="hotpink"/>
        )
    }
  }
  
  export default Github; 