import React, { useState } from 'react';
import { Typography, Paper, Container, Fab, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

const useStyles = makeStyles( ( theme ) => ( {
  root: {
    marginTop: theme.spacing( 10 ),
    minHeight: '40rem',
    padding: theme.spacing( 5 ),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing( 1 ),
  },
  extendedIcon: {
    marginRight: theme.spacing( 1 ),
  },
} ) );

function App () {
  const classes = useStyles();
  const [ loading, setLoading ] = useState( false );
  const [ filePath, setFilePath ] = useState( '' );

  const handleChange = e => console.log( e.target.files[ 0 ] );

  return (
    <Container component={ Paper } maxWidth={ 'md' } className={ classes.root }>
      <Typography variant='h4'>Video Segmentation App</Typography>
      < label htmlFor="upload-photo">
        <input
          style={ { display: 'none' } }
          id="upload-photo"
          name="upload-photo"
          type="file"
          value={ filePath }
          onChange={ handleChange }
        />

        <Tooltip title="Upload Video">
          <Fab
            color="primary"
            size="large"
            component="span"
            aria-label="add"
            variant="round"
          >
            <PublishIcon />
          </Fab>
        </Tooltip>
        { filePath }
      </label>

      <Fab variant="extended" color="primary" aria-label="add" disabled={ loading } className={ classes.margin }>
        <SlowMotionVideoIcon className={ classes.extendedIcon } />
        { loading ? 'Processing..' : 'Process Video' }
      </Fab>
    </Container >
  );
}

export default App;
