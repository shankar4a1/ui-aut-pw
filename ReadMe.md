**Framework features :**

1. Multiple mode support : desktop/mobile view mode
2. Page Object Model 
2. Cross browser support : Chrome desktop/firefox/WebKit engine/ mobile View mode etc
3. Parallel execution
4. Rerun failure scenarios 
5. HTML reports generation : Playwright standard
6. Docker file included to run remotely/cloud env
   
**Pre requisites :** 

1. Install Node and NPM ( https://nodejs.org/en/download/)
2. Navigate to project folder and Install modules by running the below command
   
     ```
     
     npm install

     npm run build
     
     ```
   
3. Check scripts in package.json to run  tests
   
   Example : To run customer asos sample test on chrome
     
     ```
     npm run test-asos-chrome

     ```

      To run customer asos sample test on firefox
     
     ```
     npm run test-asos-ff

     ```

      To run customer asos sample test on webkit
     
     ```
     npm run test-asos-webkit

     ```
      To run customer asos sample test on all browsers
     
     ```
     npm run test-asos-webkit

     ```

   4. By Default HTML report will be opened post execution. HTML report also can be opened by executing below command

     ```
     npm run show-report

     ```

