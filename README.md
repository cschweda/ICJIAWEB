# Basic installation:

The ICJIA public site is built on [Statamic version 1.x](https://v1.statamic.com/).

##More information on Statamic v1.x:

- https://v1.statamic.com/

<strike>PHP 5.6 is required -- not 7.x.</strike>
**PHP 7.1 is required**



Information on downgrading to PHP 5.6:
-[http://askubuntu.com/questions/761713/how-can-i-downgrade-from-php-7-to-php-5-6-on-ubuntu-16-04](http://askubuntu.com/questions/761713/how-can-i-downgrade-from-php-7-to-php-5-6-on-ubuntu-16-04)

## Clone repository

```
git clone https://github.com/ICJIA/icjia-public-website.git
```

## Run Statamic server check:

```
http://localhost/Check/check.php
```

**Make sure ```mod_rewrite``` is installed.**

## Install Grunt:

```
npm install -g grunt-cli
```

## Install dependencies

In  ```_themes/icjia/```:

```
npm install
```

## Grunt tasks:

```
# Build all sites (scss/less, concat, watch)

grunt

# Build all sites for deployment (scss/less, concat, uglify, watch)

grunt deploy

```

# Notes on running Windows Server 2012R2/IIS 8.5:

- Use Microsoft's ```Web Platform Installer``` to install PHP 7.1
- Clone Github repo: ```git clone https://github.com/ICJIA/icjia-public-website.git```
- Update permissions on ```/admin```
- Install ColdFusion (for legacy sites).
- Install legacy databases via ODBC DataSoures (32-bit)
- Use ColdFusion administrator -- ```http://127.0.0.1/CFIDE/administrator/index.cfm``` -- to install databases in ColdFusion.

# Notes on running Ubuntu 16.10/Apache2.2:

Clone site into ```/var/www/```:

```
git clone https://github.com/ICJIA/icjia-public-website.git
```
Then:

```
cd /etc/apache2/sites-available/
sudo nano 000-default.conf
```

Replace default ```html``` site:

```
  ServerAdmin webmaster@localhost
  DocumentRoot /var/www/icjia-public-website
  ```

Install ```mod_rewrite```:

```
a2enmod rewrite
```

In ```/etc/apache2/```:

```
sudo nano apache2.conf
```

Locate:

```
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
```

Change to:

```
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>
```

Restart Apache:

```
service apache2 restart
```

Run Statamic server check:

```
http://localhost/Check/check.php
```

Adding SFTP to Laravel Forge provisioned server:

- [https://murze.be/2016/03/let-your-clients-use-sftp-on-a-forge-provisioned-server/] (https://murze.be/2016/03/let-your-clients-use-sftp-on-a-forge-provisioned-server/)

- [https://debian-administration.org/article/590/OpenSSH_SFTP_chroot_with_ChrootDirectory] (https://debian-administration.org/article/590/OpenSSH_SFTP_chroot_with_ChrootDirectory)

- [http://askubuntu.com/questions/143700/granting-a-sftp-user-access-to-a-var-www-directory] (http://askubuntu.com/questions/143700/granting-a-sftp-user-access-to-a-var-www-directory)

# Notes on Laravel Forge deployment (to Digital Ocean Ubuntu droplet)

##Admin not found error fix under Nginx

Edit Nginx config:

```
location / {
       rewrite ^/admin.php.*$ /admin.php;
       try_files $uri $uri/ /index.php?$query_string;
   }
```

[https://lodge.statamic.com/questions/1805-nginxconf-for-use-on-forge](https://lodge.statamic.com/questions/1805-nginxconf-for-use-on-forge)
