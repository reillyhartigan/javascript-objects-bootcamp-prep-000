var playlist = {
  'lil wayne': 'fireman',
  'lil yachty': 'get dripped'
}
function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
//playground

var schedule = {
  conferenceDay: 'Monday, April 8',
  timeBlock: '6:30 A.M.',
  title: 'Regisration',
  timeStart: '6:30 A.M.',
  timeEnd: '6:00 P.M.',
  location: 'Mandalay Bay Foyer',
  description: 'The Registration Desk will be located in the Mandalay Bay Foyer.\r\n\r\nNOTE: You will need a photo ID in order to receive your conference badge and materials. If you misplace your badge for any reason, a $75.00 processing fee will be charged for a replacement.',
  speaker: {
    fullNameAndTitle: 'Vincent Wong, Senior Product Manager, Atlassian'
    bio: ''
  }
  audienceLevel: 'All levels',
  track: 'Registration',
}
