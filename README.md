![Tramel Woodard](http://tramelwoodard.com/images/global/tlw_icon.png "Tramel Woodard")
# angular-6-starter
Complete Angular 6 Starter utilizing Angular 6.0.2.

## Angular 6 Starter Issues
### @angular/cli Upgrade
Before creating an Angular 6 application, you will want to ensure that your @angular/cli version is at least 1.7.4.

### 'ng new' Error Path '/app/app.module.ts' does not exist
If you upgrade Angular and come across the following error:

```Error: Path "/app/app.module.ts" does not exist.```
```Path "/app/app.module.ts" does not exist.```

Your previous version of Angular may be too old to completely update as needed. If this is the case, you will need to uninstall Node.js, reinstall from the website and as above, ensure, your @angular/cli version is 1.7.4 or above.

### Installing Angular 5.x.x Application Before Upgrading to Angular 6
Until the @angular/cli 'ng new' command is updated to create a standard package.json file that contains Angular 6, this starter package is created with a Angular 5.x.x and then updated to Angular 6.x.x using the 'ng upgrade' command from @angular/cli 1.7.4:

### Upgrading from Angular 5.x.x to 6.x.x
In order to upgrade from 5.x.x to 6.x.x, I changed into the angular-6-starter directory and performed the following updates:


### 'ng serve' Issue
For some installations, after running 'ng new', the following error occurs:
```Local workspace file ('angular.json') could not be found.```
```Error: Local workspace file ('angular.json') could not be found.```

In order to upgrade your local version (inside the application directory), the following had to be executed:

```ng update @angular/cli```

This command will update your application from 5.x.x to the latest version of 6.x.x.


## Angular 6 Starter Instructions
Now that your environment is properly set, you can clone the Angular 6 starter:

### Clone via SSH
```git clone git@github.com:tramel-woodard/angular-6-starter.git```

### Clone via HTTPS
```git clone https://github.com/tramel-woodard/angular-6-starter.git```

### Install NPM Modules
```cd angular-6-starter && npm install```

### Run Angular 6 Project and Serve to Browser
```npm serve --open```

## Angular 6 - RxJS 6 Compatibility Issue and Solution
As of Angular 6, HttpClient will be used in place of Http. If you are already familiar with Angular 6 HttpClient syntax, you simply need to install the following in your local copy of this repo:

```npm install --save rxjs-compat```

Complete instructions on how to use HttpClient and Angular 6 can be found here:

[RxJS 6 - What Changed? What's New?](https://academind.com/learn/javascript/rxjs-6-what-changed/)# Angular_FlowChartJS
