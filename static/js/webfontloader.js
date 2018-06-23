WebFontConfig = {
  custom: {
    families: [
      'Mplus 1p',
      'Rounded Mplus 1c'
    ],
    urls: [
      'https://fonts.googleapis.com/earlyaccess/mplus1p.css',
      'https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css'
    ]
  },
  timeout: 3000
};

(function(d) {
  let wf = d.createElement('script'), s = d.scripts[0]
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.async = true;
  s.parentNode.insertBefore(wf, s);
})(document);
