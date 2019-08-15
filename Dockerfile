FROM nginx

LABEL maintainer="Thiago Zaranza <thiagozaranza@gmail.com>"

ENV DEBIAN_VERSION "stretch"
#ENV DEBIAN_VERSION "buster"

# RUN echo "deb http://debrepo.funceme.br:3142/deb.debian.org/debian ${DEBIAN_VERSION} main contrib non-free" > /etc/apt/sources.list
# # RUN echo "deb http://debrepo.funceme.br:3142/deb.debian.org/debian ${DEBIAN_VERSION} main contrib non-free" >> /etc/apt/sources.list
# RUN echo "deb http://debrepo.funceme.br:3142/cdn-fastly.deb.debian.org/debian ${DEBIAN_VERSION} main contrib non-free" >> /etc/apt/sources.list
# RUN echo "deb http://debrepo.funceme.br:3142/deb.debian.org/debian ${DEBIAN_VERSION}-updates main contrib non-free" >> /etc/apt/sources.list
# RUN echo "deb http://debrepo.funceme.br:3142/security.debian.org/debian-security ${DEBIAN_VERSION}/updates main " >> /etc/apt/sources.list
# RUN echo "deb http://debrepo.funceme.br:3142/security-cdn.debian.org/debian-security ${DEBIAN_VERSION}/updates main " >> /etc/apt/sources.list

RUN apt-get update

# ADD server/default.conf /etc/nginx/conf.d/default.conf

RUN apt-get install -y	curl \
						git \
						build-essential \
						vim \
						perl 
                        # apt-utils \

RUN set -ex \
	&& curl -sL https://deb.nodesource.com/setup_10.x | bash - \
	&& apt-get install -y nodejs \
	&& npm i npm@^4.0.0 -g \
	&& npm install -g @angular/cli@^8.2.2

ENV APP_ENV="dev"
ENV APP_NAME="tkj-league-app"
ENV APP_FOLDER_NAME="app"

ADD . /usr/share/nginx/html/${APP_FOLDER_NAME}/
#RUN sed -i "s/\/usr\/share\/nginx\/html/\/usr\/share\/nginx\/html\/${APP_FOLDER_NAME}\/dist" /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html/${APP_FOLDER_NAME}/

# RUN  set -ex \
#         && cd /usr/share/nginx/html/${APP_FOLDER_NAME}/ \
#         && npm install \
#         && npm audit fix --registry=https://registry.npmjs.org \
#         && ng build --prod

ADD server/start_angular.sh /start_angular.sh
RUN chmod +x /start_angular.sh

CMD ["ng", "serve"]