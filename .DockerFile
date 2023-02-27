FROM mcr.microsoft.com/playwright:v1.31.0-focal

# copy project (including tests)
COPY . PlaywrightSample


WORKDIR /PlaywrightSample

# Install dependencies
RUN npm install


# Install browsers
RUN npx playwright install


CMD [ "npm", "run", "test-asos", "--reporter=list" ]
