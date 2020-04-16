## HardCandy-Jekyll



### Preview

[Online preview view demo →](http://xseven.me/)

![1](/screenshot/1.png)

![2](/screenshot/2.png)

![3](/screenshot/3.png)

To check the display effect of the mobile phone, scan the QR code browser below to open

![4](/screenshot/4.png)



### Theme Features

- Theme is developed based on `jekyll 3.8.1`
- Responsive layout
- Article label index
- Article timeline index
- Blogger personal information display
- Support 9 kinds of code highlighting theme colors
- Supports three kinds of comment systems: `dispus`, `Lebly`, and `Gitment`
- Support `Baidu Statistics` and `Google Analytics` two website tracking systems
- Support 13 different social platform icons and link addresses
- Support 11 different platforms for sharing articles



### Start using

#### Online deployment

First, open a repository on `github` named `your github username.github.io`. And `clone` your warehouse to the local. Then download the [source](https://github.com/xukimseven/HardCandy-Jekyll) of `HardCandy-Jekyll` to the local, and change the `_config.yml` file to your own configuration (will be introduced below) After that, copy all the files to the root directory of your local warehouse, and then upload it to your `github` online warehouse, you can visit and see yourself through the domain name `https: // your github username.github.io` Blog page.

#### Local deployment

First install `Jekyll` locally [Please poke for details](https://www.jekyll.com.cn/docs/quickstart/)

After the installation is complete, use the command `jekyll -v` to check the ** jekyll version number **. If it is lower than `jekyll 3.x.x`, you need to upgrade to `jekyll 3.x.x`.

Use `gem install jekyll-paginate` or `sudo gem install jekyll-paginate` to install the pagination plugin for Jekyll.

After the source code `clone` is local, enter the `HardCandy-Jekyll` root directory in the terminal and run `jekyll server` or `bundle exec jekyll serve` to start jekyll service. Visit [http: // localhost: 4000](http: // localhost: 4000) through the browser, you can see the locally deployed `HardCandy-Jekyll` blog.

> warning! Notable places:
>
> As this theme is developed based on `jekyll 3.8.1`, differences in the version of jekyll may cause differences in related display effects. For details, please refer to the official document: [news](https://jekyllrb.com/news/)



### Configuration Document

- Start
  - [About blog](#about-blog)
  - [Write Article](#write-article)
- Components
  - [Blogger Personal Information](#blogger-personal-information)
  - [Social Media](#social-media)
  - [Home Display Information](#home-display-information)
  - [Navigation bar](#navigation-bar)
  - [Page Break](#page-break)
  - [Code Highlighting Theme](#code-highlighting-theme)
  - [Friendly Link](#friendly-link)
  - [Footer](#footer)
- Third-party services
  - [Switch of comment system](#switch-of-comment-system)
  - [Intersection of article sharing](#intersection-of-article-sharing)
  - [Configuration of website traffic tracking](#configuration-of-website-traffic-tracking)



> Generally modify the `_config.yml` file, you can easily build your own personal blog.
>
> Part of the configuration, the default is already configured, you only need to modify the content listed below to complete the construction.



#### About blog

```yaml
---
# Site settings configuration site
title: 'your awesome title'
description: 'your web description'
keywords: 'your web keywords, another keywords'
url: 'https://abc.github.io' # your host
---
```

`title`: display content for the title tag of the page

`description`: Introduction to the website

`keywords`: keywords of the website

`url`: website domain name



#### Write an article

The blog deploys the article page by parsing the `markdown` file, so users only need to write a markdown to write an article and place it in the `_post` folder under the root directory of the site. The specific markdown grammar can be searched and studied online, or use the markdown editor to write. Recommend a markdown editor: [typora](https://www.typora.io). Support windows, mac OSX, Linux.

About the article YAML header information:

```yaml
layout: post
title: "post title"
subtitle: 'post subtitle'
date: 2018-05-29 08:44:13
tags: html js css
description: ''
color: 'rgb (154,133,255)'
cover: ''
```

__About color:__

The color here is used for the background color of the top position of the post page. As shown in the picture above, it shows `rgb (154,133,255)` color.

For color writing, if the color code is `rgb` or `rgba` or `English word`, it can be wrapped without quotes, but if the color code is `# 123456` this hexadecimal code, it must wrap with quotes. Therefore, in use, it is recommended to use quotes consistently to avoid misuse.

Of course, if you forget to write the value of color when writing an article, the theme will fill in the `rgb (154,133,255)` color for you by default. This is the color shown in the picture above. Although it does not affect the display of the page, if you want more colorful page effects, it is recommended to write a color value in the header information of each article.

__About cover:__

Here you need to fill in the `url` of a certain picture. The `url` value can be an online picture or a picture in the blog directory. The key is to write it correctly. This picture is used to display in the blog list under the home page, as shown below.

![5](/screenshot/5.png)


#### Blogger personal information

```yaml
# Blogger
author: true
name: 'your awesome name'
NickName: 'your awesome nickname'
webtitle: 'your awesome webtitle'
bio: 'your awesome bio'
about: true
aboutyou: 'your introduction'
portraits: '/assets/profile.jpeg' # your portraits image file path
```

This part is displayed on the `About Bloggers’` page, along with `Social Media` in the image below.

![6](/screenshot/6.png)

About author:

Use `true` or `false` to open or close the blogger information card. The default is true and the best experience is also true.

About about:

Use `true` or `false` to open or close the blogger's information, that is, whether to display the aboutyou part of the information. The default is true, this part needs to enter relevant information in aboutyou, support to fill in html code here.


#### social media

```yaml
# SNS
SNS: true
SNS-icon: # ['Facebook', 'weibo', 'qq', 'github', 'Dribbble', 'Twitter', 'instagram', 'weixin', 'Codepen']
  mail: 'mailto: abc@gmail.com'
  weixin: '' # Your WeChat QR code storage address
  qq: '' # Your qq QR code storage address or http://wpa.qq.com/msgrd?v=3&uin='your QQ number '& site = qq & menu = yes
  github: ''
  Codepen: ''
  weibo: ''
  instagram: ''
  Twitter: ''
  Dribbble: ''
  Facebook: ''
  Google: ''
  zhihu: ''
  juejin: ''
  twitch: ''
```

~~ There are 13 social media icons configured in the theme. Just fill in your personal homepage link after the name of the social account that needs to be opened. If you do n’t need to open it, use `#` to comment on this line. One line is enough. Similarly, if you need to change the arrangement of each icon, you only need to change the order of their rows. ~~

After `SNS`, fill in` true` or `false` to open or close this part.

2018/09/28 update:

![7](/screenshot/sns-icon.png)

-Update social icons to online addresses for easy management and modification.
-Add ** Codepen ** icon
-Modify the original circular icon to an irregular icon



#### Home page display information

```yaml
---
layout: default
title: your awesome title
page-title: awesome page-title.
home-title: awesome home-title.
description: description
---
```

This part is located on the `index.html` page. Modify `title`, `page-title`, `home-title`, and `description` to the information you want. The default configuration display is shown below.

![7](/screenshot/7.png)


#### Navigation Bar

```yaml
# nav Chinese character space
nav: # The best experience is six labels, and each label should not exceed 4 Chinese characters
   Home: '/'
   Tag: '/tags.html'
   Timeline: '/timeline.html'
   About bloggers: '/about.html'
   Friendly link: '/friendLink.html'
```

All of them are turned on by default. Of course, if you want to add them yourself, fill in the bottom according to the format. Of course, the page display order is related to the position of each line.


#### Pagination

```yaml
# Pagination
paginate: 2
paginatepath: ['page: num']
```

With a personal hobby, fill in the above figures how many articles you need to show up to blog on the home page.

Local deployment requires the use of `gem install jekyll-paginate` or `sudo gem install jekyll-paginate` to install Jekyll ’s paging plugin.



#### Code highlighting theme

```yaml
# Code highlighting using rouge
highlighter: rouge
# Code highlighting theme uses pygments theme: autumn \ default \ emacs \ friendly \ manni \ murphy \ pastie \ perldoc \ tango Choose any theme name you like and fill it in the single quotes below
pygmentsTheme: 'default'
```

Code highlighting uses the default highlight engine `rouge` after jekyll3.0. Regarding the theme, just fill in the name of the theme you like after `pygmentsTheme`. There are 9 themes to choose from, the theme name see above.

Code highlighting:

~~~markdown
```css
*
{
 margin: 0;
 padding: 0;
}
```
~~~

2018/09/28 update:

![7](/screenshot/blog code highlighting example.png)

The above picture is the ** code highlighting example picture **, only using html as a reference example, other codes refer to the above picture, or switch to the test to choose your favorite code highlighting theme



#### Links

```yaml
# Links
friends:
  jekyll: 'https://www.jekyll.com.cn/'
```

Fill in the format, the sorting is related to the sorting in the configuration file.



#### footer

```yaml
# since
footer:
  since: 2018
```

Used for footer display time.



#### Comment system switching

```yaml
# Comment Best experience Choose between disqus, livere and Gitment
# disqus comments
disqus: false
disqus_url: '' # https://abc.disqus.com/embed.js
# Labri comment
livere: true
livere_uid: 'MTAyMC8zNDI2OS8xMDgwNg ==' # MTAyMC8zNDI2OS8xMDgwNg ==
# Gitment comment OAuth Application
Gitment: false
Gitment_owner: '' # github username
Gitment_repo: '' # The warehouse name of the github blog
client_id: '' # client_id obtained after registering OAuth Application
client_secret: '' # client_secret obtained after registering OAuth Application
```

By application of a third-party review is to obtain relevant information to fill in the configuration file.

There are three comments to choose from. Use `true` or `false` to turn on or off a comment system. Can open multiple or even full open. Of course, the best experience, just open one.

The style of the three comments is as follows:

dispus:

![8](/screenshot/8.png)

Labril:

![9](/screenshot/9.png)

Gitment comments:

![10](/screenshot/10.png)

The three comments each have their own advantages and disadvantages. Out of consideration for the display style and the network environment in Mainland China, the theme is turned on by default. Of course, you need to fill in the relevant `livere_uid` code.


#### Road to article sharing

```yaml
# Share: weibo, qq, wechat, tencent, douban, qzone, linkedin, diandian, facebook, twitter, google
social-share: true
social-share-items: ['qq', 'wechat', 'weibo', 'twitter', 'facebook']
```

In order to make the article more convenient to share, a third-party sharing plugin [Share.js](http://overtrue.github.io/share.js/) is used to support one-click sharing to Weibo, QQ space, and QQ friends , WeChat, Tencent Weibo, Douban, Facebook, Twitter, Linkedin, Google+, Diandian and other social networking sites.

Only need to fill in the relevant name after `social-share-items`, the display order is related to the writing order.



#### Website traffic tracking configuration

```yaml
# Baidu statistics Fill in your own url code in baidu-url
baidu: true
baidu-url: ''
# Google Analytics Fill in your tracking ID obtained in Google Analytics in google-ID
google: false
google-ID: ''
```

Fill in the relevant information obtained by registration in `baidu-url` and `google-ID` respectively. Use `true` or `false` to turn them on or off. Due to the Internet environment in mainland China, Baidu statistics is turned on by default, but of course more can be turned on.



### License

HardCandy-Jekyll is licensed under [MIT](https://github.com/xukimseven/HardCandy-Jekyll/blob/master/LICENSE).



### Seeking Star Seeking attention

See here, if you like my little project, you are welcome to download and use him, and please give me a little star 😜, thank you.