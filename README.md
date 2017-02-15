# Installation

Needs PHP 5.6. Not 7.x.

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

# Running Ubuntu 16.10/Apache2:

Clone site into ```/var/www/```.

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
