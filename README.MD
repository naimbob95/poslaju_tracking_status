# Poslaju delivery status trackers

This is a NPM package to list the status of delivery in JSON format

[![Version](https://img.shields.io/npm/v/poslaju_status_tracker.svg)](https://www.npmjs.com/package/poslaju_status_tracker)

[![License](https://img.shields.io/npm/l/poslaju_status_tracker.svg)](https://www.npmjs.com/package/poslaju_status_tracker)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

#   Installation
Install the package from the NPM :
```bash
npm i poslaju_status_tracker
```

Include it in your code :

```bash
const poslaju = require("poslaju_status_tracker");
```

# Usage

Example use in code:

```bash
const poslaju = require("poslaju_status_tracker");
const status = poslaju.get_tracking_status("{{tracking_no}}");
console.log(status);
```

Example Output:
```bash
[
  {
    date_time: '13 Feb 2021, 01:19:40 PM',
    status: 'Item delivered to   AMIRUL NAIM',
    location: 'Pos Laju Balakong '
  },
  {
    date_time: '13 Feb 2021, 10:02:29 AM',
    status: 'Item out for delivery ',
    location: 'Pos Laju Balakong '
  },
  {
    date_time: '11 Feb 2021, 10:32:22 AM',
    status: 'Arrive at delivery facility at ',
    location: 'Pos Laju Balakong '
  },
  {
    date_time: '10 Feb 2021, 11:38:03 AM',
    status: 'Consignment dispatch out from Transit Office ',
    location: 'PosLaju Parcel Hub'
  },
  {
    date_time: '09 Feb 2021, 11:09:57 PM',
    status: 'Item processed. ',
    location: 'PosLaju Parcel Hub'
  },
  {
    date_time: '08 Feb 2021, 08:52:00 PM',
    status: 'Item dispatched out ',
    location: 'Pos Laju Bahau '
  },
  {
    date_time: '08 Feb 2021, 06:20:00 PM',
    status: 'Item dispatched out ',
    location: 'Bahau Forward'
  },
  {
    date_time: '08 Feb 2021, 05:37:52 PM',
    status: 'Item picked up ',
    location: 'Bahau Forward'
  }
]
```
# Contributing
If you found any errors,bug or got ideas to improve, you can submit a pull request.

# License

ISC. See [LICENSE](LICENSE) for more details.

