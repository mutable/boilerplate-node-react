const Meta = require('@mutable/meta')
const { Proxy } = require('@mutable/proxy')
 
Meta.config()
  .then(config => {
      console.log(config);
    const proxy = new Proxy(config);
    Meta.on('configChange', c => proxy.updateConfig(c))
  })
  .catch(e => {throw e})