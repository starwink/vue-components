FROM nginx:1.23.3
RUN sed -i "s/archive.ubuntu./mirrors.aliyun./g" /etc/apt/sources.list
RUN sed -i "s/deb.debian.org/mirrors.aliyun.com/g" /etc/apt/sources.list
RUN sed -i "s/security.debian.org/mirrors.aliyun.com\/debian-security/g" /etc/apt/sources.list
RUN date
COPY dist /usr/share/nginx/html
# COPY dist /usr/share/nginx/html/pick
COPY nginx.conf  /etc/nginx/nginx.conf