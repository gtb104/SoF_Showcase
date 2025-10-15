import { writable } from 'svelte/store';

const scheduleStore = writable([
  {
    group: 'Morning',
    events: [
      {
        time: '9:00 AM',
        description: 'Gates open'
      },
      {
        time: '10:00 AM',
        description: 'Opening ceremony'
      }
    ]
  },
  {
    group: 'Group 1',
    events: [
      {
        time: '2:00 PM',
        description: 'Fluvanna County HS',
        bandId: 'fluvanna'
      },
      {
        time: '2:15 PM',
        description: 'Caroline HS',
        bandId: 'caroline'
      },
      {
        time: '2:30 PM',
        description: 'Spotswood HS',
        bandId: 'spotswood'
      },
      {
        time: '2:45 PM',
        description: 'Skyline HS',
        bandId: 'skyline'
      },
      {
        time: '3:00 PM',
        description: 'Thomas Edison HS',
        bandId: 'edison'
      },
      {
        time: '3:15 PM',
        description: 'Strasburg HS',
        bandId: 'strasburg'
      },
      {
        time: '3:30 PM',
        description: 'Break'
      }
    ]
  },
  {
    group: 'Group 2',
    events: [
      {
        time: '3:45 PM',
        description: 'Culpeper County HS',
        bandId: 'culpeper'
      },
      {
        time: '4:00 PM',
        description: 'Landstown HS',
        bandId: 'landstown'
      },
      {
        time: '4:15 PM',
        description: 'Tuscarora HS',
        bandId: 'tuscarora'
      },
      {
        time: '4:30 PM',
        description: 'Turner Ashby HS',
        bandId: 'turnerashby'
      },
      {
        time: '4:45 PM',
        description: 'Clarke County HS',
        bandId: 'clarkecounty'
      }
    ]
  },
  {
    group: 'Group 3',
    events: [
      {
        time: '5:00 PM',
        description: 'Yorktown HS',
        bandId: 'yorktown'
      },
      {
        time: '5:15 PM',
        description: 'Princess Anne HS',
        bandId: 'princessanne'
      },
      {
        time: '5:30 PM',
        description: 'Dinner Break'
      }
    ]
  },
  {
    group: 'Group 4',
    events: [
      {
        time: '6:30 PM',
        description: 'George C Marshall HS',
        bandId: 'marshall'
      },
      {
        time: '6:45 PM',
        description: 'Osbourn Park HS',
        bandId: 'osbournpark'
      },
      {
        time: '7:00 PM',
        description: 'Rock Ridge HS',
        bandId: 'rockridge'
      },
      {
        time: '7:15 PM',
        description: 'Dominion HS',
        bandId: 'dominion'
      },
      {
        time: '7:30 PM',
        description: 'Break'
      }
    ]
  },
  {
    group: 'Group 5',
    events: [
      {
        time: '7:45 PM',
        description: 'Riverside HS',
        bandId: 'riverside'
      },
      {
        time: '8:00 PM',
        description: 'Jefferson Forest HS',
        bandId: 'jeffersonforest'
      },
      {
        time: '8:15 PM',
        description: 'West Potomac HS',
        bandId: 'westpotomac'
      }
    ]
  },
  {
    group: 'Group 6',
    events: [
      {
        time: '8:30 PM',
        description: 'Thomas Jefferson HSST',
        bandId: 'tjhsst'
      },
      {
        time: '8:45 PM',
        description: 'John Champe HS',
        bandId: 'johnchampe'
      },
      {
        time: '9:00 PM',
        description: 'Independence HS',
        bandId: 'independence'
      }
    ]
  },
  {
    group: 'Exhibition',
    events: [
      {
        time: '9:15 PM',
        description: 'Freedom HS',
        bandId: 'freedom'
      }
    ]
  },
  {
    group: 'Awards Ceremony',
    events: [
      {
        time: '9:30 PM',
        description: 'Presentation of awards'
      }
    ]
  }
]);

export default scheduleStore;
