import Cac1 from './src/assets/cac1.png'
import Cac2 from './src/assets/cac2.png'
import Cac3 from './src/assets/cac3.png'
import Cac4 from './src/assets/cac4.png'
import Cac5 from './src/assets/cac5.png'
import Maps1 from './src/assets/maps1.png'
import Maps2 from './src/assets/maps2.png'
import Maps3 from './src/assets/maps3.png'
import Maps4 from './src/assets/maps4.png'
import Progress1 from './src/assets/progress1.png'
import Progress2 from './src/assets/progress2.gif'
import Progress3 from './src/assets/progress3.png'
import Progress4 from './src/assets/progress4.png'
import Streaks1 from './src/assets/streaks1.png'
import Streaks2 from './src/assets/streaks2.png'
import Streaks3 from './src/assets/streaks3.png'
import Streaks4 from './src/assets/streaks4.png'
import Streaks5 from './src/assets/streaks5.png'

// import Offline1 from './src/assets/offline1.png'
// import Offline2 from './src/assets/offline2.png'
// import Offline3 from './src/assets/offline3.png'

const Config = {
  Links: {
    discord: 'https://discord.gg/TBuqVx5Fdn',
    twitter: 'https://twitter.com/H2Multiplayer',
  },
  About: {
    header: {
      title: 'What is H2M-Mod?',
      description:
        'H2 Multiplayer Mod (H2M-Mod for short) is a mod for Call of Duty: Modern Warfare Remastered (H1) that aims to recreate the original Modern Warfare 2 Multiplayer experience with new twists. The mod features a wide variety of maps, new progression, unique camos, remastered weapons, custom attachments, and more. The original MW2 killstreaks make a return as well, completely changing the way Modern Warfare Remastered feels and plays.',
      button: {
        text: 'Watch Trailer',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    },
    carousels: [
      {
        type: 'right',
        title: 'Maps',
        description:
          'On H2M-Mod you can play all the Modern Warfare Remastered maps you own, as well as the original MW2 multiplayer maps. Some of the MW2 Campaign Remastered singleplayer maps are also playable as custom multiplayer maps. This totals to a possible 50+ playable maps on launch.',
        images: [Maps1, Maps2, Maps3, Maps4],
      },
      {
        type: 'left',
        title: 'Create a Class',
        description:
          'Utilize the MW2 Campaign Remastered weapons alongside a few fan favorite Modern Warfare Remastered weapons. Remastered MW2 attachments, perks, pro perks, equipment, and death streaks are all featured as well. And yes, you can have two attachments with Bling.',
        images: [Cac1, Cac2, Cac3, Cac4, Cac5],
      },
      {
        type: 'right',
        title: 'Killstreaks',
        description:
          'The classic MW2 killstreak rewards make a return. Their strength and power match that of the original game. You can unlock and select up to 3 killstreaks at a time. Just like in the original, kills earned by your killstreaks will count towards earning your next killstreak.',
        images: [Streaks1, Streaks2, Streaks3, Streaks4, Streaks5],
      },
      {
        type: 'left',
        title: 'Progression',
        description:
          'Progression is very similar to the classic MW2 Multiplayer, but with new additions. There are 70 ranks for each of our 10 prestiges, however, after hitting Prestige 10, players can progress up to level 1000. The classic camos are remastered and can be earned, alongside new ones (including mastery camos & special animated camos). The classic MW2 calling cards and emblems return as well, along with new ones.',
        images: [Progress1, Progress2, Progress3, Progress4],
      },
      // {
      //   type: 'right',
      //   title: 'Offline Play',
      //   description:
      //     'In H2M-Mod, we added an offline mode that allows players to play and progress offline, completely separate from the online progression and experience. There is also progression in online private matches for those that wish to play with friends or only bots, without being forced to play online servers.',
      //   images: [Offline1, Offline2, Offline3],
      // },
    ],
  },
}

export default Config
