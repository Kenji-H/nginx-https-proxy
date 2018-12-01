FROM nginx

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD ./cert.key /etc/nginx/cert.key
ADD ./cert.crt /etc/nginx/cert.crt

CMD ["nginx", "-g", "daemon off;"]
