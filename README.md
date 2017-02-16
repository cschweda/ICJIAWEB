# Basic installation:

The ICJIA public site is built on [Statamic version 1.x](https://v1.statamic.com/).

**PHP 5.6 is required -- not 7.x.**

## Clone repository

```
git clone https://github.com/ICJIA/icjia-public-website.git
```

## Install Grunt:

```
npm install -g grunt-cli
```

## Install dependencies

In  ```_themes/icjia/```:

```
npm install
```

## Run Statamic server check:

```
http://<your-host>/check/check.php.
```

Make sure ```mod_rewrite``` is installed.

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

```a2enmod rewrite```

In ```/etc/apache2/```:

```sudo nano apache2.conf```

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

Check site:

```http://127.0.0.1/```

# More information on Statamic v1.x:

- https://v1.statamic.com/
