package com.example.reactapp;

import android.content.Intent;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OpenActivityModule extends ReactContextBaseJavaModule {

    public OpenActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "OpenActivity";
    }

    @ReactMethod
    public void open() {
        Intent intent = new Intent(getCurrentActivity(), MainActivity.class);
        getCurrentActivity().startActivity(intent);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void setParams(String params) {
        Toast.makeText(getReactApplicationContext(), "triggered by react native with params: " + params, Toast.LENGTH_LONG).show();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getParams() {
        return MainActivity.content;
    }

    @ReactMethod
    public void getString(String data){
        Toast.makeText(getReactApplicationContext(), "gia tri la: "+data, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void moveScreen (String nameScreen){
        Toast.makeText(getReactApplicationContext(), "Navigate: " + nameScreen, Toast.LENGTH_LONG).show();

        Intent intent = new Intent(getCurrentActivity(), MyReactActivity.class);
        intent.putExtra("key", nameScreen);
        getCurrentActivity().startActivity(intent);
    }
}

