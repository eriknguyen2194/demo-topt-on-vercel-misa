import { createComponent, createIntegration } from '@gitbook/runtime';

const DEFAULT_WIDGET_URL = 'https://demo-topt-on-vercel-misa.vercel.app/';

const misaDemoTotp = createComponent({
  componentId: 'misa-demo-totp',
  initialState: {},
  action: async (element, action) => {
    if (action.action === '@link.unfurl') {
      return { props: { url: action.url } };
    }
    return element;
  },
  render: async (element) => {
    const url = element.props.url || DEFAULT_WIDGET_URL;
    return (<block><webframe source={{ url }} aspectRatio={0.83} /></block>);
  },
});

export default createIntegration({ components: [misaDemoTotp] });
