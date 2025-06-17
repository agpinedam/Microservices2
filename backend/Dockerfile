# Use Node.js base image
FROM node:22

# Set working directory
WORKDIR /backend

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install


# Copy the rest of the backend code
COPY . .

# Expose the backend port (adjust if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start", "--", "--host"]
