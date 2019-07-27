# Guide

## 预备知识 markdown

- [初识Markdown](https://www.jianshu.com/p/dde741c16b09)
- [在线编辑预览](https://www.zybuluo.com/mdeditor)
- [更多Markdown](https://markdown-it.github.io/)
- [Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)

## 图床

所有的图片可以传到这里[https://sm.ms](https://sm.ms)，也请放在images文件夹中一份，作为备份。

### 预备知识 html

```
<h1>这是一号标题，h1-h5可以变换成1-5号标题</h1>
<p>这是一个段落，请勿使用 回车/换行 控制段落之间的间距。系统会自动调整！</p>
<a href="https://cn.bing.com">这是一个链接到bing的网址，点我打开</a>
<img src="https://cn.bing.com/tmp.jpg" alt="我是个图片，正常加载后，网页中你是看不到这句话的" />

```

### 上面对应的markdown

```
# 这是一号标题， 两个##是2号标题，依次类推

这是一个段落，段落前后，请使用回车来标识！

**这是加粗**

<u>这是下划线</u>

[这是一个链接到bing的网址，点我打开,注意中括号和小括号必需为英文输入法](https://cn.bing.com)

![我是个图片，正常加载后，网页中你是看不到这句话的](https://cdn.wechat.edu.pl/images/2019/190715_01.jpg)
```

### 上面对应的markdown在网页中显示效果！

#### 这是4号标题， 4个####是4号标题，依次类推

这是一个段落，段落前后，请使用回车来标识！

**这是加粗**

<u>这是下划线</u>

[这是一个链接到bing的网址，点我打开,注意中括号和小括号必需为英文输入法](https://cn.bing.com)

![我是个图片，如果图裂了，你能看到我](https://cdn.wechat.edu.pl/images/2019/190715_01.jpg)



## 开始你的写作

### 方式一，在线模式（不推荐）

> 在github上直接创建markdown文件

![我是个图片，如果图裂了，你能看到我](https://cdn.wechat.edu.pl/other/simai_online_editor.gif)

#### 写作目录位置

>参见下面目录结构描述

#### 目录结构概览
<details>
<summary>点击查看文件树</summary>
<pre><code>.
├── docs
│   ├── guide  //这里是您正看的本页面内容
│   ├── images //图片尽量不要放在这里，放到cdn/onedrive上去
│   ├── node   //这是旧网址迁移过来的，不要动！
│   │   ├── 12122
│   │   ├── 12123
│   │   └── .....
│   ├── old  //这是旧网址首页的全部索引，对于菜单中的【旧版索引】
│   ├── recently //这个是最近更新/最新动态
│   ├── 信仰探索  //接下来的3个大分类，就是您写作的主要目录
│   │   ├── 上帝与耶稣
│   │   ├── 人类与未来
│   │   ├── 信主的见证
│   │   ├── 圣经与科学
│   │   ├── 神学的研究
│   │   ├── X举个例子X       //这里您可以创建新的文件夹作为一个大分类
│   │   │ 	├──  README.md  //每个大分类地下可以创建一个README.md作为索引
│   │   │ 	├── 20190715.md //可以用汉字或日期新建md文件，进行写作
│   │   │   └── 新文章标题.md //索引可以添加到本分类下的README.md，也可以添加到recently的README.md中
│   │   ├── 读经的疑难
│   │   ├── 资源的分享
│   │   ├── 错误的信仰
│   │   └── README.md 
│   ├── 思麦与我
│   │   ├── 关于思麦
│   │   ├── 思麦动态
│   │   ├── 思麦教导
│   │   ├── 思麦管理
│   │   ├── 思麦见证
│   │   ├── 认识教会
│   │   └── README.md 
│   └── 生活疑难
│   │   ├── 亲子教育
│   │   ├── 人生苦难
│   │   ├── 人际关系
│   │   ├── 其他难题
│   │   ├── 单身恋爱
│   │   ├── 婚姻家庭
│   │   ├── 学生时代
│   │   ├── 情绪管理
│   │   ├── 职场财富
│   │   └── README.md 
│   ├── audio  //音频索引列表，不显示！上传添加mp3和文章后，但必需要更新 list.md
│   │   ├── list.md //用于以后的微信音频系统
│   │   └── README.md //可以不管！（每个文件夹都会有一个README.md作为浏览本页路径的默认页面，没有的话会显示404）
└── .....  // 其他根目录下的文件，千万不能改动！
</code></pre>
</details>

#### 添加到索引

### 方式二，本地编辑
> 这里举例子创建一个最近发布文章索引，便于用户查看。

0. 下载安装Dockder
	- [window](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)
	- [mac](https://download.docker.com/mac/stable/Docker.dmg)
	- Register Mirrors加速
		- https://reg-mirror.qiniu.com
		- https://t28b735l.mirror.aliyuncs.com
1. 下载安装GitHub Desktop
	- [windows](https://central.github.com/deployments/desktop/desktop/latest/win32)
	- [mac](https://central.github.com/deployments/desktop/desktop/latest/darwin)
2. 下载网址代码
	- ```git clone https://simai2019:password@github.com/simai2019/vuepress.git```
	- 注意 添加 .env 文件
		``` 
		USERNAME=simai2019
		PASSWORD=xxx
		REPO=github.com/simai2019/simai2019.github.io.git
		DOMAIN=www.wechat.edu.pl
		```
3. 创建一个目录 recently在docs下
4. 创建一个README.md
5. 提交代码改动后会自动发布，需要等待约10分钟左右
> 注意，不要频繁提交改动

动画演示：
![我是个图片，如果图裂了，你能看到我](https://cdn.wechat.edu.pl/other/simai_local_editor.gif)


## 工具介绍

- 这是一个列表,前面一个减号和空格！
- [https://vuepress.vuejs.org/zh/guide](https://vuepress.vuejs.org/zh/guide)
- [https://zeit.co/examples/vuepress/](https://zeit.co/examples/vuepress/)
- [https://github.com/myles/awesome-static-generators](https://zeit.co/examples/vuepress/)


# More

感谢您的关注，这里是最新动态！

- [这是一个最新文章列表的链接，您可以自由增删](https://www.wechat.edu.pl/recently/)
	- [https://www.wechat.edu.pl/recently/](https://www.wechat.edu.pl/recently/)
- [每添加一个文章，可以在这里增加一个链接](https://www.wechat.edu.pl/思麦与我/思麦动态/onlinedemo.html)
	- [https://www.wechat.edu.pl/思麦与我/思麦动态/onlinedemo.html](https://www.wechat.edu.pl/思麦与我/思麦动态/onlinedemo.html)
- [可以（最好）使用相对链接,可以使用中文](/思麦与我/思麦动态/onlinedemo.html)
	- [/思麦与我/思麦动态/onlinedemo.html](/思麦与我/思麦动态/onlinedemo.html)
- [非目录加.html](/思麦与我/思麦动态/onlinedemo.html)
	- [/思麦与我/思麦动态/onlinedemo.html](/思麦与我/思麦动态/onlinedemo.html)
- [目录里都放置README.md/index.md,链接时不用.html,最后一个/不能省略](/recently/)
	- [/recently/](/recently/)
	- 我是一个没有链接的子列表
-  [这里可以添加其他的新增文章](/404)

