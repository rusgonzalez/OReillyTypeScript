# Programming Typescript

 Project Notes
 
  ## How to commit changes to github
  
   1. Select source counter tab in VSCode
   2. Add the files you want to commit
   3. Type a commit message
   4. Commit
   5. Sync commit to github by clicking on the bottom left corner 
   
   
  ## How to execute TS files
   1. Open terminal within VSCode, by pressing Ctrl+`
   2. Type `ts-node path/to/file.ts`
    For example: ``` ts-node ch03/index.ts ```
    
    
 ## Testing
  This project uses the Jest testing framework. For a quick overview of see this [cheat sheet](https://devhints.io/jest). For the official information, go [here.](https://jestjs.io/docs/en/getting-started)
  
   ### How to add a test file
    To add a new test file, simple create a file ending with `.test.ts`, (e.g. `index.test.ts`)
    
   ### How to run tests
    In the terminal, from the root folder of the project, run:
     ``` yarn test ```
    If you want the test to be re-run as you work on the code, use the following command:
     ``` yarn test:watch ``` 