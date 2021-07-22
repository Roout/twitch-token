# twitch-token
Twitch ***user access token*** generator base on [OAuth implicit code flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#oauth-implicit-code-flow).  
It's a server application with a little bit of client code which helps to get an ***access token*** for your twitch application.   
  
Please, note that it's an [User access token](https://dev.twitch.tv/docs/authentication#types-of-tokens) (NOT app token). 
  
Provided [scopes](https://dev.twitch.tv/docs/authentication/#scopes) are: ```chat:read chat:edit channel:moderate whispers:read whispers:edit channel_editor channel:read:subscriptions```
