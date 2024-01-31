
# WebdriverIO Basic architecture

This project is a sample of basic architecture to implement and execute your web test, the principal componentes are:

* Webdriverio (Current Last version - V8).
* Nodejs v18
* Typescript
* Allure/Spec Reports
* Cucumber
* Chromedriver





#### To Initiate this project just do these below codes:
      npm start
     
#### Run test (global):
     npx wdio run wdio.conf.ts



#### Project structure:

    |
    +-- allure-reports 
    +-- config
    +-- data
    +-- debug
    +-- logs
    +-- node_modules
    +-- results
    |

    \-- test
        | 
        \-- features
         |
          +--demo
          +--step-definitions
         |
        \-- helpers
        |
        \-- page-objects
        | 

    -- wdio.conf.ts
    -- tsconfig.json
    |

