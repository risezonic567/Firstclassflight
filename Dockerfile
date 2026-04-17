FROM node:22.18.0 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


EXPOSE 5173

CMD ["npm", "run", "dev"]

# # STEP 1: Build
# FROM node:22.18.0 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build


# # STEP 2: Serve
# FROM nginx:alpine

# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 8080

# CMD ["nginx", "-g", "daemon off;"]