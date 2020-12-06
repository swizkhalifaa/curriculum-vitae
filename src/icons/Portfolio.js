import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';


class Portfolio extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faFolderOpen} size="xs" color="hotpink"/>
        )
    }
  }
  
  export default Portfolio; 