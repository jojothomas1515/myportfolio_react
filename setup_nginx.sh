sudo cp myportfolio_react.conf /etc/nginx/sites-available/

sudo ln -sf /etc/nginx/sites-available/myportfolio_react.conf /etc/nginx/sites-enabled/myportfolio_react.conf

sudo service nginx restart
