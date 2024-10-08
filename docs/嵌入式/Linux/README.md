# Linux虚拟机

使用VMware搭载Ubuntu LT(稳定版)系统。

## 网络配置

在设备管理器确定主机网络适配器名称。

点击右下角更改设置（如没用此选项则还原默认设置）。

选择“桥接模式”，若自动不行，则手动选择主机网络适配器。

## 共享文件夹配置

在主机中找到Unbuntu的系统文件夹，并创建sahre文件夹。

在虚拟机设置中启用共享文件夹选项，并选择share文件夹路径。



在虚拟机中安装VMware Tools，若虚拟机>>安装VMware Tools 为灰色，则需要挂载镜像文件(.iso)。

点击虚拟机>>设置>>CD/DVD（不是CD/DVD 2），然后在右侧的“连接”中选择“使用ISO映像文件”，再选择 VMware 目录中的 linux.iso 文件。打开虚拟机后就会有光盘文件。打开光盘文件，有一个压缩包，在终端中找到其路径，输入tar -vxf [压缩包文件名]解压命令。打开解压好的文件夹，运行其中的vmware-install.pl文件（使用命令./ [文件名]运行文件）。

虚拟机中的share文件夹在路径/mnt/hgfs/share/

## Neovim安装及配置

详情看[【全程讲解】Neovim从零配置成属于你的个人编辑器_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Td4y1578E/?spm_id_from=333.337.search-card.all.click&vd_source=ec2eb40b4d1f77474b3e3e23b5d67bcd)

配置文件库https://github.com/eggtoopain/Neovim-Configuration-Tutorial

### nvim键位

# Linux命令

## 文件目录管理

 Linux 的目录结构为树状结构，最顶级的目录为根目录 /。

其他目录通过挂载可以将它们添加到树中，通过解除挂载可以移除它们。

- 绝对路径：
  路径的写法，由根目录 / 写起，例如： /usr/share/doc 这个目录。

- 相对路径：
  路径的写法，不是由 / 写起，例如由 /usr/share/doc 要到 /usr/share/man 底下时，可以写成： cd ../man 这就是相对路径的写法。

常见的处理目录的命令：

- ls（英文全拼：list files）: 列出目录及文件名
- cd（英文全拼：change directory）：切换目录
- pwd（英文全拼：print work directory）：显示目前的目录
- mkdir（英文全拼：make directory）：创建一个新的目录
- rmdir（英文全拼：remove directory）：删除一个空的目录
- cp（英文全拼：copy file）: 复制文件或目录
- rm（英文全拼：remove）: 删除文件或目录
- mv（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称

你可以使用 *man [命令]* 来查看各个命令的使用文档，如 ：man cp。

### ls

- **-a ：**全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(all) 
- **-d ：**仅列出目录本身，而不是列出目录内的文件数据(directory)
- **-l ：**长数据串列出，包含文件的属性与权限等等数据；(list)

### cd

```
 cd [相对路径或绝对路径]
```

```
#使用 mkdir 命令创建 runoob 目录
[root@www ~]# mkdir runoob

#使用绝对路径切换到 runoob 目录
[root@www ~]# cd /root/runoob/

#使用相对路径切换到 runoob 目录
[root@www ~]# cd ./runoob/

# 表示回到自己的家目录，亦即是 /root 这个目录
[root@www runoob]# cd ~

# 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；
[root@www ~]# cd ..
```

cd .. 返回上一层目录

. 表示本层目录

### pwd

- **-P ：**显示出确实的路径，而非使用链接 (link) 路径。

### mkdir

- **-m ：**配置文件的权限喔！直接配置，不需要看默认权限 (umask) 的脸色～【强制配置】
- **-p ：**帮助你直接将所需要的目录(包含上一级目录)递归创建起来！【自行帮你创建多层目录】

### rmdir

- -p ：从该目录起，一次删除多级空目录

### cp

- **-a：**相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)
- **-d：**若来源档为链接档的属性(link file)，则复制链接档属性而非文件本身；
- **-f：**为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；
- **-i：**若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)
- **-l：**进行硬式链接(hard link)的链接档创建，而非复制文件本身；
- **-p：**连同文件的属性一起复制过去，而非使用默认属性(备份常用)；
- **-r：**递归持续复制，用於目录的复制行为；(常用)
- **-s：**复制成为符号链接档 (symbolic link)，亦即『捷径』文件；
- **-u：**若 destination 比 source 旧才升级 destination ！

### rm

- **-f ：**就是 force 的意思，忽略不存在的文件，不会出现警告信息；【强制删除】
- **-i ：**互动模式，在删除前会询问使用者是否动作
- **-r ：**递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！

### mv

- **-f ：**force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
- **-i ：**若目标文件 (destination) 已经存在时，就会询问是否覆盖！
- **-u ：**若目标文件已经存在，且 source 比较新，才会升级 (update)

查看文件的内容：

- cat 由第一行开始显示文件内容
- tac 从最后一行开始显示，可以看出 tac 是 cat 的倒着写！
- nl  显示的时候，顺道输出行号！
- more 一页一页的显示文件内容
- less 与 more 类似，但是比 more 更好的是，他可以往前翻页！
- head 只看头几行
- tail 只看尾巴几行

你可以使用 *man [命令]*来查看各个命令的使用文档，如 ：man cp。

### cat

- **-A ：**相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；
- **-b ：**列出行号，仅针对非空白行做行号显示，空白行不标行号！
- **-E ：**将结尾的断行字节 $ 显示出来；
- **-n ：**列印出行号，连同空白行也会有行号，与 -b 的选项不同；
- **-T ：**将 [tab] 按键以 ^I 显示出来；
- **-v ：**列出一些看不出来的特殊字符

### tac

tac 是 cat 的倒着写

### nl

- -b ：指定行号指定的方式，主要有两种：
  -b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)；
  -b t ：如果有空行，空的那一行不要列出行号(默认值)；

- -n ：列出行号表示的方法，主要有三种：
  -n ln ：行号在荧幕的最左方显示；
  -n rn ：行号在自己栏位的最右方显示，且不加 0 ；
  -n rz ：行号在自己栏位的最右方显示，且加 0 ；
- -w ：行号栏位的占用的位数。

### more

一页一页翻动

在 more 这个程序的运行过程中，你有几个按键可以按的：

- 空白键 (space)：代表向下翻一页；
- Enter     ：代表向下翻『一行』；
- /字串     ：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；
- :f      ：立刻显示出档名以及目前显示的行数；
- q       ：代表立刻离开 more ，不再显示该文件内容。
- b 或 [ctrl]-b ：代表往回翻页，不过这动作只对文件有用，对管线无用。

### less

less运行时可以输入的命令有：

- 空白键  ：向下翻动一页；
- [pagedown]：向下翻动一页；
- [pageup] ：向上翻动一页；
- /字串   ：向下搜寻『字串』的功能；
- ?字串   ：向上搜寻『字串』的功能；
- n     ：重复前一个搜寻 (与 / 或 ? 有关！)
- N     ：反向的重复前一个搜寻 (与 / 或 ? 有关！)
- q     ：离开 less 这个程序；

### head

- -n ：后面接数字，代表显示几行的意思(默认的情况中，显示前面 10 行)

### tail

- -n ：后面接数字，代表显示几行的意思
- -f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测

## 用户和用户组管理

Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。

用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。

每个用户账号都拥有一个唯一的用户名和各自的口令。

用户在登录时键入正确的用户名和口令后，就能够进入系统和自己的主目录。

实现用户账号的管理，要完成的工作主要有如下几个方面：

- 用户账号的添加、删除与修改。
- 用户口令的管理。
- 用户组的管理。

## 磁盘管理

Linux 磁盘管理好坏直接关系到整个系统的性能问题。

Linux 磁盘管理常用三个命令为 **df**、**du** 和 **fdisk**。

- **df**（英文全称：disk free）：列出文件系统的整体磁盘使用量
- **du**（英文全称：disk used）：检查磁盘空间使用量
- **fdisk**：用于磁盘分区

### df

### du

### fdisk

## apt命令

## yum命令

# Linux系统目录结构

# Linux系统启动过程