# twitch-token

Twitch **user access token** generator base on [OAuth implicit code flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#oauth-implicit-code-flow).  
It's a server with a little bit of client code which helps to get an **access token** for your twitch application.  
  
Note this is an [User Access Token](https://dev.twitch.tv/docs/authentication#types-of-tokens) (not app token).  
  
Provided [scopes](https://dev.twitch.tv/docs/authentication/#scopes) are:  
```chat:read chat:edit channel:moderate whispers:read whispers:edit channel_editor channel:read:subscriptions```

## Quick Start

* Start server

```console
npm install
npm run start
```

* Open browser at <http://localhost:3000>

Enter your client ID from the twitch developer console and click **Login**. Then follow instructions.
<img src="/screenshot.png" alt="example" width="70%" height:="70%"/>
