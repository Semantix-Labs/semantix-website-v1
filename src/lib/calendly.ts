export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/semantixlabs/30min' });
  } else {
    window.open('https://calendly.com/semantixlabs/30min', '_blank');
  }
};
