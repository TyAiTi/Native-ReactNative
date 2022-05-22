# msgr-android-playground
Android playground <br/>
Integration with Existing Apps <br/>
At folder Navigation, your open terminal <br/>

```
yarn add react-native
yarn add react@version_printed_above
```

```
yarn start
```

Open Android Studio project: ~ Nativgation/android
if (error) --> replace yarn start to 
```
react-native run-android
```
Open Android Studio (folder android) Run App

Intsall firebase library: <br/>
https://rnfirebase.io/auth/usage <br/>
Install & setup the app module
Install google sign in 
```
yarn add @react-native-firebase/app
yarn add @react-native-firebase/auth
yarn add @react-native-google-signin/google-signin
```
and then add file google-services.json  at ~ /android/app/

at ~ /android/build.gradle add line 
```
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.10'
    // Add me --- /\
  }
}
```
at ~ /android/app/build.gradle add line
```
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

At ~ /android/build.gradle add line
```
buildscript {
    ext {
        googlePlayServicesAuthVersion = "19.2.0" // <--- use this version or newer
    }
    dependencies {
        // Add our classpath
        classpath 'com.google.gms:google-services:4.3.10'
        classpath 'com.android.tools.build:gradle:4.2.1' // <--- use this version or newer
        // Add More
    }
    allprojects {
        repositories {
            mavenLocal()
            google() // <--- make sure this is included
            jcenter()
            maven {
                // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
                url "$rootDir/../node_modules/react-native/android"
            }
        }
    }
}
```

at ~ /android/app/build.gradle add line
```
dependencies {

    implementation 'androidx.appcompat:appcompat:1.4.1'
    implementation 'com.google.android.material:material:1.6.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.3'
    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.1.3'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'

    implementation "com.facebook.react:react-native:+" // From node_modules
    implementation "org.webkit:android-jsc:+"

    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.0.0' // <-- this line
}
```

