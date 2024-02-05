
import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import Markdown from 'markdown-to-jsx';
import { posts } from '../Data/data'

const Main = ({title}) => {
  return (
    <Grid item xs={12} md={8}>
<Typography variant='h6' gutterBottom>{title}</Typography>
<Divider />
{/* npm i markdown-to-jsx     to present data in jsx format  */}
{posts.map((post)=>(
    <Markdown key={post.body}>{post.body}</Markdown>
))}
    </Grid>
  )
}

export default Main