# Appdynamics-and-PCF-and-Nodejs
A simple demo to instrument Nodejs Application using Appd nodejs agent in PCF environment


### AppDynamics Nodejs on Cloud Foundary

## Install and Setup


```
Step 1: Clone project and enter into project folder
```
git clone git@github.com:arungpro/Appdynamics-and-PCF-and-Nodejs.git
cd Appdynamics-and-PCF-and-Nodejs
```
Step 2: Edit below section of index.js:

```
require("appdynamics").profile({
 controllerHostName: '<Your Controller Host>',
 controllerPort: <Your Controller Port>,
 accountName: '<Your Acc Name>',
 accountAccessKey: '<Your Acc key',
 applicationName: '<Your App Name>',
 tierName: '<Your Tier Name>',
 nodeName: '<Your Node Name>',
});

Step 3: cf step and do login as define in https://docs.pivotal.io/partners/appdynamics/using.html

Step 4: Push to cloud with https://github.com/Appdynamics/nodejs-buildpack as buildpack
```
cf push testarungapp -b https://github.com/Appdynamics/nodejs-buildpack
```
Note: testarungapp is my pcf specific <app_name>.

Step 5: Create a user provided service to auto-discover the AppDynamics agent

        NOTE: Using cups based approach. One can use Appdynamics tiles, But its out of scope of this demo. 
        Also, When creating AppDynamics service, using a user-provided service, it must have name prefixed with appdynamics
        I m using `appdynamics` as my service name.
 ```
 cf create-user-provided-service appdynamics -p "host-name,port,ssl-enabled,account-name,account-access-key,application-name,tier-name,node-name"
 ```
 Enter details like hostname, port, Acc Name etc as added in Step 1.
 
Step 6: Bind the service with the app name
```
cf bind-service testarungapp appdynamics
```

Step 7: Restage after the Bind
```
cf restage testarungapp
```

Step 8: Run some continious load to the application for 10-15 mins and check in the controller UI to get controller relavent details
