const user = { name: 'sky' }

const createProxy = target => {
  const proxy = {}
  Object.defineProperty(proxy, 'name', {
    enumerable: true,
    configurable: true,
    get() {
      console.log('proxy get')
      return target['name']
    },
    set(value){
      console.log('proxy set')
      target['name'] = value
    }
  })
  return proxy
}

const userProxy = createProxy(user)
console.error(userProxy.name)
userProxy.name += 'proxy'