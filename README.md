# Basic installation:

The ICJIA public site is built on [Statamic version 1.x](https://v1.statamic.com/).

##More information on Statamic v1.x:

- https://v1.statamic.com/
- PHP 5.6+ is required.

## Clone repository:

```
git clone https://github.com/ICJIA/icjia-public-website.git
```

## Run Statamic server check:

```
http://localhost/Check/check.php
```

## Install Grunt:

```
npm install -g grunt-cli
```

## Install dependencies:

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

- Use Microsoft's ```Web Platform Installer``` to install PHP 7.1 (5.6 works, too.)
- Clone Github repo in web directory: ```git clone https://github.com/ICJIA/icjia-public-website.git```
- Update permissions on ```/admin```
- Install ColdFusion (for legacy sites).
- Install legacy databases via ODBC DataSoures (32-bit)
- Use ColdFusion administrator -- ```http://127.0.0.1/CFIDE/administrator/index.cfm``` -- to install databases in ColdFusion.
- For legacy Center of Excellence and SPAC sites, deploy ColdFusion config ```jakarta``` as a virtual directory in each site. Depending on where CF installed, something like: ```C:\ColdFusionxx\config\wsconfig\1```


# Notes on running Ubuntu 16.10/Apache2.2:

Information on downgrading to PHP 5.6:
-[http://askubuntu.com/questions/761713/how-can-i-downgrade-from-php-7-to-php-5-6-on-ubuntu-16-04](http://askubuntu.com/questions/761713/how-can-i-downgrade-from-php-7-to-php-5-6-on-ubuntu-16-04)


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

# Notes on Laravel Forge deployment:

## Admin not found error fix under Nginx

Edit Nginx config:

```
location / {
       rewrite ^/admin.php.*$ /admin.php;
       try_files $uri $uri/ /index.php?$query_string;
   }
```

https://lodge.statamic.com/questions/1805-nginxconf-for-use-on-forge

Adding SFTP to Laravel Forge provisioned server:

- https://murze.be/2016/03/let-your-clients-use-sftp-on-a-forge-provisioned-server/

- https://debian-administration.org/article/590/OpenSSH_SFTP_chroot_with_ChrootDirectory

- http://askubuntu.com/questions/143700/granting-a-sftp-user-access-to-a-var-www-directory
