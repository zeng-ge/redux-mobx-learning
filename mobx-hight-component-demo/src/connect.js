import { observer, Observer } from './observer'
export default WrapComponent => {
  const baseRender = WrapComponent.prototype.render;
  const baseDidMount = WrapComponent.prototype.componentDidMount;
  let isInited = false;

  const render = function(){
    let renderResult = null;
    observer(() => {
      renderResult = baseRender.call(this);
    }, () => {
      this.forceUpdate();
    })
    return renderResult;
  };

  WrapComponent.prototype.render = render;
  WrapComponent.prototype.componentDidMount = function(state, props){
    this.loaded = true;
    baseDidMount && baseDidMount(state, props);
  }

  return WrapComponent
}