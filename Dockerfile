# Step 1: Use an official Node.js image as the base
FROM node:16-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Steps 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project to the container
COPY . .

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Start the React development server
CMD ["npm", "start"]
