import 'zepto'
import 'weui'
import './style.css'
import edgelogo from './edge.svg'
import githublogo from '/github.svg'
import logo from '/logo.png'

document.querySelector('#app').innerHTML = `

  <div class="page">
  <div class="page__hd">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">PMS 工具箱</div>
      <div class="weui-panel__bd">
          <div role="option" class="weui-media-box weui-media-box_text">
              <p class="weui-media-box__desc">用于酒店 PMS 管理软件辅助效率工具，生成账单，计算价格等功能。</p>
          </div>
      </div>
    </div>
  </div>
  <div class="page__bd">
      <div class="weui-panel weui-panel_access">
          <div class="weui-panel__hd">浏览器扩展</div>
          <div class="weui-panel__bd">
              <a href="javascript:" class="weui-media-box weui-media-box_appmsg" id="msedgelink">
                  <div aria-hidden="true" class="weui-media-box__hd">
                      <img class="weui-media-box__thumb"
                          src="${edgelogo}"
                          alt="Microsoft Edge">
                  </div>
                  <div aria-hidden="true" class="weui-media-box__bd">
                      <strong class="weui-media-box__title">Microsoft Edge 在线安装</strong>
                      <p class="weui-media-box__desc">由于国内网络原因，建议使用 Microsoft Edge 浏览器直接安装使用。</p>
                  </div>
              </a>
              <a href="javascript:" class="weui-media-box weui-media-box_appmsg" id="githublink">
                  <div aria-hidden="true" class="weui-media-box__hd">
                      <img class="weui-media-box__thumb"
                          src="${githublogo}"
                          alt="Github">
                  </div>
                  <div aria-hidden="true" class="weui-media-box__bd">
                      <strong class="weui-media-box__title">源文件手动安装</strong>
                      <p class="weui-media-box__desc">如无法在线安装，需自行修改扩展或手动安装，可访问 Github 下载源文件。</p>
                  </div>
              </a>
          </div>
      </div>
      <div class="weui-panel weui-panel_access">
          <div class="weui-panel__hd">本地版（旧）</div>
          <div class="weui-panel__bd">
              <a href="javascript:" class="weui-media-box weui-media-box_appmsg" id="PTlink">
                  <div aria-hidden="true" class="weui-media-box__hd">
                      <img class="weui-media-box__thumb"
                          src="${logo}"
                          alt="PMS-Tool">
                  </div>
                  <div aria-hidden="true" class="weui-media-box__bd">
                      <strong class="weui-media-box__title">PMS-Tool</strong>
                      <p class="weui-media-box__desc">无需安装插件，解压即可使用。旧版本，最后更新时间：2020/7/21 2:22</p>
                  </div>
              </a>
          </div>
      </div>
      <div class="weui-panel">
          <div class="weui-panel__hd">隐私政策</div>
          <div class="weui-panel__bd">
              <div role="link" class="weui-media-box weui-media-box_text">
                  <div class="weui-media-box__desc" aria-hidden="true">
                      <p>用户的隐私对我们来说非常重要，我们致力于保护它。本政策解释了我们将如何处理您的个人信息。</p><br>
                      <h4>本地存储的信息</h4>
                      <p>PMSTool
                          扩展在本地存储信息（仅在用户的计算机上）。此信息包括扩展程序的设置。此数据不会发送到用户计算机之外。由于数据存储在扩展本地数据库中，因此当卸载浏览器扩展时，本地存储的数据也会被删除，并且扩展在本地存储信息不随着浏览器账户同步。
                      </p><br>
                      <h4>更改网站信息</h4>
                      <p>PMSTool 扩展程序会在您访问的网站中嵌入代码。此代码用于 PMSTool 扩展程序基础功能，不限于任何网站，并不会影响您访问的站点数据和上传您的数据。</p><br>
                      <h4>收集个人信息</h4>
                      <p>PMSTool 扩展程序不会发送任何个人信息。</p><br>
                      <h4>更改隐私政策</h4>
                      <p>我们可能会不时通过在我们的网站上发布新版本来更新此政策。您应不时查看此页面，以确保您了解本政策的任何更改。我们可能会通过电子邮件或我们网站上的公告通知您本政策的更改。</p>
                      <p>如果我们决定更改我们的隐私政策，我们将在此页面上发布这些更改。</p>
                  </div>
                  <ul class="weui-media-box__info" aria-hidden="true">
                      <li class="weui-media-box__info__meta" aria-hidden="true">发布：2022年10月18日</li>
                      <li class="weui-media-box__info__meta" aria-hidden="true">修改：2023年10月14日</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <div class="page__ft">
      <div class="weui-footer">
          <div class="weui-footer__text">
              Copyright &copy; 2020 - 2024 PMS-Tool All Rights Reserved.
          </div>
      </div>
  </div>
</div>
`

$("#msedgelink").click(function(){
  window.open('https://microsoftedge.microsoft.com/addons/detail/bdlmahkjmklokkcnbcechpoafneippip')
});

$("#githublink").click(function(){
  window.open('https://github.com/ccizm/PMS-Tools')
});

$("#PTlink").click(function(){
    window.open('./files/PMS-Tool.zip')
  });