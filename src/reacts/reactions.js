export const reactions = {
  happy: [
    'https://media.giphy.com/media/Mbqtf55jLS6SQ/giphy.gif',
    'https://media.giphy.com/media/qkbCdaJWt2STm/giphy.gif',
    'http://4.bp.blogspot.com/-tMVhK4tmr3s/UoTFKS0u1SI/AAAAAAAABxQ/PTraUuMeTeA/s1600/Happy+005.gif',
    'https://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif'
  ],
  sad: [
    'http://media1.giphy.com/media/4pk6ba2LUEMi4/giphy.gif',
    'https://m.popkey.co/b64414/bXMk3.gif',
    'https://m.popkey.co/34f494/dJOAR_s-200x150.gif?c=popkey-web&p=popkey&i=mondaymotivation-reactions&l=similar&f=.gif',
    'https://media.tenor.com/images/8acc3eaf2435f375e177f4431ff06e1a/tenor.gif'
  ],
  angry: [
    'https://s-media-cache-ak0.pinimg.com/originals/01/48/a2/0148a2c426e64d9ce20db34779832197.gif',
    'https://media.giphy.com/media/11fU1cGL64AQ0g/giphy.gif',
    'https://media.giphy.com/media/gbNlcP4m8wdY4/giphy.gif',
    'https://s-media-cache-ak0.pinimg.com/originals/f0/f3/ef/f0f3ef8332d5886fa151f46fb634bffc.jpg',
    'https://media.giphy.com/media/IpgWb2qil06GI/giphy.gif'
  ],
  love: [
    'https://gifimage.net/wp-content/uploads/2017/07/anime-reaction-gif-9.gif',
    'http://2.bp.blogspot.com/-sBbFcxnHYfY/UoOpSI8t0fI/AAAAAAAABtk/vNgzs-7BBvA/s1600/Love+001.gif',
    'http://2.bp.blogspot.com/-b7DFjGhNGTg/UqBjRAHc5LI/AAAAAAAAB9U/_PcfptJDVqI/s1600/Love+001.gif',
    'https://s-media-cache-ak0.pinimg.com/originals/79/6b/de/796bde015a0cb5a0212fcb11e46ce51a.gif',
    'https://media.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif'
  ]
};

export const getReactions = () => {
  const result = [];

  for (var reaction in reactions) {
    result.push(reaction);
  }

  return result.join(', ');
};
