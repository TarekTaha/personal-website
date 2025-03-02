# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and public files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage to nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Explicitly copy favicon files to ensure they're included
COPY --from=build /app/public/favicon.ico /usr/share/nginx/html/
COPY --from=build /app/public/logo192.png /usr/share/nginx/html/
COPY --from=build /app/public/logo512.png /usr/share/nginx/html/
COPY --from=build /app/public/manifest.json /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]