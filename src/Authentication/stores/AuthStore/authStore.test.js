/*global expect jest*/
import React from 'react';
import {API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL}
from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {setAccessToken} from '../../utils/StorageUtils';
import {getAccessToken} from '../../utils/StorageUtils';
import {clearUserSession} from '../../utils/StorageUtils';
import AuthService from '../../services/AuthService/index.api.js';
import AuthStore from '.';
import getUserSignInResponse from "../../../E-Commerce-App/fixtures/getProductsResponse.json";


describe("authStore tests",() => {
    let authAPIService;
    let authStore;
    beforeEach(() => {
      authAPIService = new AuthService();
      authStore = new AuthStore(authAPIService);
    });
  
    it("authStore default values of observable variables",() => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
        expect(authStore.getUserSignInAPIResponse).toBe(null);
        expect(authStore.access_token).toBe(getAccessToken());
    });
        
    // it("get token",() => {
    //     const usersPromise = authStore.authAPIService.signIn();
    //     bindPromiseWithOnSuccess(usersPromise)
    //     .to(authStore.setUserSignInAPIStatus,authStore.setUserSignInAPIResponse)
    //     .catch(authStore.getUserSignInAPIError);
    //     const access_token = "f5af9f51-07e6-4332-8f1a-c0c11c1e3434";
    //     setAccessToken(authStore.access_token);
    //     expect(authStore.access_token).toBe(access_token);
    // });
    
    
    it("should test userSignInAPI data fetching state", () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPIService.signIn = mockSignInAPI;

    authStore.getToken(requestObject, onSuccess, onFailure);
    expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    expect(onSuccess).not.toBeCalled();
    expect(onFailure).not.toBeCalled();
  });

  it("should test userSignInAPI success state", async () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    const requestObject = {
      username: "test-user",
      password: "test-password"
    };

    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPIService.signIn = mockSignInAPI;

    await authStore.getToken(requestObject, onSuccess, onFailure);
    expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
  });
  
  it("should test userSignInAPI failure state", () => {
    authAPIService = new AuthService();
    authStore = new AuthStore(authAPIService);
  
    const mockSuccessPromise = new Promise(function(resolve, reject) {
      throw new Error("error");
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    
    authStore.setUserSignInAPIError(API_FAILED);
    expect(authStore.getUserSignInAPIError).toBe(API_FAILED);
  });

  
  it("should test user sign-out", () => {
    authStore.clearToken();
    expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
    expect(authStore.getUserSignInAPIError).toBe(null);
  });
})