import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ShelterLocation() {
  return (
    <ImageList sm={{ width: 300, height: 250 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Contact: {item.tell}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5adca6780dbda3d259017d9c/1588790428431-QKV0AGN6GVR8ELP3BC3W/IMG_5053.jpg?format=2500whttps://images.squarespace-cdn.com/content/v1/5adca6780dbda3d259017d9c/1588790428431-QKV0AGN6GVR8ELP3BC3W/IMG_5053.jpg?format=2500whttps://images.squarespace-cdn.com/content/v1/5adca6780dbda3d259017d9c/1588790428431-QKV0AGN6GVR8ELP3BC3W/IMG_5053.jpg?format=2500w',
    title: 'Thecatcade',
    tell: 'INFO@THECATCADE.ORG',
  },
  {
    img: 'https://animalwelfareleague.com/wp-content/uploads/2023/01/Cuddles-and-Kisses.png',
    title: 'animalwelfareleague',
    tell: '(708)636-8586',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    tell: '+1 708 301 1594',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    tell: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    tell: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    tell: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    tell: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    tell: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    tell: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    tell: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    tell: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    tell: '@southside_customs',
  },
];