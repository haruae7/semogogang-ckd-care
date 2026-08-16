const OFFICIAL_LINKS = Object.freeze({
  NAVER_CAFE: 'https://cafe.naver.com/strongcat',
  YOUTUBE: 'https://www.youtube.com/@youtubecat',
  INSTAGRAM: 'https://www.instagram.com/yourcat7/'
});

window.OFFICIAL_LINKS = OFFICIAL_LINKS;

document.querySelectorAll('[data-official-link]').forEach((link) => {
  const url = OFFICIAL_LINKS[link.dataset.officialLink];
  if (!url) return;

  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
