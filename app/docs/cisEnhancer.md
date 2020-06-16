# cisEnhancer

cisEnhancer is a utility method that this architecture provides for achieving dynamic saga, reducer, initialAction injection as well as connecting the component to the store. All the page level components will need to be wrapped with this cisEnhancer function.

```js
import cisEnhancer from '/app/lib/cisEnhancer';
import saga from './Page.saga'; // Root saga that listens to all individual saga effects
import reducer from './Page.reducer'; // Root reducer after combining all the page level reducers
import initialActions from './Page.actions'; //All actions that need to be triggered during page load

class Page extends PureComponent{
    //component definition and lifecycle methods come here
}

const mapStateToProps = state => ({
  // Any value that the component wants to map
});

export default cisEnhancer(Page, {
  mapStateToProps,
  saga,
  reducer,
  key: 'uniqueKey', // This is supposed to be a mandatory field - rest of the fields are optional
  initialActions,
});
```

* `cisEnhancer` function basically creates a High Order Component and connects it to the redux store taking in `mapStateToProps` and `mapDispatchToProps`.
* It internally has the definition of the `getInitialProps` function which will synchronously be called by Next.js which has access to store and request objects from server.
* The injection of global reducers, saga as well as dynamic injection of individual sagas, reducers and triggering of intial actions on page load is handled by this method.
* It also then waits for the page level sagas (explained below) to yield. We have a `sagaRunner` function which will wait till the `done` property of all running sagas are resolved/rejected.
* Checks if the WrappedComponent that we passed to it has a `getInitialProps` and calls that and waits on that too.