import React from "react";
import styles from './Source.css';
import Button from 'react-bootstrap/Button'


class Source extends React.Component {
    render() {
      return (
          <div>
              <Button>
                  props.title
              </Button>
          </div>
      );
    }
}