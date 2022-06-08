# Docker仓库

## 说明

以现实为例子：docker 仓库相当于一个图书馆，镜像就是图书馆里面的书籍；

```
docker pull   图书馆借书
docker tag    给书取个名字
docker commit 写了一本书
docker push   把图书馆出版到图书馆
```

仓库也分为私有仓库和公有仓库，私有仓库需要借书证(token)的图书馆。公有仓库所有人都可以借书的图书馆。

## 仓库搭建

docker仓库有很多种，以下三种搭建过



### Docker Hub 仓库

docker官方仓库，个人开发者免费(需要注册登录)，
/images/CoursePhoto
<img src="/images/CoursePhoto/2022-06-07 23.28.00.png" alt="截屏2022-06-07 23.28.00" style="zoom:30%;" />

优点：

只要安装了docker就可以访问拉取镜像。

可以创建无限个公开仓库

缺点：

个人开发者只能创建一个私有仓库



公共仓库



1、开始搭建

<img src="/Users/yang/Pictures/Screenshot/截屏2022-06-07 23.41.37.png" alt="截屏2022-06-07 23.41.37" title=" style=&quot;zoom:30%;" style="zoom:30%;" />





<img src="/images/CoursePhoto/image-20220607235934516.png" alt="image-20220607235934516" title=" style=&quot;zoom:20%;" style="zoom:40%;" />



2、以docker101tutorial镜像为例

```
➜  ~ docker images
REPOSITORY                                    TAG       IMAGE ID       CREATED        SIZE
docker101tutorial                             latest    561f00fe98e2   5 months ago   27.4MB
jenkins/jenkins                               latest    6a912ff7c6e8   5 months ago   432MB
```

3、打标签

```
docker tag 镜像名  dockerhub登陆名+公共仓库名
docker tag docker101tutorial yangxin96/hbxx

➜  ~ docker images
REPOSITORY                                    TAG       IMAGE ID       CREATED        SIZE
docker101tutorial                             latest    561f00fe98e2   5 months ago   27.4MB
yangxin96/hbxx                        			  latest    561f00fe98e2   5 months ago   27.4MB
jenkins/jenkins                               latest    6a912ff7c6e8   5 months ago   432MB
```

4、上传仓库，

```
docker push 镜像名:版本号  ，不写默认latest最新版
docker push yangxin96/hbxx
```

5、拉取镜像

```
docker pull yangxin96/hbxx
```

私有仓库搭建

创建仓库的时候选择私有private就行，其他步骤和公有一样。




::: tip 注意
例：A服务器拉取私有镜像，A服务器docker必须要登陆私有镜像的dockerhub账号。
:::



### 阿里云容器镜像服务(ACR) 

[阿里云容器镜像服务地址](https://cr.console.aliyun.com/cn-shanghai/instances)

1、使用前提：注册阿里云账号

2、个人版面向个人开发者，公测限额免费使。三个命名空间可以存储300个镜像





<img src="/images/CoursePhoto/image-20220608013933042.png" alt="image-20220608013933042" style="zoom:50%;" /><img src="/images/CoursePhoto/image-20220608014051925.png" alt="image-20220608014051925" style="zoom:40%;" />

<img src="/images/CoursePhoto/image-20220608014231760.png" alt="image-20220608014231760" style="zoom: 40%;" />

3、

命名空间： 相当于一个公司名称

仓库：公司里面的部门



4、创建仓库：

<img src="/images/CoursePhoto/image-20220608020325050.png" alt="image-20220608020325050" style="zoom: 25%;" /><img src="/images/CoursePhoto/image-20220608020421676.png" alt="image-20220608020421676" style="zoom: 25%;" />

5、示例

使用"docker tag"命令重命名镜像，并将它通过专有网络地址推送至Registry。

```
$ docker images
REPOSITORY         								    TAG           IMAGE ID            CREATED 						VIRTUALSIZE
registry.aliyuncs.com/acs/agent       0.7-dfb6816   37bb9c63c8b2        7 days ago          37.89 MB
$ docker tag 37bb9c63c8b2 registry-vpc.cn-hangzhou.aliyuncs.com/acs/agent:0.7-dfb6816
```

使用 "docker push" 命令将该镜像推送至远程。

```
$ docker push registry-vpc.cn-hangzhou.aliyuncs.com/acs/agent:0.7-dfb6816
```

6、具体操作步骤，查看仓库里面的操作指南

<img src="/images/CoursePhoto/image-20220608022332045.png" alt="image-20220608022332045" style="zoom:33%;" />



7、下载私有仓库的镜像docker一定要登陆阿里云（具体查看操作指南）



8、容器镜像加速

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://5kcinc88.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```





### 私有仓库registry


::: tip 注意
docker部署在 43.138.27.208 服务器上
:::

1、拉取镜像registry

```
docker pull registry
```

2、部署registry镜像

```
docker run -itd -p 5000:5000 --name registry registry 
```

3、访问 43.138.27.208:5000/v2

<img src="/images/CoursePhoto/image-20220608024223199.png" alt="image-20220608024223199" style="zoom:50%;" />

4、打标签，以nginx:latest 为例

```
docker tag nginx:latest 43.138.27.208:5000/nginx:latest
```

5、上传到registry

```
docker push 43.138.27.208:5000/nginx:latest
```

6、拉取镜像

```
docker pull 43.138.27.208:5000/nginx:latest
[root@VM-16-2-centos ~]# docker pull 43.138.27.208:5000/ruoyi:2
2: Pulling from ruoyi
cd784148e348: Pull complete 
3651dac5ddfb: Pull complete 
37c42f367660: Pull complete 
3e60af130155: Pull complete 
Digest: sha256:926efc4b5a657028a856fa42a2bb25383ab55e995cd4a391d20df98c5bc6bdce
Status: Downloaded newer image for 43.138.27.208:5000/ruoyi:2
43.138.27.208:5000/ruoyi:2
[root@VM-16-2-centos ~]# docker images
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
43.138.27.208:5000/ruoyi   2                   ba15db9fadc3        20 hours ago        249MB
cym1102/nginxwebui         latest              02e2dd46c7a4        8 days ago          158MB
```



docker私有仓库服务器，默认是基于https传输的，所以我们需要在客户端43.138.27.208做相关设置，不使用https传输，

局域网可以不配置。



7、修改docker配置

43.138.27.208服务器添加registry私服地址

```
"insecure-registries":["43.138.27.208:5000"]
```

配置如下：

```
[root@VM-16-2-centos ~]# vi /etc/docker/daemon.json

 {
        "registry-mirrors": ["https://5kcinc88.mirror.aliyuncs.com"],
        "insecure-registries":["43.138.27.208:5000"]
}

sudo systemctl daemon-reload  刷新配置
sudo systemctl restart docker 重启docker

```

8、办理“借书证”，凭证

b服务器拉取43服务器私服镜像，就要进行上面配置。

```
[root@VM-34-centos ~]# vi /etc/docker/daemon.json
 {
        "insecure-registries":["43.138.27.208:5000"]
}

systemctl daemon-reload  刷新配置
systemctl restart docker 重启docker
```

