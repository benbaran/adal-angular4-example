

declare namespace adal {

    interface AdalAuthenticationServiceProvider {
        init(configOptions: Config, httpProvider: any): void;
    }

    interface UserInfo {
        isAuthenticated: boolean,
        userName: string,
        loginError: string,
        profile: any
    }

    interface AdalAuthenticationService {

        config: Config;
        userInfo: UserInfo,

        login(): void;
        loginInProgress(): boolean;
        logOut(): void;
        getCachedToken(resource: string): string;
        acquireToken(resource: string): any;
        getUser(): any;
        getResourceForEndpoint(endpoint: string): string,
        clearCache(): void;
        clearCacheForResource(resource: string): void;
        info(message: string): void;
        verbose(message: string): void;
    }

}

interface Window{
    AuthenticationContext: any;
    callBackMappedToRenewStates: any;
}