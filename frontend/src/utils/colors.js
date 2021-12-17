// const availableColors = [
//   'blue',
//   'indigo',
//   'purple',
//   'pink',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'teal',
//   'cyan',
//   'white',
//   'gray',
//   'gray-dark',
//   'primary',
//   'secondary',
//   'success',
//   'info',
//   'warning',
//   'danger',
//   'light',
//   'dark',
// ];

export const getColor = (availableColor = 'primary') => {
  if (typeof window === 'undefined') {
    return null;
  }

  const color = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${availableColor}`);

  return color;
};

export const getThemeColors = () => [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
];

export const constData = [
  {
    id: 1,
    name: 'Chinmay Pattar',
    donated: 1,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
    plan: 1,
    balanceNextRenewDate: '2021-03-14',
    parentId: 0,
    mobile: 9819312721,
  },
  {
    id: 2,
    name: 'b',
    donated: 82,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 3,
    name: 'c',
    donated: 13,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 4,
    name: 'd',
    donated: 5,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 5,
    name: 'e',
    donated: 8,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 6,
    name: 'f',
    donated: 19,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 7,
    name: 'g',
    donated: 15,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 8,
    name: 'h',
    donated: 20,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 9,
    name: 'i',
    donated: 21,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 10,
    name: 'j',
    donated: 23,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 11,
    name: 'k',
    donated: 25,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 12,
    name: 'l',
    donated: 26,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
];
