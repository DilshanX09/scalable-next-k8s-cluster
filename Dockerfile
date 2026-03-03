# Dockerfile for building and running the static web client using Next.js and Nginx 
FROM node:20.9-alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# After building the application, we will use Nginx to serve the static files
FROM nginx:alpine

# Copy the built application from the builder stage to the Nginx HTML directory
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]