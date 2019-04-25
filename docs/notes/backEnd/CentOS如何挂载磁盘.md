
# Linux硬盘分区，挂载，格式化，加到开机启动项

0、创建**挂载**目录

```shell
mkdir -p /www
```

1、确认是否有没有分区的磁盘,如下图，没有分区的磁盘是 /dev/xvdb ,在您的服务器中可能是 /dev/vdb 请注意按实际名称修改

```shell
fdisk -l
```

![](https://wx1.sinaimg.cn/large/99a97bd9ly1fqrcphwawyj20gh0hwt9p.jpg)

2、为磁盘分区，若已分区的，请跳过！

```shell
fdisk /dev/xvdb
```

![](https://wx1.sinaimg.cn/large/99a97bd9ly1fqrcpk7vu2j20hi00iq2p.jpg)

3、输入n开始创建分区

![1476467888753.png](https://wx3.sinaimg.cn/large/99a97bd9ly1fqrcpek1ssj20he039t8n.jpg)

4、输入p创建主分区

![14764678911902.png](https://wx4.sinaimg.cn/large/99a97bd9ly1fqrcpoc1nmj20ht02ht8j.jpg)

5、选择分区号，这里输入1

![14764678974383.png](https://wx2.sinaimg.cn/large/99a97bd9ly1fqrcpr6puyj20hs00g741.jpg)

6、输入分区开始位置，直接回车

![14764679066906.png](https://wx4.sinaimg.cn/large/99a97bd9ly1fqrcq2agptj20hs00ijr5.jpg)

7、输入分区结束位置，直接回车

![14764679101188.png](https://wx4.sinaimg.cn/large/99a97bd9ly1fqrcq4sz1sj20hu00z3yb.jpg)

8、输入wq 保存退出

![14764679123835.png](https://wx4.sinaimg.cn/large/99a97bd9ly1fqrcqaauwwj20hp00pdfl.jpg)

9、检查是否分区成功

```shell
fdisk -l
```

![14764679159426.png](https://wx1.sinaimg.cn/large/99a97bd9ly1fqrcqfjbfkj20gb0hfgmm.jpg)

10、格式化分区，这里请输入你看到的磁盘加分区号，如下图，已格式化过的，请跳过

```shell
mkfs.ext4 /dev/xvdb1
# (linux老的磁盘分区用的是 ext2 和 ext3  ，现在最新的是 ext4)
```

![14764679185233.png](https://wx4.sinaimg.cn/large/99a97bd9ly1fqrcqjvszxj20hg00k0si.jpg)

![14764679237879.png](https://wx3.sinaimg.cn/large/99a97bd9ly1fqrcqv0jsqj20hk0apaak.jpg)

11、将分区挂载信息添加到开机启动挂载

```shell
echo "/dev/xvdb1 /www ext4 defaults 0 0" >> /etc/fstab

# 也可以直接修改/etc/fstab文件，在最后加一段
# /dev/xvdb1 /www ext4 defaults 0 0
```
![14764679262526.png](https://wx2.sinaimg.cn/large/99a97bd9ly1fqrcqy2sq4j20kq016a9x.jpg)
> 格式说明：
>
> 第1列是需要挂载的文件系统或存储设备，/dev/sdb1代表哪个分区 
>
> 第2列是挂载点
>
> 第3列指定文件系统或分区的类型，ext4是该分区的格式
>
> 第4列为挂载选项，详细参考manmount. ，defaults是挂载时所要设定的参数(只读，读写，启用quota等)，输入defaults包括的参数有(rw、dev、exec、auto、nouser、async) ，
>
> 第5列为dump选项，设置是否让备份程序dump备份文件系统，0为忽略，1为备份。
>
> 第6列为fsck选项，告诉fsck程序以什么顺序检查文件系统，（2是开机时检查的顺序），是boot系统文件就为1，其他文件系统都为2，如不要检查就为0



12、重新挂载所有分区

```shell
mount -a
```

![14764679301321.png](https://wx4.sinaimg.cn/large/99a97bd9ly1fqrcr2pjf9j20mg00nmwx.jpg)

13、检查是否挂载成功

```she
df
```

![14764679337124.png](https://wx2.sinaimg.cn/large/99a97bd9ly1fqrcr6q5ruj20oh03nglo.jpg)
