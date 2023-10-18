
import localFont from 'next/font/local';

const openSansPro = localFont({
  src: [
    {
      path: '../public/fonts/SourceSans3-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/SourceSans3-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SourceSans3-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/SourceSans3-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../public/fonts/SourceSans3-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/fonts/SourceSans3-ExtraBold.ttf',
      weight: '800',
      style: 'extra-bold',
    },
    {
      path: '../public/fonts/SourceSans3-Black.ttf',
      weight: '900',
      style: 'black',
    }
  ]
});


export default openSansPro;