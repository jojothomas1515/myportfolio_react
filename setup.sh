mkdir -p /var/www/myportfolio_react/build

npm install

npm run build

cp build/* /var/www/myportfolio_react/build -r

service nginx restart
