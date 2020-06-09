const user = { name: 'sky' }

const createProxy = target => {
  const proxy = new Proxy(user, {
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