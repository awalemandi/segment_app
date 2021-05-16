import React, { useState } from 'react';
import { Typography, Paper, Container, Fab, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

import axios from 'axios';

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
  const [ selectedVideo, setSelectedVideo ] = useState( null );

  const handleChange = e => {
    setSelectedVideo( e.target.files[ 0 ] );
  };

  const handleUploadVideo = () => {
    if ( selectedVideo ) {
      setLoading( true );
      const data = new FormData();
      data.append( 'video', selectedVideo );
      data.append( 'name', selectedVideo.name );
      axios.post( `/upload-video`, data )
        .then( res => {
          console.log( res );
          setLoading( false );
        } )
        .catch( err => console.log( err ) );
    }
  };

  return (
    <Container component={ Paper } maxWidth={ 'md' } className={ classes.root }>
      <Typography variant='h4'>Video Segmentation App</Typography>
      <form onSubmit={ handleUploadVideo }>
        <input type='file' name='video' id='video' onChange={ handleChange } />
        <Button color='primary' variant='contained' type='submit' disabled={ loading }>Upload Video</Button>
      </form>
      <Fab variant="extended" color='secondary' aria-label="add" disabled={ loading } className={ classes.margin }>
        <SlowMotionVideoIcon className={ classes.extendedIcon } />
        { loading ? 'Processing..' : 'Process Video' }
      </Fab>
    </Container >
  );
}

export default App;
