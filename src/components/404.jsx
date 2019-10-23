import React from 'react'

import {Link} from '@material-ui/core'

const NotFound = ({history}) => {
    return (
        <div>
            Page not found or an error has occurred
                            <Link
                  component="button"
                  variant="body2"
                  display="block"
                  onClick={() => {
                    history.push(`/`);
                  }}
                >
                  Go home
                </Link>

        </div>
    )
}

export default NotFound
