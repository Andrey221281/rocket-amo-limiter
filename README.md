## Install

```
$ yarn add rocket-amo-limiter
```

## How to use

Вы можете использовать его через API axios interceptor.

### Logging Request

```javascript
import axios from 'axios';
import rocketAmoLimiter from 'rocket-amo-limiter';

const instance = axios.create();
this.instance.interceptors.request.use(request => {
    return getProxy(request, { proxyUrl: 'http://localhost:3300/proxy/catch' })
})
```

## Configuration Settings

Вы должны настроить proxy url

```javascript
config({
    url: string
});
```