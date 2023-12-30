import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
// import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * Giscus评论 @see https://giscus.app/zh-CN
 * Contribute by @txs https://github.com/txs/NotionNext/commit/1bf7179d0af21fb433e4c7773504f244998678cb
 * @returns {JSX.Element}
 * @constructor
 */

const Artalk = ({ siteInfo }) => {
  const artalkCss = siteConfig('COMMENT_ARTALK_CSS')
  const artalkServer = siteConfig('COMMENT_ARTALK_SERVER')
  const artalkLocale = siteConfig('LANG')
  const site = siteConfig('TITLE')

  useEffect(() => {
    initArtalk()
  }, [])

  const initArtalk = async () => {
    await loadExternalResource(artalkCss, 'css')
    window?.Artalk?.init({
      server: artalkServer, // 后端地址
      el: '#artalk', // 容器元素
      locale: artalkLocale,
      //   pageKey: '/post/1', // 固定链接 (留空自动获取)
      //   pageTitle: '关于引入 Artalk 的这档子事', // 页面标题 (留空自动获取)
      site: site // 你的站点名
    })
  }
  return (
        <div id="artalk"></div>
  )
}

export default Artalk
