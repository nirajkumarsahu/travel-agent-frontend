import { SEND_APPLINK } from "./FooterImages.constants";

// eslint-disable-next-line import/prefer-default-export
export const sendAppLink = data => ({
  type: SEND_APPLINK,
  data
});
