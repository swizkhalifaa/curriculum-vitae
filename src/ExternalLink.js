import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';


class ExternalLink extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" color="hotpink"/>
        )
    }
  }
  
  export default ExternalLink; 