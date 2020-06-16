import axios from "axios";
import Router from "next/router";
import mediaQuery from "styles/theme/mediaQuery";
import { httpRegex } from "lib/utils/validation";

axios.interceptors.response.use(
  response => {
    return response;
  },
  // eslint-disable-next-line func-names
  function(error) {
    if (error.response.status === 401) {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
    return Promise.reject(error.response);
  }
);

export const apiFetch = async (requestOptions, cookieString = "") => {
  let responseData = {};
  let resp = {};
  try {
    if (cookieString) {
      // eslint-disable-next-line
      requestOptions = {
        ...requestOptions,
        withCredentials: true
      };
      // eslint-disable-next-line
      requestOptions.headers = {
        Cookie: cookieString
      };
    }
    resp = await axios(requestOptions);

    responseData = resp.data;
  } catch (err) {
    // eslint-disable-next-line
    if (resp.status === 401 && location) {
      // eslint-disable-next-line
      location.reload();
    }
    // eslint-disable-next-line
    console.log("error occured inside api fetch", err);
    throw err;
  }
  return responseData;
};

export const updateError = (state, errorData) => ({
  ...state,
  error: errorData
});

export const checkViewPort = () => {
  return window.matchMedia(mediaQuery.smallMax).matches;
};

export const ttlActionTrigger = (ttlTimeStamp, ttlTimeInterval) => {
  let time = ttlTimeStamp;
  if (!ttlTimeStamp || Date.now() > ttlTimeStamp) {
    time = Date.now() + ttlTimeInterval * 1000;
  }
  return time;
};

export const getPageTimeStamp = state => state.globalReducer.ttlInfo;

export const createUrl = url => {
  const newUrl = httpRegex(url) ? url : `https://${url}`;
  return newUrl;
};

export const getDateInDDMMYYY = date => {
  date = new Date(date);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const setCookie = (cookieName, cookieValue, expiryDays) => {
  if (typeof window === "undefined") return;
  let expires = "";
  if (expiryDays) {
    const d = new Date();
    d.setTime((d.getTime() + expiryDays) * (24 * 60 * 60 * 1000));
    expires = `expires=${d.toUTCString()};`;
  }
  document.cookie = `${cookieName}=${cookieValue};${expires}path=/`;
};
/*eslint-disable*/
export const getCookie = (key, cookieString = "") => {
  if (typeof window === "undefined") return "";
  return document.cookie.replace(
    new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`),
    "$1"
  );
};

export const getCompleteCookieString = (cookieString = "") => {
  if (cookieString) {
    return cookieString;
  } else if (typeof window === "undefined") return cookieString;
  return document.cookie;
};

export const deleteCookie = cname => {
  const expires = "expires=Thu, 01-Jan-70 00:00:01 GMT;path=/";
  document.cookie = `${cname}=;${expires}`;
};

export const handleRedirection = (url = "/", isServer = false, serverRes) => {
  isServer ? serverRes.redirect(url) : Router.push(url);
};

export function getCurrentDate(date) {
  const calculateDate = new Date(date);
  let day = calculateDate.getDate();
  const year = calculateDate.getFullYear();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = monthNames[calculateDate.getMonth()]

  if (day < 10) {
    day = "0" + day;
  }
  return day + " " + month + ", " + year;
}

export function chunkArray(myArray, chunk_size) {
  let index = 0;
  let arrayLength = myArray.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}

export const toCommas = value => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const convertPriceToLocaleString = price => {
  if (!price) {
    return price
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const countryDropDownMapper = data => {
  const newData =
    data &&
    data.map(countryNode => {
      const { iso, code } = countryNode;
      return { text: iso, value: code };
    });
  return newData;
};

export const isEmptyObject = obj =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;


export function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}