# Base image
FROM node:12.18.2-alpine3.9 AS builder


# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to working directory
COPY package*.json ./
#adding python path as environment variable
RUN npm config set python /usr/bin/python3

# Install dependencies
RUN npm install --force --python="/usr/bin/python3"

# Copy remaining project files to working directory
COPY . .

# Build production-ready app
RUN npm run build

#create the final image
FROM nginx:1.19.8-alpine

#copy the build artifacts to the nginx directory
COPY --from=builder /app/build /usr/share/nginx/html



# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

