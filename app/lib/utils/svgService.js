const noop = () => {
  return null;
};

class SvgService {
  /**
   * @function constructor
   * Initialises the properties on all the new instances of the @class_SvgService
   * @param {callback.isRequired} dynamicFileFetch Callback that returns a dynamic import call to the svgChunkFile required to be fetched.
   * @param {string.isRequired} eventToRegister String specifying the event(pre-defined/custom) to listen for and fire the listener upon.
   * @param {callback.isRequired} rerenderParent Callback that returns an update method @function this.forceUpdate()  which fires to update the parent where svg service is inititalised.
   * @param {object.isRequired} eventTarget Object to register the event on.
   */

  constructor(dynamicFileFetch, eventToRegister, rerenderParent, eventTarget) {
    try {
      if (
        typeof dynamicFileFetch === "undefined" ||
        typeof eventToRegister === "undefined" ||
        typeof rerenderParent === "undefined" ||
        typeof eventTarget === "undefined"
      ) {
        throw new Error(
          "At least one of the mandatory parameters dynamicFileFetch ,eventToRegister ,rerenderParent and eventTarget is undefined"
        );
      }
      this.dynamicFileFetch = dynamicFileFetch;
      this.rerenderParent = rerenderParent;
      this.eventTarget = eventTarget;
      this.svgs = {};
      this.addEvent(eventToRegister, eventTarget);
    } catch (err) {
      // console.log("Err. in SvgService : %s", err);
    }
  }

  /**
  * @function loadSvgFile
  * Event listener for all the events registered on the window serivce which fires to resolve the import returned by @function dynamicFileFetch and stores the svg
  file imported as a @property {svgs}  -on the service instance and re-renders the parent using @function rerenderParent .
  */

  loadSvgFile = () => {
    this.dynamicFileFetch().then(svgFile => {
      this.svgs = svgFile.default;
      this.rerenderParent();
    });
    // .catch(err => console.log(err));
  };

  /**
   * @function addEvent
   * Adds the specified event on the specified target and tracks it onto the window service and sets @function loadSvgFile as it callback upon fire.
   * @param {string.isRequired} event String specifying the event(pre-defined/custom) to listen for and fire the listener upon.
   * @param {object.isRequired} eventTarget Object to register the event on.
   */

  addEvent = (event, eventTarget) => {
    if (typeof window === "undefined") {
      return null;
    }
    if (event === "load" && document.readyState === "complete") {
      this.loadSvgFile();
      return null;
    }
    return eventTarget.addEventListener(event, this.loadSvgFile);
  };

  /**
  * @function getSVG
  * Getter method provied to the svg service instances to fetch the svg files from the svg chunk file once it has been imported into the @property {svgs} -and return a null
  component in all the other cases using @function noop .
  * @param {string.isRequired} svgName String specifiying the name of the svg to extract from the svg chunk file that is imported
  */

  getSVG = svgName => {
    if (this.svgs && this.svgs[svgName]) {
      if (typeof this.svgs[svgName] === "function") {
        // check used to prevent rendering conflict in case of svgs common between multiple svg chunks
        return this.svgs[svgName];
      }
      return () => {
        return this.svgs[svgName];
      };
    }
    return noop;
  };

  /**
   * @function removeChangeListener
   * Function which is called when the subscribed component is unmounted, removing the event listener that was set by the same to prevent future 'this' binding conflicts
   * @param {string.isRequired} eventName String specifying the event/eventListener to remove.
   */

  removeChangeListener(eventName) {
    this.eventTarget.removeEventListener(eventName, this.loadSvgFile);
  }
}

export default SvgService;
