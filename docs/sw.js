/* ===========================================================
 * docsify sw.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * Register service worker.
 * ========================================================== */

const RUNTIME = 'docsify'
const HOSTNAME_WHITELIST = [
    self.location.hostname,
    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net'
]

// The Util Function to hack URLs of intercepted requests
const getFixedUrl = (req) => {
    var now = Date.now()
    var url = new URL(req.url)

    // 1. fixed http URL
    // Just keep syncing with location.protocol
    // fetch(httpURL) belongs to active mixed content.
    // And fetch(httpRequest) is not supported yet.
    url.protocol = self.location.protocol

    // 2. add query for caching-busting.
    // Github Pages served with Cache-Control: max-age=600
    // max-age on mutable content is error-prone, with SW life of bugs can even extend.
    // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
    // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
    if (url.hostname === self.location.hostname) {
        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
    }
    return url.href
}

/**
 *  @Lifecycle Activate
 *  New one activated when old isnt being used.
 *
 *  waitUntil(): activating ====> activated
 */
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})

/**
 *  @Functional Fetch
 *  All network requests are being intercepted here.
 *
 *  void respondWith(Promise<Response> r)
 */
self.addEventListener('fetch', event => {
    // Skip some of cross-origin requests, like those for Google Analytics.
    if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
        // Stale-while-revalidate
        // similar to HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale
        // Upgrade from Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
        const cached = caches.match(event.request)
        const fixedUrl = getFixedUrl(event.request)
        const fetched = fetch(fixedUrl, { cache: 'no-store' })
        const fetchedCopy = fetched.then(resp => resp.clone())

        // Call respondWith() with whatever we get first.
        // If the fetch fails (e.g disconnected), wait for the cache.
        // If there’s nothing in cache, wait for the fetch.
        // If neither yields a response, return offline pages.
        event.respondWith(
            Promise.race([fetched.catch(_ => cached), cached])
                .then(resp => resp || fetched)
                .catch(_ => { /* eat any errors */ })
        )

        // Update the cache with the version we fetched (only for ok status)
        event.waitUntil(
            Promise.all([fetchedCopy, caches.open(RUNTIME)])
                .then(([response, cache]) => response.ok && cache.put(event.request, response))
                .catch(_ => { /* eat any errors */ })
        )
    }
})
/* ===========================================================
* 文档化sw.js
* ===========================================================
* 版权所有 2016 @huxpro
* 在 Apache 2.0 下获得许可
* 注册 Service Worker。
* ========================================================== */

const RUNTIME = 'docsify'
const HOSTNAME_WHITELIST = [
    自我。位置。主机名，
    'fonts.gstatic.com'，
    'fonts.googleapis.com'，
“cdn.jsdelivr.net”
]

 Util 函数，用于破解被拦截请求的 URL
const getFixedUrl = （req） => {
    var now = 日期。现在（）
    var url = 新 URL（req.网址）

    1. 修复http URL
 只需保持与 location.protocol 同步即可
    fetch（httpURL） 属于活动混合内容。
 并且 fetch（httpRequest） 尚不受支持。
    网址。协议 = 自我。位置。协议

    2. 添加 cacheching - busting 查询。
 使用 Cache - Control 提供的 Github Pages：max - age=600
    max - age 在可变内容上容易出错，带有 SW 寿命的 bug 甚至可以延长。
 在 Fetch API 的缓存模式落地之前，我们必须解决查询字符串的缓存破坏问题。
    缓存控制错误：https://bugs.chromium.org/p/chromium/issues/detail?id=453190
    如果 （URL.主机名 === 自身。位置。主机名）{
        网址。搜索 += （url.搜索 ？ '&' ： '？'） + 'cache-bust=' + 现在
    }
返回 URL。href
}

/**
* @Lifecycle激活
* 当旧的不被使用时，新的被激活。
*
* waitUntil（）： 激活 ====> 激活
*/
自我。addEventListener（'激活'， 事件 => {
    事件。waitUntil（self.客户。索赔（））
}）

/**
* @Functional 获取
* 所有网络请求都在此处被拦截。
*
* 无效 respondWith（Promise<Response> r）
*/
自我。addEventListener（'fetch'， event => {
    跳过一些跨域请求，例如针对 Google Analytics（分析）的请求。
    如果 （HOSTNAME_WHITELIST.indexOf（新 URL（event.请求。url）。主机名） > -1） {
        过时重新验证
 类似于 HTTP 的 stale -while-revalidate：https://www.mnot.net/blog/2007/12/12/stale
 从 Jake's 升级到 Surma's：https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
        const cached = 缓存。match（event.请求）
        const fixedUrl = getFixedUrl（事件。请求）
        const fetched = fetch（fixedUrl， { cache： 'no-store' }）
        const fetchedCopy = 已获取。则（resp => resp.克隆（））

 使用我们首先得到的任何内容调用 respondWith（）。
        如果提取失败（例如断开连接），请等待缓存。
        如果缓存中没有任何东西，请等待提取。
        如果两者都没有产生响应，则返回脱机页面。
        事件。respondWith（
        承诺。race（[已获取。catch（_ => 缓存）， 缓存]）
。then（resp => resp || 已获取）
。catch（_ => { /* 吃掉任何错误 */ }）
）

        使用我们获取的版本更新缓存（仅适用于正常状态）
        事件。waitUntil（
        承诺。all（[fetchedCopy，缓存。open（运行时）]）
。then（（[response， cache]） => 响应。好的 && C缓存。put（事件。请求、响应））
。catch（_ => { /* 吃掉任何错误 */ }）
）
    }
}）