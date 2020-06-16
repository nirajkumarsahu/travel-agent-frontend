import { apiFetch } from "lib/utils";
import { API_URLS } from "global/constants/urls";

export const handleClevertapLoad = () => {
  const isFirstLaunch = localStorage && localStorage.getItem("isFirstLaunch");
  if (isFirstLaunch !== "true") {
    const { domain, cleverTapApi } = API_URLS;
    apiFetch({
      url: `${domain}${cleverTapApi}`,
      method: "POST",
      data: {
        cleverTapId: window.clevertap.getCleverTapID(),
        isFirstLaunch: true
      }
    });
    localStorage.setItem("isFirstLaunch", true);
  }
};

// values map key is Id of event, and value is an array of type => [category, action, label, value]
// const eventsConfig = {
//   1: ["Header (Home)", "Main Logo Clicked", "", ""],
//   2: ["Header (Home)", "Support Number Clicked", "", ""],
//   3: ["Header (Home)", "Corporate Enquiry Clicked", "", ""],
//   4: ["Header (Home)", "Franchisee Clicked", "", ""],
//   5: ["Header (Home)", "Join A-List Clicked", "", ""],
//   6: ["Header (Home)", "Login/Signup Clicked", "", ""],
//   7: ["Login Process", "Login Cross Clicked", "", ""],
//   8: ["Login Process", "Google Login Clicked", "", ""],
//   9: ["Login Process", "FB Login Clicked", "", ""],
//   10: ["Login Process", "Mobile Number Entered", "", ""],
//   11: ["Login Process", "Continue (Send OTP) Clicked", "", ""],
//   12: ["Login Process", "Invalid OTP Error", "", ""],
//   13: [
//     "Login Process",
//     "Phone Number Error shown",
//     "<Error displayed>|<Phone number entered>",
//     ""
//   ],
//   14: ["Login Process", "Change Mobile Number Clicked", "", ""],
//   15: ["Login Process", "Resend OTP Clicked", "", ""],
//   16: ["Login Process", "Login (After OTP) Clicked", "", ""],
//   17: [
//     "Login Process",
//     "Login Successful",
//     "<Type of login>",
//     `PhoneOTP or Google or Facebook`
//   ],
//   18: ["My account", "Option selected", "Homepage My Bookings", ""],
//   19: ["My account", "Option selected", "Homepage Profile", ""],
//   21: ["My account", "Option selected", "Homepage My fab credits", ""],
//   22: ["My account", "Option selected", "Homepage A-List membership", ""],
//   23: ["My account", "Option selected", "Homepage Log out", ""],
//   24: [
//     "Homepage",
//     "Product Impression",
//     "Fabulous Or Free Know More Clicked",
//     ""
//   ],
//   25: ["A-List", "Click", "Homepage A-List Banner_Click", ""],
//   26: ["Refer and Earn", "Click", "Homepage Refer&Earn_Click", ""],
//   27: ["Homepage", "Homepage Popular City Clicked", "<City>", ""],
//   28: ["Homepage", "Homepage Popular City All Cities Clicked", "<URL>", ""],
//   29: ["Deals", "Homepage Deals Banner Clicked", "<URL>", ""],
//   30: ["Deals", "Homepage Deals Sign Up clicked", "<URL>", ""],
//   31: ["Deals", "Homepage Deals Subscribe Clicked", "", ""],
//   32: ["Reviews", "Homepage Reviews View All Clicked", "<URL>", ""],
//   33: ["Reviews", "Homepage Reviews Next Button Clicked", "<Click Number>", ""],
//   34: ["Reviews", "Homepage Reviews Prev Button clicked", "<Click Number>", ""],
//   35: ["Homepage", "Homepage Blog Article Click Clicked", "", ""],
//   36: ["Homepage", "Homepage Blog Read All articles Clicked", "<URL>", ""],
//   37: ["Footer", "Homepage App Install QR Code", "", ""],
//   38: ["Footer", "Homepage App Install App Store Clicked", "<URL>", ""],
//   39: ["Footer", "Homepage About Us Clicked", "<URL>", ""],
//   40: ["Footer", "Homepage Careers Clicked", "<URL>", ""],
//   41: ["Footer", "Homepage Press Clicked", "<URL>", ""],
//   42: ["Footer", "Homepage Blog Clicked", "<URL>", ""],
//   43: ["Footer", "Homepage Franchisee Link Clicked", "<URL>", ""],
//   44: ["Footer", "Homepage Franchisee CTA Clicked", "<URL>", ""],
//   45: ["Footer", "Homepage Travel agent Clicked", "<URL>", ""],
//   46: ["Footer", "Homepage Corporate Enquiry clicked", "<URL>", ""],
//   47: ["Footer", "Homepage T&C clicked", "<URL>", ""],
//   48: ["Footer", "Homepage Privacy clicked", "<URL>", ""],
//   49: ["Footer", "Homepage Cancellation policy clicked", "<URL>", ""],
//   50: ["Footer", "Homepage FAQs clicked", "<URL>", ""],
//   51: ["Footer", "Homepage T&C clicked", "<URL>", ""],
//   52: ["Footer", "Homepage City Links Clicked", "<URL>", ""],
//   53: ["Footer", "Homepage Get Link Via SMS Clicked", "", ""],
//   54: ["Footer", "Homepage Get Link Via SMS Send Link Clicked", "", ""],
//   55: ["Footer", "Homepage App Install Google Play Bottom clicked", "", ""],
//   56: ["Footer", "Homepage App Install Apple Store Bottom clicked", "", ""],
//   57: ["Search Widget (Home)", "Location Entered", "<City/Locality/hotel>", ""],
//   58: ["Search Widget (Home)", "Location Cleared", "<City/Locality/hotel>", ""],
//   59: [
//     "Search Widget (Home)",
//     "Static dropdown city selected",
//     "<City/Locality/hotel>",
//     ""
//   ],
//   60: [
//     "Search Widget (Home)",
//     "FAS Location selected",
//     "<City/Locality/hotel>|<sequence number of suggestion chosen>",
//     ""
//   ],
//   61: [
//     "Search Widget (Home)",
//     "GAS Location selected",
//     "<City/Locality/hotel>|<sequence number of suggestion chosen>",
//     ""
//   ],
//   62: [
//     "Search Widget",
//     "Homepage Dates_Dates changed",
//     "CI: <Date> CO: <Date>",
//     ""
//   ],
//   63: ["Search Widget", "Homepage Guests_List Open", "G: <value>", ""],
//   64: ["Search Widget", "Homepage Guests_List Closed", "G: <value>", ""],
//   65: [
//     "Search Widget",
//     "CTA Clicked",
//     "Home Page-> <FAS/GAS><City/ Locality> | <no. of nights> | <no. of guests>",
//     ""
//   ],
//   66: ["Homepage", "Homepage Popular City Tags", "<City>", ""],
//   67: [
//     "Your Bookings",
//     "Home Page Your Bookings Clicked",
//     "<Sequence Number>|<URL>",
//     ""
//   ],
//   68: ["Your Bookings", "Homepage All Bookings Clicked", "<URL>", ""],
//   69: [
//     "Recommended",
//     "Homepage Recommended Clicked",
//     "<Sequence Number>|<URL>",
//     ""
//   ],
//   70: [
//     "Recommended",
//     "Homepage Recommended Next Button Clicked",
//     "<Click Number>",
//     ""
//   ],
//   71: [
//     "Recommended",
//     "Homepage Recommended Prev Button clicked",
//     "<Click Number>",
//     ""
//   ]
// };

// export const event = (id, LABEL, VALUE) => {
//   // eslint-disable-next-line prefer-const
//   let [category, action, label, value] = eventsConfig[id];
//   if (LABEL) label = LABEL;
//   if (VALUE) value = VALUE;
//   window.gtag("event", action, {
//     event_category: category,
//     event_label: label,
//     value
//   });
// };

export const pushToDataLayer = (category = "", action = "", label = "") => {
  // eslint-disable-next-line no-undef
  if (dataLayer) {
    // eslint-disable-next-line no-undef
    return dataLayer.push({
      event: "GA Action Tracking",
      eventCategory: category,
      eventAction: action,
      eventLabel: label
    });
  }
  return null;
};
