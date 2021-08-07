package com.myapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.pdftron.reactnative.RNPdftronPackage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class MyAppPackage implements ReactPackage {
	@Override
	public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
		List<ViewManager> viewManagers = new ArrayList<>();

		viewManagers.addAll(new RNPdftronPackage().createViewManagers(reactContext));
		return viewManagers;
	}

	@Override
	public List<NativeModule> createNativeModules(
		ReactApplicationContext reactContext) {
		List<NativeModule> modules = new ArrayList<>();

		modules.addAll(new RNPdftronPackage().createNativeModules(reactContext));

		return modules;
	}
}
