import React from 'react'

import Image from 'material-ui-image';
const { Button } = require('@material-ui/core');

class ImagePage extends React.Component{
constructor(props) {
    super(props)
    this.state = {
        count: 0,
        show: true
    }
}

    reload = () => {
        setState({ show: false })
        setTimeout(() => setState(state => ({ count: state.count + 1, show: true })), 500)
      }
      ​
render() {
    return (
            <div>
        <Image
            src={state.show ? `https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg?_=${state.count}` : ''}
            onClick={() => console.log('onClick')}
            aspectRatio={(16/9)}
            disableSpinner
        />
            <Button variant='raised' onClick={reload}>
            Reload
            </Button>
          </div>
    )
}

}

export default ImagePage;