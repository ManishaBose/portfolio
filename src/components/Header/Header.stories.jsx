import { Header} from './Header';

// export default {
//   component: Header,
// };

// export const Primary = {
//   args: {
//     label: 'Header',
//     primary: true,
//   },
// };
// export const Mobile = {
//     args: {
//       label: 'Header',
//       primary: true,
//     },
//   };

//   import { Header } from './Header';

export default {
  component: Header,
};

export const Primary = {
    parameters: {
        viewport: { defaultViewport: 'desktop' },
    }
}

export const OnPhone = {
    parameters: {
      // 👇 Override default viewport for this story
      viewport: { defaultViewport: 'mobile1' },
    },
};
