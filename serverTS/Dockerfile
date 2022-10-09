FROM node:18.7

# CREATING THE FOLDER WE WANT TO USE
RUN mkdir -p /usr/src/api_app
# SETTING THE FOLDER TO WORK WITHIN => NOW IS OUR PATH REF
WORKDIR /usr/src/api_app

# COPYING THE FILE TO INSTALL MODULES
# by this way we avoid the bcrypt problem
COPY package.json /usr/src/api_app/
COPY package-lock.json /usr/src/api_app/
COPY tsconfig.json /usr/src/api_app/

# now bcrypt will work with this specific computer
RUN npm install

RUN npm run build

COPY ./ /usr/src/api_app

CMD ["/bin/bash"]