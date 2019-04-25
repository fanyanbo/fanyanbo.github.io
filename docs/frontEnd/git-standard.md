
# GIT开发规范

## 设置和初始化工作：

全局编码设置：
统一采用utf-8，  请检查自己的编码，编码不一致可能会导致没实际上没更改的文档也会显示为更新。
查看设置：git config -l

**设置编码：**

```shell
git config --global gui.encoding utf-8
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
```

**设置用户名和email：**

```shell
git config --global user.name admin(自己的gitlab用户名）
git config --global user.email admin@inspiry.cn
```

## 开发流程

### 项目分支

一般来说，互联网项目有线上/预上线分支（master），测试分支（stable），开发分支（dev）等．

保证不同的分支做不同的事情，防止分支污染。

1. 线上/预上线分支（**master**）：是预上线环境和线上环境的分支，以这个分支为准，其他分支都是以这个分支为基础拉取。
2. 测试分支（**stable**）：测试环境分支，是给测试团队测试使用，如果有些功能在本地及开发不容易测试，开发人员可以测试分支进行自测。
3. 开发分支（**dev**）：开发人员自测。

### 开发流程

步骤：

1. 第一步，新需求或BUG，从上线分支拉取一个开发分支。
2. 第二步，在开发分支进行开发，自测。
3. 第三步，合并到测试分支，通知QA测试。
4. 第四步，如果通过测试，合并到master，然后继续测试。如果不通过测试，进入第二步。
5. 第五步，如果预上线测试通过，将预上线tag 直接部署到线上。如果不通过测试，进入第二步。
6. 第六步，上线，然后线上测试。如果通过测试，那么这个需求开发就结束了。如果没有通过测试，就回归上一版本，然后进入第二步。

![img](https://s1.ax1x.com/2018/02/11/9GhJYR.png)

当遇到一个新需求或者更改BUG时，必须重新建立分支

```shell
# 获取主干最新代码
git checkout master
git pull

# 新建一个开发分支myfeature并切换到这个分支
git checkout -b myfeature
```

当修改完毕后，提交分支

```shell
# 查看发生变动的文件
git status

# 保存所有变化（包括新建、修改和删除）
git add .

# 撰写提交信息
git commit -m "修改样式错位"
```

将本地分支推送至远程仓库  提交后合并到stable 提测

```shell
git push

# 切换到stable分支 合并
git checkout stable
git merge myfeature
```

如果通过测试则合并到master，去公司的git地址创建合并请求，等待master管理员合并
未通过测试，则继续修改重新测试

## 命令汇总

git config配置本地仓库

常用git config --global user.name、git config --global user.email

git config --list查看配置详情

git init 初始一个仓库，添加--bare可以初始化一个共享（裸）仓库

git status 可以查看当前仓库的状态

git add&quot;文件&quot; 将工作区中的文件添加到暂存区中，其中file可是一个单独的文件，也可以是一个目录、&quot;\*&quot;、-A

git commit -m “备注信息&#39; 将暂存区的文件，提交到本地仓库

git log 可以查看本地仓库的提交历史

git branch查看分支

git branch&quot;分支名称&quot; 创建一个新的分支

git checkout&quot;分支名称&quot; 切换分支

git checkout -b deeveloper 新建并切到developer分支

git merge&quot;分支名称&quot; 合并分支

git branch -d &quot;分支名称&quot; 删除分支

git clone &quot;仓库地址&quot;获取已有仓库的副本

git push origin &quot;本地分支名称:远程分支名称&quot;将本地分支推送至远程仓库，

git push origin hotfix（通常的写法）相当于

git push origin hotfix:hotfix

git push origin hotfix:newfeature

本地仓库分支名称和远程仓库分支名称一样的情况下可以简写成一个，即git push &quot;仓库地址&quot; &quot;分支名称&quot;，如果远程仓库没有对应分支，将会自动创建

git remote add &quot;主机名称&quot; &quot;远程仓库地址&quot;添加远程主机，即给远程主机起个别名，方便使用

git remote 可以查看已添加的远程主机

git remote show &quot;主机名称&quot;可以查看远程主机的信息

## GitLib权限管理

GitLib有五种身份权限，分别是：

> - Owner 项目所有者，拥有所有的操作权限
> - Master 项目的管理者，除更改、删除项目元信息外其它操作均可
> - Developer 项目的开发人员，做一些开发工作，对受保护内容无权限
> - Reporter 项目的报告者，只有项目的读权限，可以创建代码片断
> - Guest 项目的游客，只能提交问题和评论内容

具体参见GitLab权限，为项目添加成员时可指定成员的身份权限

## Git高级

熟悉掌握以上操作，基本上是可以满足日常开的需要的，但是在解决一些特殊问题时，就又需要我们能够掌握更多的命令。

### git ignore忽略文件

在项目根目录下创建一个.gitignore文件，可以将不希望提交的罗列在这个文件里，如项目的配置文件、node\_modules等

https://github.com/github/gitignore

### 比较差异

当内容被修改，我们无法确定修改哪些内容时，可以通过git diff来进行差异比较。

git difftool 比较的是工作区和暂存的差异

git difftool &quot;SHA&quot;比较与特定提交的差异

git difftool &quot;SHA&quot;&quot;SHA&quot;比较某两次提交的差异

git difftool 分支名称 比较与某个分支的差异

**回滚（撤销）操作**

HEAD 默认指向当前分支的&quot;末端&quot;，即最后的一次提交，但是我们通过git reset 可以改变HEAD的指向。

**稍微复杂一些，理解就好**

1、git reset

--hard 工作区会变、历史(HEAD)会变， 暂存区也变

--soft 只会变历史(HEAD)

--mixed（默认是这个选项）历史(HEAD)会变、暂存区也变，工作区不变

2、git checkout

git checkout SHA -- &quot;某个文件&quot;，代表只是从SHA这个版中取出特定的文件，

和git reset 是有区别的，reset 重写了历史，checkout 则没有。

### 更新仓库

在项目开发过程中，经常性的会遇到远程（共享）仓库和本地仓库不一致，我们可以通过git fetch 命令来更新本地仓库，使本地仓库和远程（共享）仓库保持一致。

git fetch  &quot;远程主机&quot;

或者

git fetch &quot;远程主机&quot; &quot;分支名称&quot;

我们要注意的是，利用git fetch 获取的更新会保存在本地仓库中，但是并没有体现到我们的工作目录中，需要我们再次利用git merge来将对应的分支合并（融合）到特定分支。如下

git pull origin 某个分支， 上操作相当于下面两步

git fetch

git merge origin/某个分支

**查看远程主机上总共有多少个分支**

git branch -a 便可以查看所有(本地+远程仓库)分支了

### 其它

删除远程分支git push origin --delete 分支名称

删除远程分支git push origin :分支名称
