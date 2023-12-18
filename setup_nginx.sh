cp myportfolio_react.conf /etc/nginx/sites-available/

ln -sf /etc/nginx/sites-available/myportfolio_react.conf /etc/nginx/sites-enabled/myportfolio_react.conf

service nginx restart
