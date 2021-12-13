import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';

import { GitHub, Public, SportsEsports, YouTube } from '@mui/icons-material';

export default function Index({ item }) {
  const { name, url, image, description, tags, page } = item;
  const Icons = (
    <>
      {
        url.website && <IconButton aria-label="Website" href={url.website}>
          <Public />
        </IconButton>
      }
      {
        url.game && <IconButton aria-label="Website" href={url.game}>
          <SportsEsports />
        </IconButton>
      }
      {
        url.github && <IconButton aria-label="Github" href={url.github}>
          <GitHub />
        </IconButton>
      }
      {
        url.youtube && <IconButton aria-label="Youtube" href={url.youtube}>
          <YouTube />
        </IconButton>
      }
    </>
  );
  const Tags = (
    <>
      {
        tags && tags.category && tags.category.map((tag) => <Chip
          label={tag}
          color="primary"
          size="small"
          sx={{ marginTop: 1, marginRight: 1 }}
        />)
      }
      {
        tags && tags.tech && tags.tech.map((tag) => <Chip
          label={tag}
          size="small"
          sx={{ marginTop: 1, marginRight: 1 }}
        />)
      }
    </>
  );
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          height={60}
          textOverflow="ellipsis"
        >
          {description}
        </Typography>
        {Tags}
      </CardContent>
      <CardActions disableSpacing>
        {Icons}
        <Button size="small" style={{ marginLeft: 'auto' }} href={page}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
