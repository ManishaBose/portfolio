import { Header} from './Header';
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
