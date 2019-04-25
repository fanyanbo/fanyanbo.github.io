# nginx入门

- 官网：http://nginx.org/

## 开始

### 安装

- 参考文档：[How To Install Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)

安装：

```shell
sudo apt update
sudo apt install nginx
```

检查是否安装成功：

```shell
systemctl status nginx
```

```
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2017-11-19 22:57:17 CST; 5min ago
 Main PID: 1552 (nginx)
   CGroup: /system.slice/nginx.service
           ├─1552 nginx: master process /usr/sbin/nginx -g daemon on; master_process on
           └─1553 nginx: worker process

Nov 19 22:57:17 iZj6c8pmxwulw5gmj8eeggZ systemd[1]: Starting A high performance web server and a reverse
Nov 19 22:57:17 iZj6c8pmxwulw5gmj8eeggZ systemd[1]: nginx.service: Failed to read PID from file /run/ngin
Nov 19 22:57:17 iZj6c8pmxwulw5gmj8eeggZ systemd[1]: Started A high performance web server and a reverse p
lines 1-11/11 (END)
```

查看局域网 ip 地址：

```shell
ip addr show eth0

# 或者
ifconfig
```

查看公网 ip 地址：

```shell
curl -4 icanhazip.com
```

打开浏览器测试：

```
http://server_domain_or_IP
```

看到如下输出说明安装成功：

![welcome-to-nginx](https://assets.digitalocean.com/articles/nginx_1604/default_page.png)

### Manage the Nginx Process

停止：

```shell
sudo systemctl stop nginx
```

开启：

```shell
sudo systemctl start nginx
```

重启：

```shell
sudo systemctl restart nginx
```

如果只是简单的修改了配置文件，Nginx 可以在不断开连接的情况下使之生效：

```shell
sudo systemctl reload nginx
```

默认情况下，nginx 已经被配置为了开机自启，如果不需要可以禁止：

```shell
sudo systemctl disable nginx
```

重新启用开机自启：

```shell
sudo systemctl enable nginx
```

## VI 编辑器

> Visual Interface

Vi 是一个命令行下的编辑器，编辑文本文件的。

## 熟悉重要的文件和目录

### Content

> `/var/www/html`

真实的 Web 目录，类似于 Apache 中默认的 www，也可以在 nginx 配置文件中进行修改。

默认结构如下：

```
root@iZj6c8pmxwulw5gmj8eeggZ:~# tree /var/www/
/var/www/
└── html
    └── index.nginx-debian.html

1 directory, 1 file
```

### Server Configuration

- `/etc/nginx`: The nginx configuration directory. All of the Nginx configuration files reside here.
- `/etc/nginx/nginx.conf`: The main Nginx configuration file. This can be modified to make changes to the Nginx global configuration.
- `/etc/nginx/sites-available/`: The directory where per-site "server blocks" can be stored. Nginx will not use the configuration files found in this directory unless they are linked to the `sites-enabled`directory (see below). Typically, all server block configuration is done in this directory, and then enabled by linking to the other directory.
- `/etc/nginx/sites-enabled/`: The directory where enabled per-site "server blocks" are stored. Typically, these are created by linking to configuration files found in the `sites-available` directory.
- `/etc/nginx/snippets`: This directory contains configuration fragments that can be included elsewhere in the Nginx configuration. Potentially repeatable configuration segments are good candidates for refactoring into snippets.

### Server Logs

- `/var/log/nginx/access.log`: Every request to your web server is recorded in this log file unless Nginx is configured to do otherwise.
- `/var/log/nginx/error.log`: Any Nginx errors will be recorded in this log.

## 反向代理

- https://github.com/moonbingbing/openresty-best-practices/blob/master/ngx/reverse_proxy.md
- [简书 - WEB请求处理二：Nginx请求反向代理](http://www.jianshu.com/p/bed000e1830b)

### 配置

- https://serverfault.com/questions/379675/nginx-reverse-proxy-url-rewrite

在 `/etc/nginx/sites-available` 创建一个 `ghost.conf` 文件并写入以下内容

```
server {
    listen 80;
    # 将 server_name 的值改为你的域名
    server_name example.com;

    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:2368;
    }
}
```

把你的配置文件软链接到 `sites-enabled` 文件夹下

```shell
sudo ln -s /etc/nginx/sites-available/ghost.conf /etc/nginx/sites-enabled/ghost.conf
```

重新载入 nginx 使配置文件生效

```shell
sudo systemctl reload nginx
```

访问测试。







```
server {
        listen    80;

        ## 1. 用户访问 http://ip:port，则反向代理到 https://github.com
        location / {
            proxy_pass  https://github.com;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        }

        ## 2.用户访问 http://ip:port/README.md，则反向代理到
        ##   https://github.com/.../README.md
        location /README.md {
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass https://github.com/moonbingbing/openresty-best-practices/blob/master/README.md;
        }
    }
```

